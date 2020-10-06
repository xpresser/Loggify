package com.devcamp.loggingsystem.service.bean;

import com.devcamp.loggingsystem.exception.DuplicateUsernameException;
import com.devcamp.loggingsystem.exception.ResourceNotFoundException;
import com.devcamp.loggingsystem.exception.DuplicateEmailException;
import com.devcamp.loggingsystem.persistence.entity.User;
import com.devcamp.loggingsystem.persistence.repository.UserRepository;
import com.devcamp.loggingsystem.service.AuthenticationService;
import com.devcamp.loggingsystem.service.TokenService;
import com.devcamp.loggingsystem.service.dto.login.LoginRequestDTO;
import com.devcamp.loggingsystem.service.dto.login.LoginResponseDTO;
import com.devcamp.loggingsystem.service.dto.user.UserRequestDTO;
import com.devcamp.loggingsystem.service.dto.user.UserResponseDTO;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * @author Metodi Vladimirov
 */
@Slf4j
@Service
public class AuthenticationServiceBean implements AuthenticationService {

    private final UserRepository userRepository;

    private final TokenService tokenService;

    private final ModelMapper modelMapper;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public AuthenticationServiceBean(UserRepository userRepository,
                                     TokenService tokenService,
                                     ModelMapper modelMapper,
                                     BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.tokenService = tokenService;
        this.modelMapper = modelMapper;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Override
    public UserResponseDTO register(UserRequestDTO userRequestDTO) throws DuplicateEmailException {

        Optional<User> userByEmail = this.userRepository
                .findUserByEmail(userRequestDTO.getEmail());

        if (userByEmail.isPresent()) {
            throw new DuplicateEmailException("User with this email already exists!");
        }

        Optional<User> userByUsername = this.userRepository
                .findByUsername(userRequestDTO.getUsername());

        if (userByUsername.isPresent()) {
            throw new DuplicateUsernameException("User with this username already exists!");
        }

        User userToRegister = this.modelMapper.map(userRequestDTO, User.class);

        String hashedPassword = this.bCryptPasswordEncoder.encode(userRequestDTO.getPassword());
        userToRegister.setPassword(hashedPassword);

        User registeredUser = this.userRepository.save(userToRegister);

        log.info("Successfully registered user with id: {}", registeredUser.getId());

        return modelMapper.map(registeredUser, UserResponseDTO.class);
    }

    @Override
    public LoginResponseDTO login(LoginRequestDTO loginRequestDTO) {
        User user = this.userRepository
                .findByUsername(loginRequestDTO.getUsername())
                .orElseThrow(() -> new ResourceNotFoundException("Invalid username or password"));

        if (!bCryptPasswordEncoder.matches(loginRequestDTO.getPassword(), user.getPassword())) {
            throw new ResourceNotFoundException("Invalid username or password");
        }

        log.info("Successfully logged user: {} in the system", user.getUsername());

        return createLoginResponseDTO(user);
    }

    private LoginResponseDTO createLoginResponseDTO(User user) {
        LoginResponseDTO loginResponseDTO = new LoginResponseDTO();

        loginResponseDTO.setToken(tokenService.generateToken(user));

        return loginResponseDTO;
    }
}
