import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPen, faOm } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects, fetchTasks } from "src/store/slices/seeds";
import {
  deleteTheRow,
  resetRoWMessages,
  updateTheRow,
} from "../../store/slices/timeSheetRows";
import { useFormik } from "formik";
import { updateTimeSheetRow } from "../../api/timeSheetRows";
library.add(faTrash, faPen);

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

  const StyledDeleteButton = {
    marginTop: "0.25rem",
    backgroundColor: "red",
    border: "none",
  };

  const StyledEditButton = {
    marginTop: "0.25rem",
    backgroundColor: "#303F9f",
    border: "none",
  };

  const StyledInput = {
    marginTop: "0.45rem",
    width: "100%",
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

  const formik = useFormik({
    initialValues: {
      id: timesheetRow.id,
      timeSheetId: timesheetRow.timeSheetId,
      projectId: timesheetProject?.id,
      taskId: taskProject?.id,
      mondayHours: timesheetRow.mondayHours,
      tuesdayHours: timesheetRow.tuesdayHours,
      wednesdayHours: timesheetRow.wednesdayHours,
      thursdayHours: timesheetRow.thursdayHours,
      fridayHours: timesheetRow.fridayHours,
      saturdayHours: timesheetRow.saturdayHours,
      sundayHours: timesheetRow.sundayHours,
      totalHours: timesheetRow.totalHours,
    },
    onSubmit: (values) => {
      formik.initialValues.totalHours = calcTotal();
      dispatch(updateTheRow(values));
    },
  });

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteTheRow(timesheetRow?.id));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    formik.initialValues.totalHours = calcTotal();
    dispatch(updateTheRow(formik.initialValues));
  };

  const handleTaskSelect = (e) => {
    formik.initialValues.taskId = e.target.value;
    console.log(e);
  };

  const handleProjectSelect = (e) => {
    formik.initialValues.projectId = e.target.value;
    console.log(e);
  };

  return (
    <Container>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <Row fluid="md">
            <Col style={secondColStyle} xs={1}>
              <button
                onClick={handleDelete}
                className="btn btn-primary"
                style={StyledDeleteButton}
              >
                <span>
                  <FontAwesomeIcon icon="trash"></FontAwesomeIcon>
                </span>
              </button>
              <button
                type="submit"
                className="btn btn-primary ml-1"
                style={StyledEditButton}
              >
                <span>
                  <FontAwesomeIcon icon="pen"></FontAwesomeIcon>
                </span>
              </button>
            </Col>
            <Col style={secondColStyle} xs={2}>
              <select
                id="projectId"
                name="projectId"
                onChange={handleProjectSelect}
                style={{ marginTop: "0.5rem", width: "8.5rem" }}
              >
                {projects.map((project) => (
                  <option key={project.id} value={project.id}>
                    {project.name}
                  </option>
                ))}
                {timesheetProject ? (
                  <option selected>{timesheetProject.name}</option>
                ) : null}
              </select>
            </Col>
            <Col style={secondColStyle} xs={2}>
              <select
                id="taskId"
                name="taskId"
                onChange={handleTaskSelect}
                style={{ marginTop: "0.5rem", width: "8.5rem" }}
              >
                {tasks.map((task) => (
                  <option key={task.id} value={task.id}>
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
                id="mondayHours"
                name="mondayHours"
                value={mondayHoursRows}
                onChange={(e) => {
                  let hoursForMonday = parseInt(e.target.value);
                  setMondayHoursRows(hoursForMonday);
                  formik.initialValues.mondayHours = hoursForMonday;
                  calcTotal();
                }}
                type="number"
                min="0"
                max="24"
                style={StyledInput}
                size="1.5"
              ></input>
            </Col>
            <Col style={secondColStyle}>
              <input
                id="tuesdayHours"
                name="tuesdayHours"
                value={tuesdayHoursRows}
                onChange={(e) => {
                  let hoursForTuesday = parseInt(e.target.value);
                  setTuesdayHoursRows(hoursForTuesday);
                  formik.initialValues.tuesdayHours = hoursForTuesday;
                  calcTotal();
                }}
                type="number"
                min="0"
                max="24"
                style={StyledInput}
                size="1.5"
              ></input>
            </Col>
            <Col style={secondColStyle}>
              <input
                id="wednesdayHours"
                name="wednesdayHours"
                value={wednesdayHoursRows}
                onChange={(e) => {
                  let hoursForWednesday = parseInt(e.target.value);
                  setWednesdayHoursRows(hoursForWednesday);
                  formik.initialValues.wednesdayHours = hoursForWednesday;
                  calcTotal();
                }}
                type="number"
                min="0"
                max="24"
                style={StyledInput}
                size="1.5"
              ></input>
            </Col>
            <Col style={secondColStyle}>
              <input
                id="thursdayHours"
                name="thursdayHours"
                value={thursdayHoursRows}
                onChange={(e) => {
                  let hoursForThursday = parseInt(e.target.value);
                  setThursdayHoursRows(hoursForThursday);
                  formik.initialValues.thursdayHours = hoursForThursday;
                  calcTotal();
                }}
                type="number"
                min="0"
                max="24"
                style={StyledInput}
                size="1.5"
              ></input>
            </Col>
            <Col style={secondColStyle}>
              <input
                id="fridayHours"
                name="fridayHours"
                value={fridayHoursRows}
                onChange={(e) => {
                  let hoursForFriday = parseInt(e.target.value);
                  setFridayHoursRows(hoursForFriday);
                  formik.initialValues.fridayHours = hoursForFriday;
                  calcTotal();
                }}
                type="number"
                min="0"
                max="24"
                style={StyledInput}
                size="1.5"
              ></input>
            </Col>
            <Col style={secondColStyle}>
              <input
                id="saturdayHours"
                name="saturdayHours"
                value={saturdayHoursRows}
                onChange={(e) => {
                  let hoursForSaturday = parseInt(e.target.value);
                  setSaturdayHoursRows(hoursForSaturday);
                  formik.initialValues.saturdayHours = hoursForSaturday;
                  calcTotal();
                }}
                type="number"
                min="0"
                max="24"
                style={StyledInput}
                size="1.5"
              ></input>
            </Col>
            <Col style={secondColStyle}>
              <input
                id="sundayHours"
                name="sundayHours"
                value={sundayHoursRows}
                onChange={(e) => {
                  let hoursForSunday = parseInt(e.target.value);
                  setSundayHoursRows(hoursForSunday);
                  formik.initialValues.sundayHours = hoursForSunday;
                  calcTotal();
                }}
                type="number"
                min="0"
                max="24"
                style={StyledInput}
                size="1.5"
              ></input>
            </Col>
            <Col style={secondColRightStyle}>{calcTotal()}</Col>
          </Row>
        </form>
      </div>
    </Container>
  );
};

export { TimesheetRow };
