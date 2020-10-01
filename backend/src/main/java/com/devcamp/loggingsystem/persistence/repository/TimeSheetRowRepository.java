package com.devcamp.loggingsystem.persistence.repository;

import com.devcamp.loggingsystem.persistence.entity.TimesheetRow;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * This class holds the TimeSheetRow repository.
 *
 * @author Stanislav Ivanov
 */
@Repository
public interface TimeSheetRowRepository extends JpaRepository<TimesheetRow, Long> {

}
