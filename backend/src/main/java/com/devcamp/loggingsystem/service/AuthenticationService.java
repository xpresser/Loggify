package com.devcamp.loggingsystem.service;

import com.devcamp.loggingsystem.service.dto.user.UserRequestDTO;
import com.devcamp.loggingsystem.service.dto.user.UserResponseDTO;

/**
 * @author Metodi Vladimirov
 */
public interface AuthenticationService {

    UserResponseDTO register(UserRequestDTO userRequestDTO);
}
