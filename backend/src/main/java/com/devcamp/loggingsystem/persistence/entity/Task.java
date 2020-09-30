package com.devcamp.loggingsystem.persistence.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.validation.annotation.Validated;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "tasks")
@Validated
@Data
@NoArgsConstructor
public class Task extends BaseEntity {
    //private Map<WeekdaysEnum, Integer> hours;
}
