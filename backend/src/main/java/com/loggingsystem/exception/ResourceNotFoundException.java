package com.loggingsystem.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Custom exception for not found resource/entity in database
 *
 * @author Metodi Vladimirov
 */
@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "Resource not found in database")
public class ResourceNotFoundException extends RuntimeException {

    public ResourceNotFoundException(String message) {
        super(message);
    }
}
