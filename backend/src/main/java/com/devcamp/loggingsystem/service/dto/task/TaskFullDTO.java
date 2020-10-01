package com.devcamp.loggingsystem.service.dto.task;

import com.devcamp.loggingsystem.enumeration.timesheet.Projects;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * @author - Mikael Parsekyan
 */
@Data
public class TaskFullDTO {

    @Schema(name = "taskId", description = "Task id")
    private Long id;

    @Schema(name = "taskName", description = "Task name")
    private Projects name;
}
