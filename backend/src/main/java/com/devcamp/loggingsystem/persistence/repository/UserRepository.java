package com.devcamp.loggingsystem.persistence.repository;

import com.devcamp.loggingsystem.persistence.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Metodi Vladimirov
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
