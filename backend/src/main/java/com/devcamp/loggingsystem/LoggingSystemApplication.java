package com.devcamp.loggingsystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * This is the starting point of the application.
 * Swagger link - http://localhost:8080/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config
 *
 * @author - Mikael Parsekyan
 */
@SpringBootApplication
public class LoggingSystemApplication {

    public static void main(String[] args) {
        SpringApplication.run(LoggingSystemApplication.class, args);
    }

}
