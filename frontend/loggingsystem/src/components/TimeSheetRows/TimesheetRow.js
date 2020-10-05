import React from "react";
import { Col, Container, Row, Dropdown, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects, fetchTasks } from "src/store/slices/seeds";

const TimesheetRow = ({ timesheetRow }) => {
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

  return (
    <Container>
      <div>
        {console.log(timesheetRow)}
        <Row fluid="md">
          <Col style={secondColStyle} xs={1}>
            <button
              className="btn btn-primary"
              style={StyledDeleteButton}
            ></button>
          </Col>
          <Col style={secondColStyle} xs={2}>
            <Dropdown>
              <Dropdown.Toggle style={StyledDropButton} id="dropdown-basic">
                Select Project
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col style={secondColStyle} xs={2}>
            <Dropdown>
              <Dropdown.Toggle style={StyledDropButton} id="dropdown-basic">
                Select Project
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col style={secondColStyle}>
            <input
              style={StyledInput}
              size="1.5"
              value={timesheetRow.mondayHours}
            ></input>
          </Col>
          <Col style={secondColStyle}>
            <input
              style={StyledInput}
              size="1.5"
              value={timesheetRow.tuesdayHours}
            ></input>
          </Col>
          <Col style={secondColStyle}>
            <input
              style={StyledInput}
              size="1.5"
              value={timesheetRow.wednesdayHours}
            ></input>
          </Col>
          <Col style={secondColStyle}>
            <input
              style={StyledInput}
              size="1.5"
              value={timesheetRow.thursdayHours}
            ></input>
          </Col>
          <Col style={secondColStyle}>
            <input
              style={StyledInput}
              size="1.5"
              value={timesheetRow.fridayHours}
            ></input>
          </Col>
          <Col style={secondColStyle}>
            <input
              style={StyledInput}
              size="1.5"
              value={timesheetRow.saturdayHours}
            ></input>
          </Col>
          <Col style={secondColStyle}>
            <input
              style={StyledInput}
              size="1.5"
              value={timesheetRow.sundayHours}
            ></input>
          </Col>
          <Col style={secondColRightStyle}>{timesheetRow.totalHours}</Col>
        </Row>
      </div>
    </Container>
  );
};

export { TimesheetRow };
