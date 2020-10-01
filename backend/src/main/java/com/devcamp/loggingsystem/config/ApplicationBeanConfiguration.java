package com.devcamp.loggingsystem.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

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
}
