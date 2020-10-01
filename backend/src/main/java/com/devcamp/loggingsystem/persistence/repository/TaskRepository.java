package com.devcamp.loggingsystem.persistence.repository;

import com.devcamp.loggingsystem.persistence.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


/**
 * This class holds the Task repository.
 *
 * @author Stanislav Ivanov
 */
@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
}
