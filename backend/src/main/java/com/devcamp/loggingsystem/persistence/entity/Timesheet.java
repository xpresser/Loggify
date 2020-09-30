package com.devcamp.loggingsystem.persistence.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.validation.annotation.Validated;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.Set;

@Entity
@Table(name = "timesheets")
@Validated
@Data
@NoArgsConstructor
public class Timesheet extends BaseEntity {

    @OneToMany
    @JoinColumn(name = "row_id", referencedColumnName = "id")
    private Set<TimesheetRow> rows;

    @Column(name = "total_hours")
    private Double totalHours;
}
