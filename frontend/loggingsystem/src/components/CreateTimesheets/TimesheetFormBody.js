import React from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { resetRoWMessages } from "../../store/slices/timeSheetRows";

const TimesheetFormBody = () => {
  const colStyle = {
    borderTop: "1px solid black",
    borderLeft: "1px solid black",
    borderBottom: "1px solid black",
    height: "4rem",
    display: "flex",
    justifyContent: "center",
  };

  const colRightStyle = {
    borderTop: "1px solid black",
    borderRight: "1px solid black",
    borderLeft: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
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
  };
  const messages = useSelector((state) => state.timesheetRows.messages);

  const dispatch = useDispatch();
  React.useEffect(() => {
    return () => {
      dispatch(resetRoWMessages());
    };
  }, []);

  return (
    <Container>
      <Alert
        show={messages.hasOwnProperty("updateRow")}
        variant="success"
        onClose={() => {
          dispatch(resetRoWMessages());
        }}
        dismissible
      >
        {messages.updateRow}
      </Alert>
      <div>
        <Row fluid="md">
          <Col style={colStyle} xs={1}></Col>
          <Col style={colStyle} xs={2}>
            <h6 style={StyledFirstRowTextInput}>Project</h6>
          </Col>
          <Col style={colStyle} xs={2}>
            <h6 style={StyledFirstRowTextInput}>Task</h6>
          </Col>
          <Col style={colStyle}>
            <h6 style={StyledFirstRowTextInput}>Mon</h6>
          </Col>
          <Col style={colStyle}>
            <h6 style={StyledFirstRowTextInput}>Tue</h6>
          </Col>
          <Col style={colStyle}>
            <h6 style={StyledFirstRowTextInput}>Wed</h6>
          </Col>
          <Col style={colStyle}>
            <h6 style={StyledFirstRowTextInput}>Thu</h6>
          </Col>
          <Col style={colStyle}>
            <h6 style={StyledFirstRowTextInput}>Fri</h6>
          </Col>
          <Col style={colStyle}>
            <h6 style={StyledFirstRowTextInput}>Sat</h6>
          </Col>
          <Col style={colStyle}>
            <h6 style={StyledFirstRowTextInput}>Sun</h6>
          </Col>
          <Col style={colRightStyle}>
            <h6 style={StyledFirstRowTextInput}>Total:</h6>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export { TimesheetFormBody };
