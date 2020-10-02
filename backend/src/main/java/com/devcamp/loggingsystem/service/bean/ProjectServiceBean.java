package com.devcamp.loggingsystem.service.bean;

import com.devcamp.loggingsystem.persistence.entity.Project;
import com.devcamp.loggingsystem.persistence.repository.ProjectRepository;
import com.devcamp.loggingsystem.service.ProjectService;
import com.devcamp.loggingsystem.service.dto.project.ProjectFullDTO;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * @author - Mikael Parsekyan
 */
@Service
public class ProjectServiceBean implements ProjectService {

    private final ProjectRepository projectRepository;

    private final ModelMapper modelMapper;

    public ProjectServiceBean(ProjectRepository projectRepository, ModelMapper modelMapper) {
        this.projectRepository = projectRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<ProjectFullDTO> getAll() {
        List<Project> projects = this.projectRepository.findAll();

        return projects.stream()
                .map(project -> this.modelMapper.map(project, ProjectFullDTO.class))
                .collect(Collectors.toList());
    }
}
