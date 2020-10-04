package com.devcamp.loggingsystem.config;

import com.devcamp.loggingsystem.exception.ResourceNotFoundException;
import com.devcamp.loggingsystem.exception.TimeSheetRowNotFoundException;
import com.devcamp.loggingsystem.exception.TimesheetNotFoundException;
import com.devcamp.loggingsystem.exception.UserNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * @author Metodi Vladimirov
 */
@RestControllerAdvice
public class ControllerValidationHandler {

    /**
     * Returns custom json for not found resource
     * @param exception custom exception for not found resource in the database
     * @return the custom json exception
     */
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<String> resourceNotFoundException(ResourceNotFoundException exception) {

        return new ResponseEntity<>(exception.getMessage(), HttpStatus.NOT_FOUND);
    }

    /**
     * Returns custom json for not found username
     * @param exception custom exception for not found username in the database
     * @return the custom json exception
     */
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<String> userNotFoundException(UserNotFoundException exception) {

        return new ResponseEntity<>(exception.getMessage(), HttpStatus.NOT_FOUND);
    }

    /**
     * Returns custom json for not found timesheet
     * @param exception custom exception for not found timesheet in the database
     * @return the custom json exception
     */
    @ExceptionHandler(TimesheetNotFoundException.class)
    public ResponseEntity<String> timesheetNotFoundException(TimesheetNotFoundException exception) {

        return new ResponseEntity<>(exception.getMessage(), HttpStatus.NOT_FOUND);
    }

    /**
     * Returns custom json for not found timesheetRow
     * @param exception custom exception for not found timesheetRow in the database
     * @return the custom json exception
     */
    @ExceptionHandler(TimeSheetRowNotFoundException.class)
    public ResponseEntity<String> timesheetRowNotFoundException(TimeSheetRowNotFoundException exception) {

        return new ResponseEntity<>(exception.getMessage(), HttpStatus.NOT_FOUND);
    }
}
