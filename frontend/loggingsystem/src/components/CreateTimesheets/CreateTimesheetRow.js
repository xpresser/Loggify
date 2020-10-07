import React from "react";
import { Col, Container, Row, Dropdown, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects, fetchTasks } from "src/store/slices/seeds";
library.add(faTrash);

const TimesheetRow = ({ timesheetRow }) => {
  const secondColStyle = {
    borderLeft: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    height: "3rem",
    display: "flex",
    justifyContent: "center",
  };

  const secondColRightStyle = {
    borderRight: "1px solid black",
    borderLeft: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    height: "3rem",
    display: "flex",
    justifyContent: "center",
  };

  const StyledDropButton = {
    marginTop: "0.25rem",
    backgroundColor: "grey",
    border: "none",
  };

  const StyledDeleteButton = {
    marginTop: "0.25rem",
    backgroundColor: "red",
    border: "none",
  };

  const StyledInput = {
    marginTop: "0.45rem",
  };

  const projectsState = useSelector((state) => state.seeds.projects);
  const projects = projectsState?.[0] || [];
  const tasksState = useSelector((state) => state.seeds.tasks);
  const tasks = tasksState?.[0] || [];

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  let timesheetProject = projects[timesheetRow.projectId - 1];
  let taskProject = tasks[timesheetRow.taskId - 1];

  console.log(timesheetProject);
  return (
    <Container>
      <div>
        {console.log(timesheetRow)}
        <Row fluid="md">
          <Col style={secondColStyle}>
            <button className="btn btn-primary" style={StyledDeleteButton}>
              <span>
                <FontAwesomeIcon icon="trash"></FontAwesomeIcon>
              </span>
            </button>
          </Col>
          <Col style={secondColStyle}>
            <select style={{ marginTop: "0.5rem", width: "8.5rem" }}>
              {projects.map((project) => (
                <option key={project.id} value={project.name}>
                  {project.name}
                </option>
              ))}
              {timesheetProject ? (
                <option selected>{timesheetProject.name}</option>
              ) : null}
            </select>
          </Col>
          <Col style={secondColStyle} sm={0}>
            <select style={{ marginTop: "0.5rem", width: "8.5rem" }}>
              {tasks.map((task) => (
                <option key={task.id} value={task.name}>
                  {task.name}
                </option>
              ))}
              {taskProject ? (
                <option selected>{taskProject.name}</option>
              ) : null}
            </select>
          </Col>
          <Col style={secondColStyle} sm={1} xs={1}>
            <input
              style={StyledInput}
              size="1.5"
              value={timesheetRow.mondayHours}
            ></input>
          </Col>
          <Col style={secondColStyle} sm={1} xs={1}>
            <input
              style={StyledInput}
              size="1.5"
              value={timesheetRow.tuesdayHours}
            ></input>
          </Col>
          <Col style={secondColStyle} sm={1} xs={1}>
            <input
              style={StyledInput}
              size="1.5"
              value={timesheetRow.wednesdayHours}
            ></input>
          </Col>
          <Col style={secondColStyle} sm={1} xs={1}>
            <input
              style={StyledInput}
              size="1.5"
              value={timesheetRow.thursdayHours}
            ></input>
          </Col>
          <Col style={secondColStyle} sm={1} xs={1}>
            <input
              style={StyledInput}
              size="1.5"
              value={timesheetRow.fridayHours}
            ></input>
          </Col>
          <Col style={secondColStyle} sm={1} xs={1}>
            <input
              style={StyledInput}
              size="1.5"
              value={timesheetRow.saturdayHours}
            ></input>
          </Col>
          <Col style={secondColStyle} sm={1} xs={1}>
            <input
              style={StyledInput}
              size="1.5"
              value={timesheetRow.sundayHours}
            ></input>
          </Col>
          <Col style={secondColRightStyle} sm={1} xs={1}>
            {timesheetRow.totalHours}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export { TimesheetRow };
