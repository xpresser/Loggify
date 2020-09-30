package com.devcamp.loggingsystem.service.dto.timesheet;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.validation.annotation.Validated;

import java.time.LocalDate;

/**
 * @author - Mikael Parsekyan
 */
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Validated
public class TimesheetDTO {

    @Schema(name = "totalHours", description = "Timesheet total hours")
    private Double totalHours;

    @Schema(name = "startingDate", description = "Timesheet starting date")
    private LocalDate startingDate;
}
