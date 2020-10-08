import React from "react";
import { Container, Spinner } from "react-bootstrap";
import { getTimeSheetRowsForTimeSheet } from "../../api/timeSheetRows";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { TimesheetRow } from "../CreateTimesheets/CreateTimesheetRow";
import { fetchRowsPerTimeSheet } from "../../store/slices/timeSheetRows";
import { useRouteMatch } from "react-router-dom";
import { getTimesheetById } from "src/api/timesheets";
import { TimesheetRowForm } from "./TimesheetRowForm";
import { TimesheetBottom } from "../CreateTimesheets";

const LoadMoreButton = styled.span`
  color: #969696;
  cursor: pointer;
  margin-bottom: 0.75rem;
  display: inline-block;
`;

function TimesheetRowList() {
  let mondayHoursRows = 0;
  let tuesdayHoursRows = 0;
  let wednesdayHoursRows = 0;
  let thursdayHoursRows = 0;
  let fridayHoursRows = 0;
  let saturdayHoursRows = 0;
  let sundayHoursRows = 0;

  const {
    params: { id },
  } = useRouteMatch();
  let test = id;
  const timesheetRowsState = useSelector(
    (state) => state.timesheetRows.timesheetsRows
  );
  let timesheetRows = [];
  if (timesheetRowsState !== null) {
    timesheetRows = timesheetRowsState;
  }

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchRowsPerTimeSheet(test));
  }, [dispatch]);

  let mondayHours = 0;

  if (timesheetRows === undefined) {
    return (
      <Spinner animation="border" variant="primary">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }

  timesheetRows.forEach((value) => (mondayHoursRows += value.mondayHours));
  timesheetRows.forEach((value) => (thursdayHoursRows += value.tuesdayHours));
  timesheetRows.forEach(
    (value) => (wednesdayHoursRows += value.wednesdayHours)
  );
  timesheetRows.forEach((value) => (thursdayHoursRows += value.thursdayHours));
  timesheetRows.forEach((value) => (fridayHoursRows += value.fridayHours));
  timesheetRows.forEach((value) => (saturdayHoursRows += value.saturdayHours));
  timesheetRows.forEach((value) => (sundayHoursRows += value.sundayHours));

  return (
    <div>
      {timesheetRows.map((timesheetRow) => (
        <TimesheetRow
          key={timesheetRow.id}
          timesheetRow={timesheetRow}
        ></TimesheetRow>
      ))}
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
    </div>
  );
}

export { TimesheetRowList };
