package com.devcamp.loggingsystem.service.dto.timesheetrowdto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

/**
 * This is class contains the Full TimeSheetRow DTO.
 *
 * @author Stanislav Ivanov
 */
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Data
public class TimeSheetRowFullDTO {

    private long id;

    @NotNull
    @Min(1)
    @Schema(name = "timeSheetId", description = "Id of the selected timesheet")
    private int timeSheetId;

    @NotNull
    @Min(1)
    @Schema(name = "projectId", description = "Id of the selected project")
    private int projectId;

    @NotNull
    @Min(1)
    @Schema(name = "taskId", description = "Id of the selected task")
    private int taskId;

    @NotNull
    @DecimalMin("0.0")
    @Schema(name = "mondayHours", description = "Hours worked during Monday.")
    private Double mondayHours;

    @NotNull
    @DecimalMin("0.0")
    @Schema(name = "tuesdayHours", description = "Hours worked during Tuesday.")
    private Double tuesdayHours;

    @NotNull
    @DecimalMin("0.0")
    @Schema(name = "wednesdayHours", description = "Hours worked during Wednesday.")
    private Double wednesdayHours;

    @NotNull
    @DecimalMin("0.0")
    @Schema(name = "thursdayHours", description = "Hours worked during Thursday.")
    private Double thursdayHours;

    @NotNull
    @DecimalMin("0.0")
    @Schema(name = "fridayHours", description = "Hours worked during Friday.")
    private Double fridayHours;

    @NotNull
    @DecimalMin("0.0")
    @Schema(name = "saturdayHours", description = "Hours worked during Saturday.")
    private Double saturdayHours;

    @NotNull
    @DecimalMin("0.0")
    @Schema(name = "sundayHours", description = "Hours worked during Sunday.")
    private Double sundayHours;

    @NotNull
    @DecimalMin("0.0")
    @Schema(name = "totalHours", description = "Hours worked during the whole week.")
    private Double totalHours;
}
