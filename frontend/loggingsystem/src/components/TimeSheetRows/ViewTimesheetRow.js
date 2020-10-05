import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects, fetchTasks } from "../../store/slices/seeds";

export const ViewTimesheetRow = ({ timesheetRow }) => {
  const secondColStyle = {
    borderLeft: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    height: "5rem",
  };

  const secondColRightStyle = {
    borderRight: "1px solid black",
    borderLeft: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    height: "5rem",
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

  function calcTotalHours() {
    return (
      timesheetRow.mondayHours +
      timesheetRow.tuesdayHours +
      timesheetRow.wednesdayHours +
      timesheetRow.thursdayHours +
      timesheetRow.fridayHours +
      timesheetRow.saturdayHours +
      timesheetRow.sundayHours
    );
  }

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

  let timesheetProject = projects[timesheetRow.projectId];
  let taskProject = tasks[timesheetRow.taskId];

  return (
    <Container>
      <div>
        <Row fluid="md">
          <Col style={secondColStyle} xs={2}>
            {timesheetProject ? <p>{timesheetProject.name}</p> : null}
          </Col>
          <Col style={secondColStyle} xs={2}>
            {taskProject ? <p>{timesheetProject.name}</p> : null}
          </Col>
          <Col style={secondColStyle}>
            <p style={StyledInput} size="1.5">
              {timesheetRow.mondayHours}
            </p>
          </Col>
          <Col style={secondColStyle}>
            <p style={StyledInput} size="1.5">
              {timesheetRow.tuesdayHours}
            </p>
          </Col>
          <Col style={secondColStyle}>
            <p style={StyledInput} size="1.5">
              {timesheetRow.wednesdayHours}
            </p>
          </Col>
          <Col style={secondColStyle}>
            <p style={StyledInput} size="1.5">
              {timesheetRow.thursdayHours}
            </p>
          </Col>
          <Col style={secondColStyle}>
            <p style={StyledInput} size="1.5">
              {timesheetRow.fridayHours}
            </p>
          </Col>
          <Col style={secondColStyle}>
            <p style={StyledInput} size="1.5">
              {timesheetRow.saturdayHours}
            </p>
          </Col>
          <Col style={secondColStyle}>
            <p style={StyledInput} size="1.5">
              {timesheetRow.sundayHours}
            </p>
          </Col>
          <Col style={secondColRightStyle}>{calcTotalHours()}</Col>
        </Row>
      </div>
    </Container>
  );
};
