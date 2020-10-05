import React from "react";
import { Col, Container, Row, Dropdown, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects, fetchTasks } from "src/store/slices/seeds";

const TimesheetRowForm = () => {
  const secondColStyle = {
    borderLeft: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    height: "3rem",
  };

  const secondColRightStyle = {
    borderRight: "1px solid black",
    borderLeft: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    height: "3rem",
  };

  const StyledDropButton = {
    marginTop: "0.25rem",
    backgroundColor: "grey",
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

  return (
    <Container>
      <div>
        <Row fluid="md">
          <Col style={secondColStyle} xs={1}></Col>
          <Col style={secondColStyle} xs={2}>
            <select style={{ marginTop: "0.5rem", width: "8.5rem" }}>
              {projects.map((project) => (
                <option key={project.id} value={project.name}>
                  {project.name}
                </option>
              ))}
            </select>
          </Col>
          <Col style={secondColStyle} xs={2}>
            <select style={{ marginTop: "0.5rem", width: "8.5rem" }}>
              {tasks.map((task) => (
                <option key={task.id} value={task.name}>
                  {task.name}
                </option>
              ))}
            </select>
          </Col>
          <Col style={secondColStyle}>
            <input style={StyledInput} size="1.5"></input>
          </Col>
          <Col style={secondColStyle}>
            <input style={StyledInput} size="1.5"></input>
          </Col>
          <Col style={secondColStyle}>
            <input style={StyledInput} size="1.5"></input>
          </Col>
          <Col style={secondColStyle}>
            <input style={StyledInput} size="1.5"></input>
          </Col>
          <Col style={secondColStyle}>
            <input style={StyledInput} size="1.5"></input>
          </Col>
          <Col style={secondColStyle}>
            <input style={StyledInput} size="1.5"></input>
          </Col>
          <Col style={secondColStyle}>
            <input style={StyledInput} size="1.5"></input>
          </Col>
          <Col style={secondColRightStyle}></Col>
        </Row>
      </div>
    </Container>
  );
};

export { TimesheetRowForm };
