package com.loggingsystem.exception;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;
import lombok.Value;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;

/**
 * Custom JSON for throwing Exceptions including endpoint url and message
 *
 * @author Metodi Vladimirov
 */
@Value
@Builder
public class ExceptionAsJSON {

    String message;

    HttpStatus status;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "hh:mm:ss dd-MM-yyyy")
    LocalDateTime timestamp;
}
