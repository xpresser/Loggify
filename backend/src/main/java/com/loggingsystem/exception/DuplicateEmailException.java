package com.loggingsystem.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author - Mikael Parsekyan
 */
@ResponseStatus(code = HttpStatus.BAD_REQUEST, reason = "User with this email already exists!")
public class DuplicateEmailException extends RuntimeException {

    public DuplicateEmailException(String message) {
        super(message);
    }
}
