package com.loggingsystem.service.dto.timesheet;

import com.loggingsystem.enumeration.timesheet.TimesheetStatus;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.validation.annotation.Validated;

import javax.validation.constraints.Min;
import java.time.LocalDate;

/**
 * @author - Mikael Parsekyan
 */
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Validated
public class TimesheetDTO {

    @Schema(name = "status", description = "Timesheet status")
    private TimesheetStatus status;

    @Schema(name = "totalHours", description = "Timesheet total hours")
    private Double totalHours;

    @Schema(name = "startingDate", description = "Timesheet starting date")
    private LocalDate startingDate;

    @Min(1)
    @Schema(name = "authorId", description = "Timesheet author id")
    private Long authorId;
}
