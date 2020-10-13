package com.loggingsystem.persistence.repository;

import com.loggingsystem.persistence.entity.Task;
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
