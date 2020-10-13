package com.loggingsystem.service;

import com.loggingsystem.exception.ForbiddenTimesheetDeletion;
import com.loggingsystem.exception.TimesheetNotFoundException;
import com.loggingsystem.exception.UserNotFoundException;
import com.loggingsystem.service.dto.timesheet.TimesheetDTO;
import com.loggingsystem.service.dto.timesheet.TimesheetFullDTO;
import com.loggingsystem.service.dto.timesheetrowdto.TimeSheetRowFullDTO;
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
