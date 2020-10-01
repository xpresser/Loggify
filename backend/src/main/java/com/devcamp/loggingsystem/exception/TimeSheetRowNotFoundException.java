package com.devcamp.loggingsystem.exception;

/**
 * This exception is thrown when a Time Sheet Row is not found.
 *
 * @author Stanislav Ivanov
 */
public class TimeSheetRowNotFoundException extends RuntimeException {
    private static final String EXCEPTION_MESSAGE = "Time Sheet Row not found!";

    public TimeSheetRowNotFoundException() {
        super(EXCEPTION_MESSAGE);

    }
}
