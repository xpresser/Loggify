package com.devcamp.loggingsystem.service.dto.timesheetrowdto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.validation.annotation.Validated;

import java.util.List;

/**
 * This is class contains the collection of TimeSheetRow DTO.
 *
 * @author Mikael Parsekyan
 */
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Validated
public class TimesheetRowCollectionDTO {

    @Schema(name = "rows", description = "The rows for the timesheet")
    private List<TimeSheetRowDTO> rows;
}
