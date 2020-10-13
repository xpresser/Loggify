package com.loggingsystem.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author - Mikael Parsekyan
 */
@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "User not found in database")
public class UserNotFoundException extends RuntimeException {

    private static final String EXCEPTION_MESSAGE = "User not found!";

    public UserNotFoundException() {
        super(EXCEPTION_MESSAGE);
    }
}
