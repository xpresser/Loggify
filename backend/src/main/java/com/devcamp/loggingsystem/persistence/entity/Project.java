package com.devcamp.loggingsystem.persistence.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.validation.annotation.Validated;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "projects")
@Validated
@Data
@NoArgsConstructor
public class Project extends BaseEntity {
    @OneToOne
    @JoinColumn(name = "task_id", referencedColumnName = "id")
    private Task task;
}
