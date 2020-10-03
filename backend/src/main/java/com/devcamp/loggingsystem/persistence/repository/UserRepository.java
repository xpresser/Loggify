package com.devcamp.loggingsystem.persistence.repository;

import com.devcamp.loggingsystem.persistence.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * @author Metodi Vladimirov
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    /**
     * Searches for a user with the given username and returns it
     * @param username given username that is going to be searched in database
     * @return returns user with that username if found and null if not
     */
    Optional<User> findByUsername(String username);

    User findUserByEmail(String email);
}
