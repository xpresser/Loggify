package com.devcamp.loggingsystem.service;

import com.devcamp.loggingsystem.exception.ForbiddenTimesheetDeletion;
import com.devcamp.loggingsystem.exception.TimesheetNotFoundException;
import com.devcamp.loggingsystem.exception.UserNotFoundException;
import com.devcamp.loggingsystem.service.dto.timesheet.TimesheetDTO;
import com.devcamp.loggingsystem.service.dto.timesheet.TimesheetFullDTO;
import com.devcamp.loggingsystem.service.dto.timesheetrowdto.TimeSheetRowFullDTO;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author - Mikael Parsekyan
 */
@Service
public interface TimesheetService {
    TimesheetFullDTO createTimesheet(TimesheetDTO timesheetDTO);

    Page<TimesheetFullDTO> getAll(int page, Integer pageSize, boolean sortedAsc, Long userId) throws UserNotFoundException;

    TimesheetFullDTO getById(Long timesheetId) throws UserNotFoundException;

    TimesheetFullDTO updateTimesheetById(Long meetingId, TimesheetDTO timesheetDTO) throws TimesheetNotFoundException;

    TimesheetFullDTO deleteTimesheetById(Long meetingId) throws TimesheetNotFoundException, ForbiddenTimesheetDeletion;

    List<TimeSheetRowFullDTO> getTimesheetRows(Long id);
}
