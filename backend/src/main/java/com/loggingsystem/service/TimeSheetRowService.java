package com.loggingsystem.service;

import com.loggingsystem.exception.TimeSheetRowNotFoundException;
import com.loggingsystem.exception.TimesheetNotFoundException;
import com.loggingsystem.service.dto.timesheetrowdto.TimeSheetRowDTO;
import com.loggingsystem.service.dto.timesheetrowdto.TimeSheetRowFullDTO;
import com.loggingsystem.service.dto.timesheetrowdto.TimesheetFullRowCollectionDTO;
import com.loggingsystem.service.dto.timesheetrowdto.TimesheetRowCollectionDTO;
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
