package com.loggingsystem.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author Metodi Vladimirov
 */
@ResponseStatus(code = HttpStatus.BAD_REQUEST, reason = "User with this username already exists!")
public class DuplicateUsernameException extends RuntimeException {

    public DuplicateUsernameException(String message) {
        super(message);
    }
}
