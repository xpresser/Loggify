package com.loggingsystem.service.bean;

import com.loggingsystem.persistence.entity.Project;
import com.loggingsystem.persistence.repository.ProjectRepository;
import com.loggingsystem.service.ProjectService;
import com.loggingsystem.service.dto.project.ProjectFullDTO;
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
