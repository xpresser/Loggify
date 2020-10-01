package com.devcamp.loggingsystem.service;

import com.devcamp.loggingsystem.exception.TimesheetNotFoundException;
import com.devcamp.loggingsystem.service.dto.timesheet.TimesheetDTO;
import com.devcamp.loggingsystem.service.dto.timesheet.TimesheetFullDTO;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

/**
 * @author - Mikael Parsekyan
 */
@Service
public interface TimesheetService {
    TimesheetFullDTO createTimesheet(TimesheetDTO timesheetDTO);

    Page<TimesheetFullDTO> getAll(int page, Integer pageSize, boolean sortedAsc);

    TimesheetFullDTO updateTimesheetById(Long meetingId, TimesheetDTO timesheetDTO) throws TimesheetNotFoundException;

    TimesheetFullDTO deleteTimesheetById(Long meetingId) throws TimesheetNotFoundException;

}