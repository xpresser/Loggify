package com.devcamp.loggingsystem.service.bean;

import com.devcamp.loggingsystem.enumeration.timesheet.TimesheetStatus;
import com.devcamp.loggingsystem.exception.ForbiddenTimesheetDeletion;
import com.devcamp.loggingsystem.exception.TimesheetNotFoundException;
import com.devcamp.loggingsystem.exception.UserNotFoundException;
import com.devcamp.loggingsystem.persistence.entity.Timesheet;
import com.devcamp.loggingsystem.persistence.entity.TimesheetRow;
import com.devcamp.loggingsystem.persistence.entity.User;
import com.devcamp.loggingsystem.persistence.repository.TimesheetRepository;
import com.devcamp.loggingsystem.persistence.repository.UserRepository;
import com.devcamp.loggingsystem.service.TimesheetService;
import com.devcamp.loggingsystem.service.dto.timesheet.TimesheetDTO;
import com.devcamp.loggingsystem.service.dto.timesheet.TimesheetFullDTO;
import com.devcamp.loggingsystem.service.dto.timesheetrowdto.TimeSheetRowFullDTO;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * @author - Mikael Parsekyan
 */
@Service
public class TimesheetServiceBean implements TimesheetService {

    private static final int DEFAULT_PAGE_SIZE = 20;

    private final TimesheetRepository timesheetRepository;

    private final UserRepository userRepository;

    private final ModelMapper modelMapper;

    public TimesheetServiceBean(TimesheetRepository timesheetRepository, UserRepository userRepository, ModelMapper modelMapper) {
        this.timesheetRepository = timesheetRepository;
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public TimesheetFullDTO createTimesheet(TimesheetDTO timesheetDTO) throws UserNotFoundException {
        Timesheet timesheet = new Timesheet();
        timesheet.setTotalHours(timesheetDTO.getTotalHours());
        timesheet.setStatus(timesheetDTO.getStatus());
        timesheet.setStartingDate(timesheetDTO.getStartingDate());

        Optional<User> user = this.userRepository.findById(timesheetDTO.getAuthorId());

        if (user.isEmpty()) {
            throw new UserNotFoundException();
        }

        timesheet.setUser(user.get());

        Timesheet savedTimesheet = this.timesheetRepository.saveAndFlush(timesheet);

        return this.modelMapper.map(savedTimesheet, TimesheetFullDTO.class);
    }

    @Override
    public TimesheetFullDTO getById(Long timesheetId) throws TimesheetNotFoundException {

        Optional<Timesheet> timesheetById = this.timesheetRepository.findById(timesheetId);

        if (timesheetById.isEmpty()) {
            throw new TimesheetNotFoundException();
        }
        return this.modelMapper.map(timesheetById.get(), TimesheetFullDTO.class);
    }

    @Override
    public Page<TimesheetFullDTO> getAll(int page, Integer pageSize, boolean sortedAsc, Long userId) throws UserNotFoundException {
        if (pageSize == null || pageSize <= 0) {
            pageSize = DEFAULT_PAGE_SIZE;
        }

        Optional<User> userById = this.userRepository.findById(userId);

        if (userById.isEmpty()) {
            throw new UserNotFoundException();
        }

        Page<Timesheet> allTimesheets;

        if (sortedAsc) {
            allTimesheets = this.timesheetRepository.findAllByUserOrderByStartingDateAsc(userById.get(),
                    PageRequest.of(page, pageSize));
        } else {
            allTimesheets = this.timesheetRepository.findAllByUser(userById.get(),
                    PageRequest.of(page, pageSize));
        }

        return allTimesheets.map(room -> this.modelMapper.map(room, TimesheetFullDTO.class));

    }

    @Override
    public TimesheetFullDTO updateTimesheetById(Long timesheetId, TimesheetDTO updatedTimesheet) throws TimesheetNotFoundException {
        TimesheetFullDTO timesheetById = this.getTimesheetById(timesheetId);

        if (timesheetById == null) {
            throw new TimesheetNotFoundException();
        }
        Optional<User> user = userRepository.findById(updatedTimesheet.getAuthorId());

        if(user.isEmpty()){
            throw new UserNotFoundException();
        }
        Timesheet timesheet = this.modelMapper.map(timesheetById, Timesheet.class);
        Timesheet newTimesheet = this.modelMapper.map(updatedTimesheet, Timesheet.class);
        timesheet.setUser(user.get());

        this.update(timesheet, newTimesheet);

        return this.modelMapper.map(this.timesheetRepository.saveAndFlush(timesheet), TimesheetFullDTO.class);

    }

    @Override
    public TimesheetFullDTO deleteTimesheetById(Long meetingId) throws TimesheetNotFoundException, ForbiddenTimesheetDeletion {
        Optional<Timesheet> timesheet = this.timesheetRepository.findById(meetingId);

        if (timesheet.isEmpty()) {
            throw new TimesheetNotFoundException();
        }

        if (timesheet.get().getStatus() == TimesheetStatus.SUBMITTED) {
            throw new ForbiddenTimesheetDeletion();
        }

        this.timesheetRepository.deleteById(meetingId);
        return this.modelMapper.map(timesheet.get(), TimesheetFullDTO.class);

    }

    @Override
    public List<TimeSheetRowFullDTO> getTimesheetRows(Long timesheetId) {
        Optional<Timesheet> timesheet = this.timesheetRepository.findById(timesheetId);

        if (timesheet.isEmpty()) {
            throw new TimesheetNotFoundException();
        }

        Set<TimesheetRow> rows = timesheet.get().getRows();

        return rows.stream()
                .map(timesheetRow -> this.modelMapper.map(timesheetRow, TimeSheetRowFullDTO.class))
                .collect(Collectors.toList());
    }

    private TimesheetFullDTO getTimesheetById(Long timesheetId) throws TimesheetNotFoundException {
        Optional<Timesheet> timesheet = this.timesheetRepository.findById(timesheetId);

        return timesheet.map(value -> this.modelMapper.map(value, TimesheetFullDTO.class))
                .orElseThrow(TimesheetNotFoundException::new);
    }

    private void update(Timesheet oldTimesheet, Timesheet newTimesheet) {
        oldTimesheet.setRows(newTimesheet.getRows());
        oldTimesheet.setTotalHours(newTimesheet.getTotalHours());
        oldTimesheet.setStatus(newTimesheet.getStatus());
    }
}
