package com.devcamp.loggingsystem.service.dto.timesheet;

import com.devcamp.loggingsystem.enumeration.timesheet.TimesheetStatus;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.validation.annotation.Validated;

import javax.persistence.Column;
import java.time.LocalDate;

/**
 * @author - Mikael Parsekyan
 */
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Validated
public class TimesheetDTO {

    @Column(name = "status")
    private TimesheetStatus status;

    @Schema(name = "totalHours", description = "Timesheet total hours")
    private Double totalHours;

    @Schema(name = "startingDate", description = "Timesheet starting date")
    private LocalDate startingDate;
}
