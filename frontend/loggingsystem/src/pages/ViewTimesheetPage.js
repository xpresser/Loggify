import React from "react";
import { Col, Container } from "react-bootstrap";
import { useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { timesheets as timesheet } from "../mocks/timesheets";
import { ViewTimesheetRow } from "../components/TimeSheetRows/ViewTimesheetRow";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRowsPerTimeSheet,
  refreshRowsState,
  resetTimesheetsRow,
} from "../store/slices/timeSheetRows";
import { fetchCurrentTimeSheet, resetSheets } from "../store/slices/timesheets";
import { ViewTimesheetFormBody } from "../components/TimeSheetRows/ViewTimesheetFormBody";
import { ViewTimesheetBottom } from "../components/TimeSheetRows/ViewTimesheetBottom";

const CustomCol = styled(Col)`
  border: 1px solid grey;
`;

const CustomContainer = styled(Container)`
  padding-top: 2rem;
`;

const Button = styled.button`
  font-size: 14px;
  font-weight: bold;
  border-radius: 0.5rem;
  margin: 0.5rem 0;
  padding: 0 1rem;
`;

const ViewTimesheetPage = () => {
  //Timesheet id
  const {
    params: { id },
  } = useRouteMatch();
  console.log(id);
  let test = id;
  console.log(test);

  const timesheetRowsState = useSelector(
    (state) => state.timesheetRows.timesheetsRows
  );
  let timesheetRows = [];
  if (timesheetRowsState !== null) {
    timesheetRows = timesheetRowsState;
  }
  console.log(timesheetRows);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(resetTimesheetsRow());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(fetchRowsPerTimeSheet(test));
  }, [dispatch]);

  const timesheetState = useSelector((state) => state.timesheets.updateSheet);
  const testSheet = timesheetState?.[0] || [];

  React.useEffect(() => {
    dispatch(fetchCurrentTimeSheet(test));
  }, [dispatch]);

  if (timesheetRows === undefined) {
    return <div>Loading...</div>;
  }

  console.log(timesheetRows);
  return (
    <div
      style={{
        width: "80%",
        margin: "0 auto",
        padding: "1%",
        border: "none",
        borderRadius: "10px",
        boxShadow:
          "0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.2)",
      }}
    >
      <h1 className={"text-center mb-4"}>
        Timesheet for week {testSheet.startingDate}:
      </h1>
      <ViewTimesheetFormBody />
      {timesheetRows.filter((value) => value.timesheetId === timesheet.id)
        .length === 0 ? (
        <div className="alert alert-info" role="alert">
          This timesheet do not have any rows!
        </div>
      ) : (
        timesheetRows
          .filter((value) => value.timesheetId === timesheet.id)
          .map((timesheetRow) => (
            <ViewTimesheetRow
              key={timesheetRow.id}
              timesheetRow={timesheetRow}
            />
          ))
      )}
      <ViewTimesheetBottom timesheetRows={timesheetRows} />
    </div>
  );
};

export { ViewTimesheetPage };
