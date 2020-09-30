package com.devcamp.loggingsystem.persistence.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.validation.annotation.Validated;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "timesheet_row")
@Validated
@Data
@NoArgsConstructor
public class TimesheetRow extends BaseEntity {

    @ManyToOne
    @JoinColumn(name = "timesheet_id", referencedColumnName = "id")
    private Timesheet timesheet;

    @OneToOne
    @JoinColumn(name = "project_id", referencedColumnName = "id")
    private Project project;

    @OneToOne
    @JoinColumn(name = "task_id", referencedColumnName = "id")
    private Task task;

    @Column(name = "monday_hours")
    private Double mondayHours;

    @Column(name = "tuesday_hours")
    private Double tuesdayHours;

    @Column(name = "wednesday_hours")
    private Double wednesdayHours;

    @Column(name = "thursday_hours")
    private Double thursdayHours;

    @Column(name = "friday_hours")
    private Double fridayHours;

    @Column(name = "saturday_hours")
    private Double saturdayHours;

    @Column(name = "sunday_hours")
    private Double sundayHours;

    @Column(name = "total_hours")
    private Double totalHours;
}

