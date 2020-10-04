package com.devcamp.loggingsystem.persistence.repository;

import com.devcamp.loggingsystem.persistence.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * This class holds the Project repository.
 *
 * @author Stanislav Ivanov
 */
@Repository
public interface ProjectRepository extends JpaRepository<Project, Integer> {
}
