package com.devcamp.loggingsystem.service.dto.user;

import com.devcamp.loggingsystem.enumeration.user.UserPosition;
import lombok.Data;
import lombok.NonNull;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

/**
 * @author Metodi Vladimirov
 */
@Data
public class UserRequestDTO {

    @NonNull
    @Size(min = 4, max = 40)
    private String fullName;

    @NonNull
    @Size(min = 4, max = 40)
    private String username;

    @NonNull
    @Email
    private String email;

    @NonNull
    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
            message = "Password must be minimum 8 symbols, and must contain one uppercase symbol and one digit")
    private String password;

    @Enumerated(EnumType.STRING)
    private UserPosition userPosition;
}
