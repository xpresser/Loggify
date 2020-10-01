package com.devcamp.loggingsystem.service;

import com.devcamp.loggingsystem.exception.TimeSheetRowNotFoundException;
import com.devcamp.loggingsystem.service.dto.timesheetrowdto.TimeSheetRowDTO;
import com.devcamp.loggingsystem.service.dto.timesheetrowdto.TimeSheetRowFullDTO;
import org.springframework.data.domain.Page;

/**
 * @author Stanislav Ivanov
 */
public interface TimeSheetRowService {

    TimeSheetRowFullDTO getTimeSheetRowById(Long timeSheetRowId) throws TimeSheetRowNotFoundException;

    Page<TimeSheetRowFullDTO> getAllTimeSheetRowsByPages(int pageNumber, int numberOfElementsPerPage);

    TimeSheetRowFullDTO createTimeSheetRow(TimeSheetRowDTO timeSheetRowDTO);

    TimeSheetRowFullDTO updateTimeSheetRow(Long timeSheetRowId, TimeSheetRowDTO timeSheetRowDTO)
            throws TimeSheetRowNotFoundException;

    TimeSheetRowFullDTO deleteTimeSheetRow(Long timeSheetRowId) throws TimeSheetRowNotFoundException;

}
