package com.devcamp.loggingsystem.persistence.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.validation.annotation.Validated;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

/**
 * This class represents TimeSheetRow entity
 *
 * @author Stanislav Ivanov
 */
@AllArgsConstructor
@Entity
@Table(name = "timesheet_row")
@Validated
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class TimesheetRow extends BaseEntity {

    @JsonManagedReference
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
    @NotNull
    private Double mondayHours;

    @Column(name = "tuesday_hours")
    @NotNull
    private Double tuesdayHours;

    @Column(name = "wednesday_hours")
    @NotNull
    private Double wednesdayHours;

    @Column(name = "thursday_hours")
    @NotNull
    private Double thursdayHours;

    @Column(name = "friday_hours")
    @NotNull
    private Double fridayHours;

    @Column(name = "saturday_hours")
    @NotNull
    private Double saturdayHours;

    @Column(name = "sunday_hours")
    @NotNull
    private Double sundayHours;

    @Column(name = "total_hours")
    @NotNull
    private Double totalHours;

    public void update(TimesheetRow updated) {
        this.timesheet = updated.getTimesheet();
        this.project = updated.getProject();
        this.task = updated.getTask();
        this.mondayHours = updated.getMondayHours();
        this.tuesdayHours = updated.getTuesdayHours();
        this.wednesdayHours = updated.getWednesdayHours();
        this.thursdayHours = updated.thursdayHours;
        this.fridayHours = updated.getFridayHours();
        this.saturdayHours = updated.getSaturdayHours();
        this.sundayHours = updated.getSundayHours();
        this.totalHours = updated.getTotalHours();
    }

}

