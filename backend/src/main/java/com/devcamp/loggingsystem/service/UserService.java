package com.devcamp.loggingsystem.service;

import com.devcamp.loggingsystem.exception.UserNotFoundException;
import com.devcamp.loggingsystem.service.dto.user.UserFullDTO;
import org.springframework.stereotype.Service;

/**
 * @author - Mikael Parsekyan
 */
@Service
public interface UserService {
    UserFullDTO getUserByUsername(String username) throws UserNotFoundException;
}
