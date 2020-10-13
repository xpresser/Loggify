package com.loggingsystem.service.bean;

import com.loggingsystem.exception.UserNotFoundException;
import com.loggingsystem.persistence.entity.User;
import com.loggingsystem.persistence.repository.UserRepository;
import com.loggingsystem.service.UserService;
import com.loggingsystem.service.dto.user.UserFullDTO;
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
    public UserFullDTO getUserByUsername(String username) {
        Optional<User> user = this.userRepository.findByUsername(username);

        if (user.isEmpty()) {
            throw new UserNotFoundException();
        }

        return this.modelMapper.map(user.get(), UserFullDTO.class);
    }
}
