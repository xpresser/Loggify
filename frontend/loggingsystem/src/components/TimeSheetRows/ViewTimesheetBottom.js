import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const BottomColStyle = {
  borderLeft: "1px solid black",
  borderBottom: "1px solid black",
  textAlign: "center",
  height: "3rem",
  backgroundColor: "grey",
};

const BottomColRightStyle = {
  borderRight: "1px solid black",
  borderLeft: "1px solid black",
  borderBottom: "1px solid black",
  textAlign: "center",
  height: "3rem",
  backgroundColor: "grey",
};

const StyledRowTextInput = {
  paddingTop: "0.75rem",
};

function calcTimeForSpecificRow({ row }) {
  return (
    row.mondayHours +
    row.tuesdayHours +
    row.wednesdayHours +
    row.thursdayHours +
    row.fridayHours +
    row.sundayHours +
    row.saturdayHours
  );
}

const ViewTimesheetBottom = ({ timesheetRows }) => {
  function calcMondayTotal() {
    let total = 0;

    timesheetRows.forEach((r) => {
      total += r.mondayHours;
    });

    return total;
  }

  function calcTuesdayTotal() {
    let total = 0;

    timesheetRows.forEach((r) => {
      total += r.tuesdayHours;
    });

    return total;
  }

  function calcWednesdayTotal() {
    let total = 0;

    timesheetRows.forEach((r) => {
      total += r.wednesdayHours;
    });

    return total;
  }

  function calcThursdayTotal() {
    let total = 0;

    timesheetRows.forEach((r) => {
      total += r.thursdayHours;
    });

    return total;
  }

  function calcFridayTotal() {
    let total = 0;

    timesheetRows.forEach((r) => {
      total += r.fridayHours;
    });

    return total;
  }

  function calcSaturdayTotal() {
    let total = 0;

    timesheetRows.forEach((r) => {
      total += r.saturdayHours;
    });

    return total;
  }

  function calcSundayTotal() {
    let total = 0;

    timesheetRows.forEach((r) => {
      total += r.sundayHours;
    });

    return total;
  }

  function calcTotal() {
    let total = 0;

    timesheetRows.forEach((r) => {
      total += calcTimeForSpecificRow({ row: r });
    });

    return total;
  }

  return (
    <Container>
      <div>
        <Row fluid="md">
          <Col style={BottomColStyle} xs={4}>
            <h6 style={StyledRowTextInput}>Total</h6>
          </Col>
          <Col style={BottomColStyle}>
            <h6 style={StyledRowTextInput}>{calcMondayTotal()}</h6>
          </Col>
          <Col style={BottomColStyle}>
            <h6 style={StyledRowTextInput}>{calcTuesdayTotal()}</h6>
          </Col>
          <Col style={BottomColStyle}>
            <h6 style={StyledRowTextInput}>{calcWednesdayTotal()}</h6>
          </Col>
          <Col style={BottomColStyle}>
            <h6 style={StyledRowTextInput}>{calcThursdayTotal()}</h6>
          </Col>
          <Col style={BottomColStyle}>
            <h6 style={StyledRowTextInput}>{calcFridayTotal()}</h6>
          </Col>
          <Col style={BottomColStyle}>
            <h6 style={StyledRowTextInput}>{calcSaturdayTotal()}</h6>
          </Col>
          <Col style={BottomColStyle}>
            <h6 style={StyledRowTextInput}>{calcSundayTotal()}</h6>
          </Col>
          <Col style={BottomColRightStyle}>
            <h6 style={StyledRowTextInput}>{calcTotal()}</h6>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export { ViewTimesheetBottom };
