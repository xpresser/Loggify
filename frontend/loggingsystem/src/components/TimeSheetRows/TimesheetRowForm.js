import React from "react";
import { Col, Container, Row, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects, fetchTasks } from "src/store/slices/seeds";
import { fetchCurrentTimeSheet } from "src/store/slices/timesheets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import { useRouteMatch } from "react-router-dom";
import { createTheRow } from "src/store/slices/timeSheetRows";
library.add(faCheckSquare);

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
    width: "100%",
  };

  const StyledSubmitButton = {
    marginTop: "0.25rem",
    backgroundColor: "green",
    border: "none",
  };

  const {
    params: { id },
  } = useRouteMatch();
  let sheetId = id;

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

  React.useEffect(() => {
    dispatch(fetchCurrentTimeSheet(sheetId));
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      timeSheetId: sheetId,
      projectId: 1,
      taskId: 1,
      mondayHours: 0,
      tuesdayHours: 0,
      wednesdayHours: 0,
      thursdayHours: 0,
      fridayHours: 0,
      saturdayHours: 0,
      sundayHours: 0,
      totalHours: 0,
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(createTheRow(values));
      formik.resetForm();
    },
  });

  return (
    <Container>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <Row fluid="md">
            <Col style={secondColStyle} xs={1}>
              <button
                type="submit"
                className="btn btn-primary"
                style={StyledSubmitButton}
              >
                <span>
                  <FontAwesomeIcon icon="check-square"></FontAwesomeIcon>
                </span>
              </button>
            </Col>
            <Col style={secondColStyle} xs={2}>
              <select
                id="projectId"
                name="projectId"
                onChange={formik.handleChange}
                value={formik.values.projectId}
                style={{ marginTop: "0.5rem", width: "8.5rem" }}
              >
                {projects.map((project) => (
                  <option key={project.id} value={project.id}>
                    {project.name}
                  </option>
                ))}
              </select>
            </Col>
            <Col style={secondColStyle} xs={2}>
              <select
                id="taskId"
                name="taskId"
                onChange={formik.handleChange}
                value={formik.values.taskId}
                style={{ marginTop: "0.5rem", width: "8.5rem" }}
              >
                {tasks.map((task) => (
                  <option key={task.id} value={task.id}>
                    {task.name}
                  </option>
                ))}
              </select>
            </Col>
            <Col style={secondColStyle}>
              <input
                id="mondayHours"
                name="mondayHours"
                onChange={formik.handleChange}
                value={formik.values.mondayHours}
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
                onChange={formik.handleChange}
                value={formik.values.tuesdayHours}
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
                onChange={formik.handleChange}
                value={formik.values.wednesdayHours}
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
                onChange={formik.handleChange}
                value={formik.values.thursdayHours}
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
                onChange={formik.handleChange}
                value={formik.values.fridayHours}
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
                onChange={formik.handleChange}
                value={formik.values.saturdayHours}
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
                onChange={formik.handleChange}
                value={formik.values.sundayHours}
                type="number"
                min="0"
                max="24"
                style={StyledInput}
                size="1.5"
              ></input>
            </Col>
            <Col style={secondColRightStyle}></Col>
          </Row>
        </form>
      </div>
    </Container>
  );
};

export { TimesheetRowForm };
