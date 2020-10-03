package com.devcamp.loggingsystem.controller;

import com.devcamp.loggingsystem.exception.UserSignUpException;
import com.devcamp.loggingsystem.service.AuthenticationService;
import com.devcamp.loggingsystem.service.dto.login.LoginRequestDTO;
import com.devcamp.loggingsystem.service.dto.login.LoginResponseDTO;
import com.devcamp.loggingsystem.service.dto.user.UserRequestDTO;
import com.devcamp.loggingsystem.service.dto.user.UserResponseDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

/**
 * @author Metodi Vladimirov
 */
@RestController
@RequestMapping(value = "/v1/auth")
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @Autowired
    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @Operation(description = "Register a user",
            tags = {"user"},
            summary = "Register a user in the database and returns it")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Successfully registered user"),
            @ApiResponse(responseCode = "400", description = "Incorrect request body"),
            @ApiResponse(responseCode = "500", description = "Internal Server Error")
    })
    @PostMapping(value = "/signup")
    public ResponseEntity<UserResponseDTO> register(@RequestBody @Valid UserRequestDTO userRequestDTO) {
        return new ResponseEntity<>(this.authenticationService.register(userRequestDTO), HttpStatus.CREATED);
    }

    @Operation(description = "Login in the system", tags = {"login"})
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Bearer Token",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = LoginResponseDTO.class))}),
            @ApiResponse(responseCode = "401", description = "Invalid user credentials",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ResponseStatusException.class))),
            @ApiResponse(responseCode = "500", description = "Internal Server Error",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ResponseStatusException.class)))
    })
    @PostMapping(value = "/signin")
    public LoginResponseDTO login(@RequestBody LoginRequestDTO loginRequestDTO) {
        return this.authenticationService.login(loginRequestDTO);
    }

    @PostMapping(value = "/signout")
    public void logout(HttpServletRequest request, HttpServletResponse response) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        if (auth != null){
            new SecurityContextLogoutHandler().logout(request, response, auth);
        }

        SecurityContextHolder.getContext().setAuthentication(null);
    }

    @ExceptionHandler(UserSignUpException.class)
    public ResponseEntity<String> handleUserSignUpException(UserSignUpException e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    }
}
