package com.loggingsystem.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

/**
 * This class contains all applications configuration.
 *
 * @author - Mikael Parsekyan
 */
@Configuration
public class ApplicationBeanConfiguration {

    /**
     * This method makes the ModelMapper bean.
     *
     * @return new instance of ModelMapper class
     */
    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

    /**
     * This method makes the BCryptPasswordEncoder bean.
     *
     * @return new instance of BCryptPasswordEncoder class
     */
    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
