package com.devcamp.loggingsystem.controller;

import com.devcamp.loggingsystem.service.TaskService;
import com.devcamp.loggingsystem.service.dto.task.TaskFullDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
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
@RequestMapping("v1/tasks")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @Operation(summary = "This request method return all tasks.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "This method gets all tasks."),
            @ApiResponse(responseCode = "500", description = "Internal Server Error")})
    @GetMapping
    public ResponseEntity<List<TaskFullDTO>> getAllProjects() {
        return new ResponseEntity<>(this.taskService.getAll(), HttpStatus.OK);
    }
}
