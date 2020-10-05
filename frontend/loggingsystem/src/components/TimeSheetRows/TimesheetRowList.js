import React from "react";
import { Container, Spinner } from "react-bootstrap";
import { getTimeSheetRowsForTimeSheet } from "../../api/timeSheetRows";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { TimesheetRow } from "../CreateTimesheets/CreateTimesheetRow";
import { fetchRowsPerTimeSheet } from "../../store/slices/timeSheetRows";
import { useRouteMatch } from "react-router-dom";
import { getTimesheetById } from "src/api/timesheets";

const LoadMoreButton = styled.span`
  color: #969696;
  cursor: pointer;
  margin-bottom: 0.75rem;
  display: inline-block;
`;

function TimesheetRowList() {
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
        ></TimesheetRow>
      ))}
    </div>
  );
}

export { TimesheetRowList };

// const timesheet = getTimesheetById({ timesheetId: test })
// console.log(timesheet)
// const current = [];
// const currentRows = [];
// timesheet.then((timesheetRow) => {
//     let content = timesheetRow;
//     current.push(content);
// });
// console.log(current)
// const dispatch = useDispatch();
// React.useEffect(() => {
//     dispatch(getRowsForTimesheet(test))
// }, [dispatch])

// const rows = useSelector(state => state.timesheetRows.timesheetsRows) || [];
// // rows.then((value) => {
// //     let content = value;
// //     currentRows.push(content);
// // });
// const testArray = [];
// testArray.push(1,2,3,4)
// console.log(testArray)
// console.log(currentRows[0])
// console.log((currentRows))
