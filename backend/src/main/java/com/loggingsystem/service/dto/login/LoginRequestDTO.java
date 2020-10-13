package com.loggingsystem.service.dto.login;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * DTO for User request when logging in the system
 *
 * @author Metodi Vladimirov
 */
@Data
public class LoginRequestDTO {

    @NotNull
    @Size(min = 4, max = 40)
    @Schema(name = "username", description = "Username of current logged user")
    private String username;

    @NotNull
    @Size(min = 8)
    @Schema(name = "password", description = "Password of current logged user", minLength = 8)
    private String password;
}
