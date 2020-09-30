package com.devcamp.loggingsystem.persistence.repository;

import com.devcamp.loggingsystem.persistence.entity.Timesheet;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author - Mikael Parsekyan
 */
public interface TimesheetRepository extends JpaRepository<Timesheet, Long> {
}
