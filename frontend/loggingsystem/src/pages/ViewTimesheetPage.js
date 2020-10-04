import React from "react";
import { Col, Container } from "react-bootstrap";
import { useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { timesheets as timesheet } from "../mocks/timesheets";
import { ViewTimesheetRow } from "../components/TimeSheetRows/ViewTimesheetRow";
import { useDispatch, useSelector } from "react-redux";
import { fetchRowsPerTimeSheet } from "../store/slices/timeSheetRows";

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
    dispatch(fetchRowsPerTimeSheet(test));
  }, [dispatch]);

  console.log(timesheetRows);
  return (
    <div>
      <h1 className={"text-center mb-4"}>
        Timesheet for week {timesheet.timesheets[0].week}:
      </h1>

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
    </div>

    // const getTotalHoursForDay = (day) => {
    //   let totalHours = 0;
    //
    //   // timesheetRows.map(row => {
    //   //   for (const [key, value] of Object.entries(row)) {
    //   //     key === day ? (totalHours += value) : console.log(false);
    //   //   }
    //   // });
    //
    //   if (totalHours === 0) {
    //     return null;
    //   }
    //
    //   return totalHours;
    // };
    //
    // return (
    //   <div>
    //     <Button>
    //       {" "}
    //       <Link style={{ color: "black" }} to={{ pathname: "/timesheets" }}>
    //         Back
    //       </Link>
    //     </Button>
    //     <Week timesheet={timesheet} />
    //     <div>
    //       <b>User</b>: {user.fullName}
    //     </div>
    //     <CustomContainer>
    //       <Row>
    //         <CustomCol sm="1"></CustomCol>
    //         <CustomCol sm="2">Project</CustomCol>
    //         <CustomCol sm="2">Task</CustomCol>
    //         <CustomCol>Mon</CustomCol>
    //         <CustomCol>Tue</CustomCol>
    //         <CustomCol>Wed</CustomCol>
    //         <CustomCol>Thu</CustomCol>
    //         <CustomCol>Fri</CustomCol>
    //         <CustomCol>Sat</CustomCol>
    //         <CustomCol>Sun</CustomCol>
    //         <CustomCol>Total</CustomCol>
    //       </Row>
    //       {timesheet.rows &&
    //         timesheet.rows.map((row) => {
    //           return (
    //             <Row>
    //               <CustomCol sm="1"></CustomCol>
    //               <CustomCol sm="2">{row.project}</CustomCol>
    //               <CustomCol sm="2">{row.task}</CustomCol>
    //               <CustomCol>{row.mondayHours}</CustomCol>
    //               <CustomCol>{row.tuesdayHours}</CustomCol>
    //               <CustomCol>{row.wednesdayHours}</CustomCol>
    //               <CustomCol>{row.thursdayHours}</CustomCol>
    //               <CustomCol>{row.fridayHours}</CustomCol>
    //               <CustomCol>{row.saturdayHours}</CustomCol>
    //               <CustomCol>{row.sundayHours}</CustomCol>
    //               <CustomCol>{row.totalHours}</CustomCol>
    //             </Row>
    //           );
    //         })}
    //       <Row>
    //         <CustomCol
    //           sm="5"
    //           style={{
    //             backgroundColor: "#DFDCDC",
    //             display: "flex",
    //             justifyContent: "center",
    //           }}
    //         >
    //           Total:
    //         </CustomCol>
    //         <CustomCol style={{ backgroundColor: "#DFDCDC" }}>
    //           {getTotalHoursForDay("mondayHours")}
    //         </CustomCol>
    //         <CustomCol style={{ backgroundColor: "#DFDCDC" }}>
    //           {getTotalHoursForDay("tuesdayHours")}
    //         </CustomCol>
    //         <CustomCol style={{ backgroundColor: "#DFDCDC" }}>
    //           {getTotalHoursForDay("wednesdayHours")}
    //         </CustomCol>
    //         <CustomCol style={{ backgroundColor: "#DFDCDC" }}>
    //           {getTotalHoursForDay("thursdayHours")}
    //         </CustomCol>
    //         <CustomCol style={{ backgroundColor: "#DFDCDC" }}>
    //           {getTotalHoursForDay("fridayHours")}
    //         </CustomCol>
    //         <CustomCol style={{ backgroundColor: "#DFDCDC" }}>
    //           {getTotalHoursForDay("saturdayHours")}
    //         </CustomCol>
    //         <CustomCol style={{ backgroundColor: "#DFDCDC" }}>
    //           {getTotalHoursForDay("sundayHours")}
    //         </CustomCol>
    //         <CustomCol style={{ backgroundColor: "#DFDCDC" }}>
    //           {timesheet.totalHours}
    //         </CustomCol>
    //       </Row>
    //     </CustomContainer>
    //   </div>
  );
};

export { ViewTimesheetPage };
