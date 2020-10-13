package com.loggingsystem.service.dto.login;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * {@inheritDoc}
 *
 * @author Metodi Vladimirov
 */
@Data
public class LoginResponseDTO {

    @Schema(name = "token", description = "Token of current logged user")
    private String token;
}

