package com.devcamp.loggingsystem.service.bean;

import com.devcamp.loggingsystem.exception.UserNotFoundException;
import com.devcamp.loggingsystem.persistence.entity.User;
import com.devcamp.loggingsystem.persistence.repository.UserRepository;
import com.devcamp.loggingsystem.service.UserService;
import com.devcamp.loggingsystem.service.dto.user.UserResponseDTO;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * @author - Mikael Parsekyan
 */
@Service
public class UserServiceBean implements UserService {

    private final UserRepository userRepository;

    private final ModelMapper modelMapper;

    public UserServiceBean(UserRepository userRepository, ModelMapper modelMapper) {
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public UserResponseDTO getUserByUsername(String username) {
        Optional<User> user = this.userRepository.findByUsername(username);

        if (user.isEmpty()) {
            throw new UserNotFoundException();
        }

        return this.modelMapper.map(user.get(), UserResponseDTO.class);
    }
}
