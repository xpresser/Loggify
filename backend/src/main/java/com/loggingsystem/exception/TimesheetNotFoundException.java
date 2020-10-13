package com.loggingsystem.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author - Mikael Parsekyan
 */
@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "Timesheet not found!")
public class TimesheetNotFoundException extends RuntimeException {
    private static final String EXCEPTION_MESSAGE = "Timesheet not found!";

    public TimesheetNotFoundException() {
        super(EXCEPTION_MESSAGE);
    }
}
