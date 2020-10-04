import React from "react";
import { Container } from "react-bootstrap";
import { getUserTimesheets } from "../../../api/timesheets";
import Spinner from "react-bootstrap/Spinner";
import { Timesheet } from "../Timesheet/Timesheet";

const AllTimesheetsList = ({ user }) => {
  const timesheetsQuery = getUserTimesheets({
    userId: 1,
    page: 0,
    pageSize: 10,
  });

  const [timesheets, setTimesheets] = React.useState([]);
  const [isTimesheetsFetch, setIsTimesheetsFetch] = React.useState(false);

  // timesheetsQuery.then(value => {
  //     let content = value.content;
  //     content.forEach(v => {
  //         timesheets.push(v);
  //     })
  // });
  timesheetsQuery.then(function (response) {
    if (!isTimesheetsFetch) {
      let content = response.content;
      setTimesheets(content);
      setIsTimesheetsFetch(true);
    }
  });

  if (timesheets === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      {timesheets.map((t) => {
        return <Timesheet user={user} timesheet={t} />;
      })}
    </Container>
  );
};

export { AllTimesheetsList };
