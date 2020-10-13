package com.loggingsystem.persistence.entity;

import com.loggingsystem.enumeration.timesheet.Tasks;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.validation.annotation.Validated;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

@Entity
@Table(name = "tasks")
@Validated
@Data
@NoArgsConstructor
public class Task extends BaseEntity {

    @Enumerated(EnumType.STRING)
    private Tasks name;
}
