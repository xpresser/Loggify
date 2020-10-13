package com.loggingsystem.service.dto.project;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * @author - Mikael Parsekyan
 */
@Data
public class ProjectFullDTO {

    @Schema(name = "projectId", description = "Project id")
    private Long id;

    @Schema(name = "projectName", description = "Project name")
    private String name;
}
