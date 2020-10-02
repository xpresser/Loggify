package com.devcamp.loggingsystem.service.bean;

import com.devcamp.loggingsystem.persistence.entity.Task;
import com.devcamp.loggingsystem.persistence.repository.TaskRepository;
import com.devcamp.loggingsystem.service.TaskService;
import com.devcamp.loggingsystem.service.dto.task.TaskFullDTO;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * @author - Mikael Parsekyan
 */
@Service
public class TaskServiceBean implements TaskService {

    private final TaskRepository taskRepository;

    private final ModelMapper modelMapper;

    public TaskServiceBean(TaskRepository taskRepository, ModelMapper modelMapper) {
        this.taskRepository = taskRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<TaskFullDTO> getAll() {
        List<Task> tasks = this.taskRepository.findAll();

        return tasks.stream()
                .map(task -> this.modelMapper.map(task, TaskFullDTO.class))
                .collect(Collectors.toList());
    }
}
