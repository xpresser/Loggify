package com.loggingsystem.service;

import com.loggingsystem.exception.DuplicateEmailException;
import com.loggingsystem.service.dto.login.LoginRequestDTO;
import com.loggingsystem.service.dto.login.LoginResponseDTO;
import com.loggingsystem.service.dto.user.UserRequestDTO;
import com.loggingsystem.service.dto.user.UserResponseDTO;

/**
 * @author Metodi Vladimirov
 */
public interface AuthenticationService {

    /**
     * Creates and registers given user in the database
     * @param userRequestDTO users request
     * @return returns Users Response DTO
     */
    UserResponseDTO register(UserRequestDTO userRequestDTO) throws DuplicateEmailException;

    /**
     * Method for authorization and authentication in the system
     * @param loginRequestDTO users request containing username and password
     * @return returns Bearer JWToken
     */
    LoginResponseDTO login(LoginRequestDTO loginRequestDTO);
}
