package com.devcamp.loggingsystem.service.bean;

import com.devcamp.loggingsystem.persistence.repository.UserRepository;
import com.devcamp.loggingsystem.service.AuthenticationService;
import com.devcamp.loggingsystem.service.dto.user.UserRequestDTO;
import com.devcamp.loggingsystem.service.dto.user.UserResponseDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

/**
 * @author Metodi Vladimirov
 */
@Slf4j
@Service
public class AuthenticationServiceBean implements AuthenticationService {

    private final UserRepository userRepository;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public UserResponseDTO register(UserRequestDTO userRequestDTO) {
        return null;
    }
}
