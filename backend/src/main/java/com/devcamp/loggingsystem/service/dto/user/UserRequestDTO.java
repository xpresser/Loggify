package com.devcamp.loggingsystem.service.dto.user;

import lombok.Data;
import lombok.NonNull;
import org.springframework.validation.annotation.Validated;

import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

/**
 * @author Metodi Vladimirov
 */
@Data
@Validated
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
    @Pattern(regexp = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
            message = "Password must be minimum 8 symbols, and must contain one uppercase symbol and one digit")
    private String password;
}
