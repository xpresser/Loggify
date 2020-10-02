package com.devcamp.loggingsystem.service;

import com.devcamp.loggingsystem.exception.TimeSheetRowNotFoundException;
import com.devcamp.loggingsystem.exception.TimesheetNotFoundException;
import com.devcamp.loggingsystem.service.dto.timesheetrowdto.TimeSheetRowDTO;
import com.devcamp.loggingsystem.service.dto.timesheetrowdto.TimeSheetRowFullDTO;
import com.devcamp.loggingsystem.service.dto.timesheetrowdto.TimesheetFullRowCollectionDTO;
import com.devcamp.loggingsystem.service.dto.timesheetrowdto.TimesheetRowCollectionDTO;
import org.springframework.data.domain.Page;

/**
 * @author Stanislav Ivanov
 */
public interface TimeSheetRowService {

    TimeSheetRowFullDTO getTimeSheetRowById(Long timeSheetRowId) throws TimeSheetRowNotFoundException;

    Page<TimeSheetRowFullDTO> getAllTimeSheetRowsByPages(int pageNumber, int numberOfElementsPerPage);

    TimeSheetRowFullDTO createTimeSheetRow(TimeSheetRowDTO timeSheetRowDTO);

    TimesheetFullRowCollectionDTO createTimeSheetRows(TimesheetRowCollectionDTO rowCollectionDTO) throws TimesheetNotFoundException;

    TimeSheetRowFullDTO updateTimeSheetRow(Long timeSheetRowId, TimeSheetRowDTO timeSheetRowDTO)
            throws TimeSheetRowNotFoundException;

    TimeSheetRowFullDTO deleteTimeSheetRow(Long timeSheetRowId) throws TimeSheetRowNotFoundException;

}
