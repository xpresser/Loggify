package com.loggingsystem.service;

import com.loggingsystem.service.dto.project.ProjectFullDTO;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author - Mikael Parsekyan
 */
@Service
public interface ProjectService {

    List<ProjectFullDTO> getAll();
}
