package com.devcamp.loggingsystem.service.bean;

import com.devcamp.loggingsystem.enumeration.user.UserPosition;
import com.devcamp.loggingsystem.persistence.entity.User;
import com.devcamp.loggingsystem.persistence.repository.UserRepository;
import com.devcamp.loggingsystem.service.AuthenticationService;
import com.devcamp.loggingsystem.service.dto.user.UserRequestDTO;
import com.devcamp.loggingsystem.service.dto.user.UserResponseDTO;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;

/**
 * @author Metodi Vladimirov
 */
@Slf4j
@Service
public class AuthenticationServiceBean implements AuthenticationService {

    private final UserRepository userRepository;

    private final ModelMapper modelMapper;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public AuthenticationServiceBean(UserRepository userRepository,
                                     ModelMapper modelMapper,
                                     BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Override
    public UserResponseDTO register(UserRequestDTO userRequestDTO) {
        if (usersDatabaseIsEmpty()) {
            log.info("Creating initial first system user");

            return modelMapper.map(createInitialUser(), UserResponseDTO.class);
        }

        User userToRegister = this.modelMapper.map(userRequestDTO, User.class);

        String hashedPassword = this.bCryptPasswordEncoder.encode(userRequestDTO.getPassword());
        userToRegister.setPassword(hashedPassword);

        User registeredUser = this.userRepository.save(userToRegister);

        log.info("Successfully registered user with id: {}", registeredUser.getId());

        return modelMapper.map(registeredUser, UserResponseDTO.class);
    }

    private User createInitialUser() {
        User user = new User();

        user.setFullName("Nikolay Vitkov");
        user.setUsername("admin");
        user.setEmail("admin@gmail.com");
        user.setPassword("admin");
        user.setUserPosition(UserPosition.DEVELOPER);
        user.setTimesheets(new HashSet<>());

        return userRepository.save(user);
    }

    private boolean usersDatabaseIsEmpty() {
        return this.userRepository.findAll().isEmpty();
    }
}
