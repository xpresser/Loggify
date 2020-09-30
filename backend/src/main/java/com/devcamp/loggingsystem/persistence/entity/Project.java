package com.devcamp.loggingsystem.persistence.entity;

import com.devcamp.loggingsystem.enumeration.timesheet.Projects;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.validation.annotation.Validated;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

@Entity
@Table(name = "projects")
@Validated
@Data
@NoArgsConstructor
public class Project extends BaseEntity {

    @Enumerated(EnumType.STRING)
    private Projects name;
}
