package com.loggingsystem.apprunner;

import com.loggingsystem.enumeration.timesheet.Projects;
import com.loggingsystem.enumeration.timesheet.Tasks;
import com.loggingsystem.persistence.entity.Project;
import com.loggingsystem.persistence.entity.Task;
import com.loggingsystem.persistence.repository.ProjectRepository;
import com.loggingsystem.persistence.repository.TaskRepository;
import com.loggingsystem.persistence.repository.TimeSheetRowRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataBaseSeeder implements ApplicationRunner {

    private final ProjectRepository projectRepository;
    private final TaskRepository taskRepository;
    private final TimeSheetRowRepository timeSheetRowRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        seedDatabase();

    }

    private void seedDatabase() {
        Projects[] projects = Projects.values();
        Tasks[] tasks = Tasks.values();
        if (projectRepository.findAll().isEmpty()) {
            for (Projects value : projects) {
                Project project = new Project();
                project.setName(value);
                projectRepository.save(project);
            }
        }
        if (taskRepository.findAll().isEmpty()) {
            for (Tasks value : tasks) {
                Task task = new Task();
                task.setName(value);
                taskRepository.save(task);
            }
        }
    }

}
