import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const ViewTimesheetRow = ({ timesheet, timesheetRow }) => {
  const secondColStyle = {
    border: "1px solid black",
    textAlign: "center",
    height: "3rem",
  };

  const secondColRightStyle = {
    border: "1px solid black",
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

  return (
    <Container>
      <div>
        {console.log(timesheetRow)}
        <Row fluid="md">
          <Col style={secondColStyle} xs={2}>
            <p>DevCamp</p>
          </Col>
          <Col style={secondColStyle} xs={2}>
            <p>Administrative</p>
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
          <Col style={secondColRightStyle}>{timesheetRow.totalHours}</Col>
        </Row>
      </div>
    </Container>
  );
};
