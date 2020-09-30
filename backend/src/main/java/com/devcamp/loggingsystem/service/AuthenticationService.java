package com.devcamp.loggingsystem.service;

import com.devcamp.loggingsystem.service.dto.user.UserRequestDTO;
import com.devcamp.loggingsystem.service.dto.user.UserResponseDTO;

/**
 * @author Metodi Vladimirov
 */
public interface AuthenticationService {

    /**
     * Creates and registers given user in the database
     * @param userRequestDTO users request
     * @return returns Users Response DTO
     */
    UserResponseDTO register(UserRequestDTO userRequestDTO);
}
