package com.devcamp.loggingsystem.service;

import com.devcamp.loggingsystem.service.dto.task.TaskFullDTO;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author - Mikael Parsekyan
 */
@Service
public interface TaskService {

    List<TaskFullDTO> getAll();
}
