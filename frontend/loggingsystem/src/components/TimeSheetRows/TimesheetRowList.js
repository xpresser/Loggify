import React from "react";
import { Alert, Container, Spinner } from "react-bootstrap";
import { getTimeSheetRowsForTimeSheet } from "../../api/timeSheetRows";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { TimesheetRow } from "../CreateTimesheets/CreateTimesheetRow";
import {
  fetchRowsPerTimeSheet,
  resetRoWMessages,
} from "../../store/slices/timeSheetRows";
import { useRouteMatch } from "react-router-dom";

const LoadMoreButton = styled.span`
  color: #969696;
  cursor: pointer;
  margin-bottom: 0.75rem;
  display: inline-block;
`;

function TimesheetRowList({
  hours: {
    setMondayHoursRows,
    setTuesdayHoursRows,
    setWednesdayHoursRows,
    setThursdayHoursRows,
    setFridayHoursRows,
    setSaturdayHoursRows,
    setSundayHoursRows,
  },
}) {
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

  if (timesheetRows === undefined) {
    return (
      <Spinner animation="border" variant="primary">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }

  return (
    <div>
      {timesheetRows.map((timesheetRow) => (
        <TimesheetRow
          key={timesheetRow.id}
          timesheetRow={timesheetRow}
          hours={{
            setMondayHoursRows,
            setTuesdayHoursRows,
            setWednesdayHoursRows,
            setThursdayHoursRows,
            setFridayHoursRows,
            setSaturdayHoursRows,
            setSundayHoursRows,
          }}
        ></TimesheetRow>
      ))}
    </div>
  );
}

export { TimesheetRowList };
