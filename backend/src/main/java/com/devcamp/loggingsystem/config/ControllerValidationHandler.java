package com.devcamp.loggingsystem.config;

import com.devcamp.loggingsystem.exception.ExceptionAsJSON;
import com.devcamp.loggingsystem.exception.ResourceNotFoundException;
import com.devcamp.loggingsystem.exception.TimeSheetRowNotFoundException;
import com.devcamp.loggingsystem.exception.TimesheetNotFoundException;
import com.devcamp.loggingsystem.exception.UserNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;

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
    public  ExceptionAsJSON resourceNotFoundException(ResourceNotFoundException exception) {

        return ExceptionAsJSON.builder()
                .message(exception.getLocalizedMessage())
                .status(HttpStatus.BAD_REQUEST)
                .timestamp(LocalDateTime.now())
                .build();
    }

    /**
     * Returns custom json for not found username
     * @param exception custom exception for not found username in the database
     * @return the custom json exception
     */
    @ExceptionHandler(UserNotFoundException.class)
    public  ExceptionAsJSON userNotFoundException(UserNotFoundException exception) {

        return ExceptionAsJSON.builder()
                .message(exception.getLocalizedMessage())
                .status(HttpStatus.NOT_FOUND)
                .timestamp(LocalDateTime.now())
                .build();
    }

    /**
     * Returns custom json for not found timesheet
     * @param exception custom exception for not found timesheet in the database
     * @return the custom json exception
     */
    @ExceptionHandler(TimesheetNotFoundException.class)
    public  ExceptionAsJSON timesheetNotFoundException(TimesheetNotFoundException exception) {

        return ExceptionAsJSON.builder()
                .message(exception.getLocalizedMessage())
                .status(HttpStatus.NOT_FOUND)
                .timestamp(LocalDateTime.now())
                .build();
    }

    /**
     * Returns custom json for not found timesheetRow
     * @param exception custom exception for not found timesheetRow in the database
     * @return the custom json exception
     */
    @ExceptionHandler(TimeSheetRowNotFoundException.class)
    public  ExceptionAsJSON timesheetRowNotFoundException(TimeSheetRowNotFoundException exception) {

        return ExceptionAsJSON.builder()
                .message(exception.getLocalizedMessage())
                .status(HttpStatus.NOT_FOUND)
                .timestamp(LocalDateTime.now())
                .build();
    }
}
