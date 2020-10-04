package com.devcamp.loggingsystem.controller;

import com.devcamp.loggingsystem.exception.UserNotFoundException;
import com.devcamp.loggingsystem.service.UserService;
import com.devcamp.loggingsystem.service.dto.user.UserFullDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.NotNull;

/**
 * @author - Mikael Parsekyan
 */
@RestController
@RequestMapping("v1/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{username}")
    public ResponseEntity<UserFullDTO> getUserById(@PathVariable @NotNull String username) throws UserNotFoundException {
        return new ResponseEntity<>(this.userService.getUserByUsername(username), HttpStatus.OK);
    }
}
