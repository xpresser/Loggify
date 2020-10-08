import React from "react";
import styled from "styled-components";
import { TimesheetRowForm, TimesheetRowList } from "../TimeSheetRows";
import { TimesheetFormBody } from "./TimesheetFormBody";
import { TimesheetBottom } from "./TimesheetFormBottom";
import { TimesheetHeader } from "./TimesheetFormHeader";

const Container = styled.div`
  width: 80%;
  margin: 1% auto;
  padding: 1rem;
  background-color: white;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.2),
    0 5rem 10rem 0 rgba(0, 0, 0, 0.2);
`;

const TimesheetForm = ({ timesheet }) => {
  return (
    <Container>
      <TimesheetHeader></TimesheetHeader>
      <TimesheetFormBody></TimesheetFormBody>
      <TimesheetRowList timesheet={timesheet}></TimesheetRowList>
    </Container>
  );
};

export { TimesheetForm };
