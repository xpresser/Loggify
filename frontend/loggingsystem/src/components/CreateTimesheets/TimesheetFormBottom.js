import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchRowsPerTimeSheet } from "../../store/slices/timeSheetRows";
import { useRouteMatch } from "react-router-dom";

const BottomColStyle = {
  borderLeft: "1px solid black",
  borderBottom: "1px solid black",
  textAlign: "center",
  height: "3rem",
  backgroundColor: "grey",
  display: "flex",
  justifyContent: "center",
};

const BottomColRightStyle = {
  borderRight: "1px solid black",
  borderLeft: "1px solid black",
  borderBottom: "1px solid black",
  textAlign: "center",
  height: "3rem",
  backgroundColor: "grey",
  display: "flex",
  justifyContent: "center",
};

const StyledRowTextInput = {
  paddingTop: "0.75rem",
};

const TimesheetBottom = ({ mondayTotal }) => {
  return (
    <Container>
      <div>
        <Row fluid="md">
          <Col style={BottomColStyle} xs={5}>
            <h6 style={StyledRowTextInput}>Total</h6>
          </Col>
          <Col style={BottomColStyle}>
            <h6 style={StyledRowTextInput}>{mondayTotal}</h6>
          </Col>
          <Col style={BottomColStyle}>
            <h6 style={StyledRowTextInput}>XX</h6>
          </Col>
          <Col style={BottomColStyle}>
            <h6 style={StyledRowTextInput}>XX</h6>
          </Col>
          <Col style={BottomColStyle}>
            <h6 style={StyledRowTextInput}>XX</h6>
          </Col>
          <Col style={BottomColStyle}>
            <h6 style={StyledRowTextInput}>XX</h6>
          </Col>
          <Col style={BottomColStyle}>
            <h6 style={StyledRowTextInput}>XX</h6>
          </Col>
          <Col style={BottomColStyle}>
            <h6 style={StyledRowTextInput}>XX</h6>
          </Col>
          <Col style={BottomColRightStyle}>
            <h6 style={StyledRowTextInput}>XX</h6>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export { TimesheetBottom };
