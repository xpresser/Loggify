package com.devcamp.loggingsystem.persistence.entity;

import com.devcamp.loggingsystem.enumeration.timesheet.TimesheetStatus;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.validation.annotation.Validated;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.time.LocalDate;
import java.util.Set;

@Entity
@Table(name = "timesheets")
@Validated
@Data
@NoArgsConstructor
public class Timesheet extends BaseEntity {

    @Column(name = "starting_date")
    private LocalDate startingDate;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private TimesheetStatus status;

    @JsonBackReference
    @OneToMany(mappedBy = "timesheet", fetch = FetchType.EAGER)
    private Set<TimesheetRow> rows;

    @Column(name = "total_hours")
    private Double totalHours;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;
}
