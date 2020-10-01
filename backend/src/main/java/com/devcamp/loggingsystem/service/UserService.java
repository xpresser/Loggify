package com.devcamp.loggingsystem.service;

import com.devcamp.loggingsystem.exception.UserNotFoundException;
import com.devcamp.loggingsystem.service.dto.user.UserResponseDTO;
import org.springframework.stereotype.Service;

/**
 * @author - Mikael Parsekyan
 */
@Service
public interface UserService {
    UserResponseDTO getUserByUsername(String username) throws UserNotFoundException;
}
