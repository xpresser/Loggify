import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects, fetchTasks } from "src/store/slices/seeds";
import { deleteTheRow } from "../../store/slices/timeSheetRows";

library.add(faTrash);

const TimesheetRow = ({ timesheetRow: timesheetRow }) => {
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

  const [mondayHoursRows, setMondayHoursRows] = React.useState(
    timesheetRow.mondayHours
  );
  const [tuesdayHoursRows, setTuesdayHoursRows] = React.useState(
    timesheetRow.tuesdayHours
  );
  const [wednesdayHoursRows, setWednesdayHoursRows] = React.useState(
    timesheetRow.wednesdayHours
  );
  const [thursdayHoursRows, setThursdayHoursRows] = React.useState(
    timesheetRow.thursdayHours
  );
  const [fridayHoursRows, setFridayHoursRows] = React.useState(
    timesheetRow.fridayHours
  );
  const [saturdayHoursRows, setSaturdayHoursRows] = React.useState(
    timesheetRow.saturdayHours
  );
  const [sundayHoursRows, setSundayHoursRows] = React.useState(
    timesheetRow.sundayHours
  );

  function calcTotal() {
    return (
      mondayHoursRows +
      tuesdayHoursRows +
      wednesdayHoursRows +
      thursdayHoursRows +
      fridayHoursRows +
      saturdayHoursRows +
      sundayHoursRows
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

  let timesheetProject = projects[timesheetRow.projectId - 1];
  let taskProject = tasks[timesheetRow.taskId - 1];

  return (
    <Container>
      <div>
        <Row fluid="md">
          <Col style={secondColStyle} xs={1}>
            <button
              onClick={() => {
                dispatch(deleteTheRow(timesheetRow?.id));
              }}
              className="btn btn-primary"
              style={StyledDeleteButton}
            >
              <span>
                <FontAwesomeIcon icon="trash"></FontAwesomeIcon>
              </span>
            </button>
          </Col>
          <Col style={secondColStyle} xs={2}>
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
          <Col style={secondColStyle} xs={2}>
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
          <Col style={secondColStyle}>
            <input
              value={mondayHoursRows}
              onChange={(e) => {
                let hours = parseInt(e.target.value);
                setMondayHoursRows(hours);
                calcTotal();
              }}
              style={StyledInput}
              size="1.5"
            ></input>
          </Col>
          <Col style={secondColStyle}>
            <input
              value={tuesdayHoursRows}
              onChange={(e) => {
                setTuesdayHoursRows(parseInt(e.target.value));
                calcTotal();
              }}
              style={StyledInput}
              size="1.5"
            ></input>
          </Col>
          <Col style={secondColStyle}>
            <input
              value={wednesdayHoursRows}
              onChange={(e) => {
                setWednesdayHoursRows(parseInt(e.target.value));
                calcTotal();
              }}
              style={StyledInput}
              size="1.5"
            ></input>
          </Col>
          <Col style={secondColStyle}>
            <input
              value={thursdayHoursRows}
              onChange={(e) => {
                setThursdayHoursRows(parseInt(e.target.value));
                calcTotal();
              }}
              style={StyledInput}
              size="1.5"
            ></input>
          </Col>
          <Col style={secondColStyle}>
            <input
              value={fridayHoursRows}
              onChange={(e) => {
                setFridayHoursRows(parseInt(e.target.value));
                calcTotal();
              }}
              style={StyledInput}
              size="1.5"
            ></input>
          </Col>
          <Col style={secondColStyle}>
            <input
              value={saturdayHoursRows}
              onChange={(e) => {
                setSaturdayHoursRows(parseInt(e.target.value));
                calcTotal();
              }}
              style={StyledInput}
              size="1.5"
            ></input>
          </Col>
          <Col style={secondColStyle}>
            <input
              value={sundayHoursRows}
              onChange={(e) => {
                setSundayHoursRows(parseInt(e.target.value));
                calcTotal();
              }}
              style={StyledInput}
              size="1.5"
            ></input>
          </Col>
          <Col style={secondColRightStyle}>{calcTotal()}</Col>
        </Row>
      </div>
    </Container>
  );
};

export { TimesheetRow };
