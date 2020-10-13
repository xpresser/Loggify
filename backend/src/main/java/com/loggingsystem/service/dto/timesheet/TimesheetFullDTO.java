package com.loggingsystem.service.dto.timesheet;

import com.loggingsystem.enumeration.timesheet.TimesheetStatus;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.validation.annotation.Validated;

import javax.persistence.Column;
import javax.validation.constraints.Min;
import java.time.LocalDate;

/**
 * @author - Mikael Parsekyan
 */
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Validated
public class TimesheetFullDTO {

    @Min(1)
    @Schema(name = "id", description = "Timesheet id", minimum = "1")
    private Long id;

    @Column(name = "status")
    private TimesheetStatus status;

    @Schema(name = "totalHours", description = "Timesheet total hours")
    private Double totalHours;

    @Schema(name = "startingDate", description = "Timesheet starting date")
    private LocalDate startingDate;
}
