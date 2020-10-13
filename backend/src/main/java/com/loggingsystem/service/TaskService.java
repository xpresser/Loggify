package com.loggingsystem.service;

import com.loggingsystem.service.dto.task.TaskFullDTO;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author - Mikael Parsekyan
 */
@Service
public interface TaskService {

    List<TaskFullDTO> getAll();
}
