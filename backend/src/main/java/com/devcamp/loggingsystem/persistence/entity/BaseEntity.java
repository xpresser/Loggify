package com.devcamp.loggingsystem.persistence.entity;

import lombok.Data;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

/**
 * This class contains the BaseEntity of the application.
 * It holds the Primary Key of all tables.
 *
 * @author - Mikael Parsekyan
 */
@MappedSuperclass
@Data
public abstract class BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
}
