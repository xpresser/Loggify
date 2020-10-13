package com.loggingsystem.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author - Mikael Parsekyan
 */
@ResponseStatus(code = HttpStatus.BAD_REQUEST, reason = "Submitted timesheet cannot be deleted!")
public class ForbiddenTimesheetDeletion extends RuntimeException {
    private static final String EXCEPTION_MESSAGE = "Submitted timesheet cannot be deleted!";

    public ForbiddenTimesheetDeletion() {
        super(EXCEPTION_MESSAGE);
    }
}
