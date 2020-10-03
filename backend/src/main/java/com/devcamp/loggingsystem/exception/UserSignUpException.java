package com.devcamp.loggingsystem.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author - Mikael Parsekyan
 */
@ResponseStatus(code = HttpStatus.BAD_REQUEST, reason = "User with this email already exists!")
public class UserSignUpException extends RuntimeException {

    private static final String EXCEPTION_MESSAGE = "User with this email already exists!";

    public UserSignUpException() {
        super(EXCEPTION_MESSAGE);
    }
}
