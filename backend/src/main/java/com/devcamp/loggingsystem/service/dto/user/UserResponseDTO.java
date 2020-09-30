package com.devcamp.loggingsystem.service.dto.user;

import com.devcamp.loggingsystem.enumeration.user.UserPosition;
import lombok.Data;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

/**
 * @author Metodi Vladimirov
 */
@Data
public class UserResponseDTO {

    private String fullname;

    private String username;

    private String email;

    @Enumerated(EnumType.STRING)
    private UserPosition userPosition;
}
