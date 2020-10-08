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
  const [mondayHoursRows, setMondayHoursRows] = React.useState(0);
  const [tuesdayHoursRows, setTuesdayHoursRows] = React.useState(0);
  const [wednesdayHoursRows, setWednesdayHoursRows] = React.useState(0);
  const [thursdayHoursRows, setThursdayHoursRows] = React.useState(0);
  const [fridayHoursRows, setFridayHoursRows] = React.useState(0);
  const [saturdayHoursRows, setSaturdayHoursRows] = React.useState(0);
  const [sundayHoursRows, setSundayHoursRows] = React.useState(0);

  return (
    <Container>
      <TimesheetHeader></TimesheetHeader>
      <TimesheetFormBody></TimesheetFormBody>
      <TimesheetRowList
        timesheet={timesheet}
        setMondayHoursRows={setMondayHoursRows}
      ></TimesheetRowList>
      <TimesheetRowForm></TimesheetRowForm>
      <TimesheetBottom
        hours={{
          mondayHoursRows,
          tuesdayHoursRows,
          wednesdayHoursRows,
          thursdayHoursRows,
          fridayHoursRows,
          saturdayHoursRows,
          sundayHoursRows,
        }}
      ></TimesheetBottom>
    </Container>
  );
};

export { TimesheetForm };
