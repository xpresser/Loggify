package com.devcamp.loggingsystem.controller;

import com.devcamp.loggingsystem.exception.TimeSheetRowNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

/**
 * This class contains all exceptions handled globally.
 *
 * @author Stanislav Ivanov
 */
@ControllerAdvice
public class TimeSheetRowControllerAdvice {

    @ExceptionHandler(TimeSheetRowNotFoundException.class)
    public ResponseEntity<String> TimeSheetRowNotFoundException(TimeSheetRowNotFoundException e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
    }

}
