package com.devcamp.loggingsystem.persistence.entity;

import com.devcamp.loggingsystem.enumeration.timesheet.TimesheetStatusEnum;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.validation.annotation.Validated;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "timesheets")
@Validated
@Data
@NoArgsConstructor
public class Timesheet extends BaseEntity {

    @Column(name = "starting_date")
    private LocalDate startingDate;

    @Enumerated(EnumType.STRING)
    private TimesheetStatusEnum status;

    @ManyToMany
    @JoinTable(name = "timesheet_projects",
            joinColumns = @JoinColumn(
                    name = "project_id", referencedColumnName = "id"
            ),
            inverseJoinColumns = @JoinColumn(
                    name = "timesheet_id", referencedColumnName = "id"
            ))
    private List<Project> projects;
}
