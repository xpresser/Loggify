package com.devcamp.loggingsystem.exception;

/**
 * @author - Mikael Parsekyan
 */
public class TimesheetNotFoundException extends RuntimeException {
    private static final String EXCEPTION_MESSAGE = "Timesheet not found!";

    public TimesheetNotFoundException() {
        super(EXCEPTION_MESSAGE);
    }
}
