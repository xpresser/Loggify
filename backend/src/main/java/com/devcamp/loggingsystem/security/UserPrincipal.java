package com.devcamp.loggingsystem.security;

import com.devcamp.loggingsystem.enumeration.user.UserPosition;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * UserPrincipal is the Principal object will be inside Spring Security Context
 *
 * @author Metodi Vladimirov
 */
@Data
@AllArgsConstructor
public class UserPrincipal {

    @Schema(name = "id", description = "Id of currently logged user")
    private Long id;

    @Schema(name = "username", description = "Username of currently logged user")
    private String username;

    @Schema(name = "email", description = "Email of currently logged user")
    private String email;
}
