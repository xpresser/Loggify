package com.devcamp.loggingsystem.service.bean;

import com.devcamp.loggingsystem.exception.TimesheetNotFoundException;
import com.devcamp.loggingsystem.persistence.entity.Timesheet;
import com.devcamp.loggingsystem.persistence.entity.TimesheetRow;
import com.devcamp.loggingsystem.persistence.repository.TimesheetRepository;
import com.devcamp.loggingsystem.service.TimesheetService;
import com.devcamp.loggingsystem.service.dto.timesheet.TimesheetDTO;
import com.devcamp.loggingsystem.service.dto.timesheet.TimesheetFullDTO;
import com.devcamp.loggingsystem.service.dto.timesheetrowdto.TimeSheetRowFullDTO;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collector;
import java.util.stream.Collectors;

/**
 * @author - Mikael Parsekyan
 */
@Service
public class TimesheetServiceBean implements TimesheetService {

    private static final int DEFAULT_PAGE_SIZE = 20;

    private final TimesheetRepository timesheetRepository;
    private final ModelMapper modelMapper;

    public TimesheetServiceBean(TimesheetRepository timesheetRepository, ModelMapper modelMapper) {
        this.timesheetRepository = timesheetRepository;
        this.modelMapper = modelMapper;
    }


    @Override
    public TimesheetFullDTO createTimesheet(TimesheetDTO meetingDTO) {
        Timesheet timesheet = this.modelMapper.map(meetingDTO, Timesheet.class);
        Timesheet timesheetEntity = this.timesheetRepository.saveAndFlush(timesheet);

        return this.modelMapper.map(timesheetEntity, TimesheetFullDTO.class);
    }

    @Override
    public Page<TimesheetFullDTO> getAll(int page, Integer pageSize, boolean sortedAsc) {
        if (pageSize == null || pageSize <= 0) {
            pageSize = DEFAULT_PAGE_SIZE;
        }

        Page<Timesheet> allTimesheets;

        if (sortedAsc) {
            allTimesheets = this.timesheetRepository.findAllByOrderByStartingDateAsc(PageRequest.of(page, pageSize));
        } else {
            allTimesheets = this.timesheetRepository.findAll(PageRequest.of(page, pageSize));
        }

        return allTimesheets.map(room -> this.modelMapper.map(room, TimesheetFullDTO.class));

    }

    @Override
    public TimesheetFullDTO updateTimesheetById(Long timesheetId, TimesheetDTO updatedTimesheet) throws TimesheetNotFoundException {
        TimesheetFullDTO timesheetById = this.getTimesheetById(timesheetId);

        if (timesheetById == null) {
            throw new TimesheetNotFoundException();
        }

        Timesheet timesheet = this.modelMapper.map(timesheetById, Timesheet.class);
        Timesheet newTimesheet = this.modelMapper.map(updatedTimesheet, Timesheet.class);

        this.update(timesheet, newTimesheet);

        return this.modelMapper.map(this.timesheetRepository.saveAndFlush(timesheet), TimesheetFullDTO.class);

    }

    @Override
    public TimesheetFullDTO deleteTimesheetById(Long meetingId) throws TimesheetNotFoundException {
        Optional<Timesheet> timesheet = this.timesheetRepository.findById(meetingId);

        if (timesheet.isEmpty()) {
            throw new TimesheetNotFoundException();
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
        oldTimesheet.setUser(newTimesheet.getUser());
    }
}
