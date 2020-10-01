package com.devcamp.loggingsystem.controller;

import com.devcamp.loggingsystem.service.bean.TimeSheetRowServiceBean;
import com.devcamp.loggingsystem.service.dto.timesheetrowdto.TimeSheetRowDTO;
import com.devcamp.loggingsystem.service.dto.timesheetrowdto.TimeSheetRowFullDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestBody;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

/**
 * This is the REST controller for the TimeSheetRow CRUD operations.
 *
 * @author Stanislav Ivanov
 */
@RestController
@RequestMapping("api/v1/timesheetrows")
@PreAuthorize("hasRole('USER')")
public class TimeSheetRowController {

    private final TimeSheetRowServiceBean timeSheetRowService;

    @Autowired
    public TimeSheetRowController(TimeSheetRowServiceBean timeSheetRowService) {
        this.timeSheetRowService = timeSheetRowService;
    }

    @Operation(summary = "Get Time Sheet Row by id", description = "Returns Time Sheet Row by id. " +
            "Id must be a positive number")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Returns Time Sheet Row"),
            @ApiResponse(responseCode = "404", description = "Time Sheet Row not found"),
            @ApiResponse(responseCode = "500", description = "Internal Server Error")})
    @GetMapping("/{id}")
    public ResponseEntity<TimeSheetRowFullDTO> getById(@PathVariable @NotBlank @Min(1) long id) {
        return ResponseEntity.ok(timeSheetRowService.getTimeSheetRowById(id));
    }

    @Operation(summary = "Get all Time Sheet Rows", description = "Returns all Time Sheet Rows by pages")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Return a page with Time Sheet Rows"),
            @ApiResponse(responseCode = "500", description = "Internal Server Error")})

    @GetMapping(params = {"page", "size"})
    public ResponseEntity<Page<TimeSheetRowFullDTO>> getAll(
            @Parameter(description = "Page number") @RequestParam(value = "page") int page,
            @Parameter(description = "Size number - how many items to return") @RequestParam("size") int size) {
        return ResponseEntity.ok(timeSheetRowService.getAllTimeSheetRowsByPages(page, size));
    }

    @Operation(summary = "Update Time Sheet Row", description = "Updates Time Sheet Row by id with new values." +
            "Id must be a positive number")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Time Sheet Row updated"),
            @ApiResponse(responseCode = "400", description = "Request body is invalid."),
            @ApiResponse(responseCode = "404", description = "Time Sheet Row not found"),
            @ApiResponse(responseCode = "500", description = "Internal Server Error")})
    @PutMapping("/{id}")
    public ResponseEntity<TimeSheetRowFullDTO> updateTimesheetRow(@PathVariable @NotBlank @Min(1) long id,
                                                                  @Valid @RequestBody TimeSheetRowDTO dto) {
        return ResponseEntity.ok(timeSheetRowService.updateTimeSheetRow(id, dto));
    }

    @Operation(summary = "Create Time Sheet Row", description = "Creates new Time Sheet Row, " +
            "check TimeSheetRow schema for constraints")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Time Sheet Row created"),
            @ApiResponse(responseCode = "400", description = "Request body is invalid."),
            @ApiResponse(responseCode = "500", description = "Internal Server Error")})
    @PostMapping
    public ResponseEntity<TimeSheetRowFullDTO> createTimesheetRow(@Valid @RequestBody TimeSheetRowDTO dto) {
        return new ResponseEntity<>(timeSheetRowService.createTimeSheetRow(dto), HttpStatus.CREATED);
    }

    @Operation(summary = "Delete Time Sheet Row by id",
            description = "Soft deletes a Time Sheet Row by id by setting isDeleted to true. Id must be a positive number")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Time Sheet Row deleted"),
            @ApiResponse(responseCode = "404", description = "Time Sheet Row not found"),
            @ApiResponse(responseCode = "500", description = "Internal Server Error")})
    @DeleteMapping("/{id}")
    public ResponseEntity<TimeSheetRowFullDTO> deleteTimesheetRow(@PathVariable @NotBlank @Min(1) long id) {
        return ResponseEntity.ok(timeSheetRowService.deleteTimeSheetRow(id));
    }

}
