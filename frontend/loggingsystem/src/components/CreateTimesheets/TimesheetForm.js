import React from "react";
import styled from "styled-components";
import { TimesheetRowForm, TimesheetRowList } from "../TimeSheetRows";
import { TimesheetFormBody } from "./TimesheetFormBody";
import { TimesheetBottom } from "./TimesheetFormBottom";
import { TimesheetHeader } from "./TimesheetFormHeader";

const Container = styled.div`
  width: 1200px;
  margin: 100px auto;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
`;

const TimesheetForm = ({ timesheet }) => {
  return (
    <Container>
      <TimesheetHeader></TimesheetHeader>
      <TimesheetFormBody></TimesheetFormBody>
      <TimesheetRowList timesheet={timesheet}></TimesheetRowList>
      <TimesheetRowForm></TimesheetRowForm>
      <TimesheetBottom></TimesheetBottom>
    </Container>
  );
};

export { TimesheetForm };
