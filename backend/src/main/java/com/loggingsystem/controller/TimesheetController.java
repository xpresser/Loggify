package com.loggingsystem.controller;

import com.loggingsystem.exception.ForbiddenTimesheetDeletion;
import com.loggingsystem.exception.TimesheetNotFoundException;
import com.loggingsystem.service.TimesheetService;
import com.loggingsystem.service.dto.timesheet.TimesheetDTO;
import com.loggingsystem.service.dto.timesheet.TimesheetFullDTO;
import com.loggingsystem.service.dto.timesheetrowdto.TimeSheetRowFullDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.util.List;

/**
 * @author - Mikael Parsekyan
 */
@RestController
@RequestMapping("v1/timesheets")
//@PreAuthorize("hasRole('USER')")
public class TimesheetController {
    private final TimesheetService timesheetService;

    public TimesheetController(TimesheetService timesheetService) {
        this.timesheetService = timesheetService;
    }

    @Operation(summary = "This request method adds a new timesheet.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "This method creates timesheet"),
            @ApiResponse(responseCode = "400", description = "Request body is invalid."),
            @ApiResponse(responseCode = "500", description = "Internal Server Error")})
    @PostMapping
    public ResponseEntity<TimesheetFullDTO> addTimesheet(@Valid @RequestBody TimesheetDTO timesheetDTO) {
        return new ResponseEntity<>(this.timesheetService.createTimesheet(timesheetDTO), HttpStatus.CREATED);
    }

    @Operation(summary = "This request method return all timesheets.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "This method gets all timesheets."),
            @ApiResponse(responseCode = "500", description = "Internal Server Error")})
    @GetMapping
    public ResponseEntity<Page<TimesheetFullDTO>> getAllTimesheets(@RequestParam("page") int page,
                                                                   @RequestParam(value = "pageSize", required = false)
                                                                           Integer pageSize,
                                                                   @RequestParam(value = "sortedAsc", required = false) boolean sortedAsc,
                                                                   @RequestParam(value = "userId") Long userId) {
        return new ResponseEntity<>(this.timesheetService.getAll(page, pageSize, sortedAsc, userId), HttpStatus.OK);
    }

    @Operation(summary = "This request method return timesheet.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "This method gets timesheet."),
            @ApiResponse(responseCode = "500", description = "Internal Server Error")})
    @GetMapping("/{id}")
    public ResponseEntity<TimesheetFullDTO> getTimesheet(@PathVariable @NotNull @Min(1) Long id) throws TimesheetNotFoundException {
        return new ResponseEntity<>(this.timesheetService.getById(id), HttpStatus.OK);
    }

    @Operation(summary = "This request method update timesheet.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "This method updates timesheet."),
            @ApiResponse(responseCode = "400", description = "Request body is invalid."),
            @ApiResponse(responseCode = "404", description = "Timesheet not found."),
            @ApiResponse(responseCode = "500", description = "Internal Server Error")})
    @PutMapping("/{id}")
    public ResponseEntity<TimesheetFullDTO> updateTimesheet(@Valid @RequestBody TimesheetDTO timesheetDTO,
                                                            @PathVariable @NotNull @Min(1) Long id) throws TimesheetNotFoundException {
        return new ResponseEntity<>(this.timesheetService.updateTimesheetById(id, timesheetDTO), HttpStatus.OK);
    }

    @Operation(summary = "This request method delete timesheet.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "This method deletes timesheet."),
            @ApiResponse(responseCode = "404", description = "Timesheet not found."),
            @ApiResponse(responseCode = "500", description = "Internal Server Error")})
    @DeleteMapping("/{id}")
    public ResponseEntity<TimesheetFullDTO> deleteTimesheet(@PathVariable @NotNull @Min(1) Long id) throws TimesheetNotFoundException,
            ForbiddenTimesheetDeletion {
        return new ResponseEntity<>(this.timesheetService.deleteTimesheetById(id), HttpStatus.OK);
    }

    @Operation(summary = "This request method get timesheet rows.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "This method get timesheet rows."),
            @ApiResponse(responseCode = "404", description = "Timesheet not found."),
            @ApiResponse(responseCode = "500", description = "Internal Server Error")})
    @GetMapping("/{id}/rows")
    public ResponseEntity<List<TimeSheetRowFullDTO>> getTimesheetRows(@PathVariable @NotNull @Min(1) Long id) throws TimesheetNotFoundException {
        return new ResponseEntity<>(this.timesheetService.getTimesheetRows(id), HttpStatus.OK);
    }

    @ExceptionHandler(ForbiddenTimesheetDeletion.class)
    public ResponseEntity<String> handleForbiddenTimesheetDeletion(ForbiddenTimesheetDeletion e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    }
}
