package com.devcamp.loggingsystem.service;

import com.devcamp.loggingsystem.service.dto.project.ProjectFullDTO;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author - Mikael Parsekyan
 */
@Service
public interface ProjectService {

    List<ProjectFullDTO> getAll();
}
