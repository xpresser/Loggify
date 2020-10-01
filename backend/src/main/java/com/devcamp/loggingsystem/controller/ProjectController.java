package com.devcamp.loggingsystem.controller;

import com.devcamp.loggingsystem.service.ProjectService;
import com.devcamp.loggingsystem.service.dto.project.ProjectFullDTO;
import com.devcamp.loggingsystem.service.dto.timesheet.TimesheetFullDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author - Mikael Parsekyan
 */
@RestController
@RequestMapping("v1/projects")
public class ProjectController {

    private final ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @Operation(summary = "This request method return all projects.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "This method gets all projects."),
            @ApiResponse(responseCode = "500", description = "Internal Server Error")})
    @GetMapping
    public ResponseEntity<List<ProjectFullDTO>> getAllProjects() {
        return new ResponseEntity<>(this.projectService.getAll(), HttpStatus.OK);
    }
}
