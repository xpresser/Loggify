package com.loggingsystem.service;

import com.loggingsystem.exception.UserNotFoundException;
import com.loggingsystem.service.dto.user.UserFullDTO;
import org.springframework.stereotype.Service;

/**
 * @author - Mikael Parsekyan
 */
@Service
public interface UserService {
    UserFullDTO getUserByUsername(String username) throws UserNotFoundException;
}
