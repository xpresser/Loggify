package com.devcamp.loggingsystem.persistence.repository;

import com.devcamp.loggingsystem.persistence.entity.Timesheet;
import com.devcamp.loggingsystem.persistence.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author - Mikael Parsekyan
 */
@Repository
public interface TimesheetRepository extends JpaRepository<Timesheet, Long> {
    Page<Timesheet> findAllByUser(User user, Pageable pageable);

    Page<Timesheet> findAllByUserOrderByStartingDateAsc(User user, Pageable pageable);
}
