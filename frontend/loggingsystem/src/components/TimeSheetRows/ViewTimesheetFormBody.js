import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const ViewTimesheetFormBody = () => {
  const colStyle = {
    borderTop: "1px solid black",
    borderLeft: "1px solid black",
    borderBottom: "1px solid black",
    display: "flex",
    justifyContent: "center",
  };

  const colRightStyle = {
    borderTop: "1px solid black",
    borderRight: "1px solid black",
    borderLeft: "1px solid black",
    borderBottom: "1px solid black",
    height: "4rem",
    display: "flex",
    justifyContent: "center",
  };

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

  const StyledFirstRowTextInput = {
    paddingTop: "1rem",
    textAlign: "center",
  };

  const CustomContainer = styled(Container)`
    padding-top: 2rem;
  `;

  return (
    <CustomContainer>
      <Row>
        <Col style={colStyle} xs={2}>
          <h6 style={StyledFirstRowTextInput}>Project</h6>
        </Col>
        <Col style={colStyle} xs={2}>
          <h6 style={StyledFirstRowTextInput}>Task</h6>
        </Col>
        <Col style={colStyle} xs={1}>
          <h6 style={StyledFirstRowTextInput}>Mon</h6>
        </Col>
        <Col style={colStyle} xs={1}>
          <h6 style={StyledFirstRowTextInput}>Tue</h6>
        </Col>
        <Col style={colStyle} xs={1}>
          <h6 style={StyledFirstRowTextInput}>Wed</h6>
        </Col>
        <Col style={colStyle} xs={1}>
          <h6 style={StyledFirstRowTextInput}>Thu</h6>
        </Col>
        <Col style={colStyle} xs={1}>
          <h6 style={StyledFirstRowTextInput}>Fri</h6>
        </Col>
        <Col style={colStyle} xs={1}>
          <h6 style={StyledFirstRowTextInput}>Sat</h6>
        </Col>
        <Col style={colStyle} xs={1}>
          <h6 style={StyledFirstRowTextInput}>Sun</h6>
        </Col>
        <Col style={colRightStyle} xs={1}>
          <h6 style={StyledFirstRowTextInput}>Total:</h6>
        </Col>
      </Row>
    </CustomContainer>
  );
};

export { ViewTimesheetFormBody };
