import React from "react";
import { Col, Container, Row } from "react-bootstrap";

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

const TimesheetBottom = () => {
  return (
    <Container>
      <div>
        <Row fluid="md">
          <Col style={BottomColStyle} xs={5}>
            <h6 style={StyledRowTextInput}>Total</h6>
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
