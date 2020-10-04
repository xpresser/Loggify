import React from "react";
import { Container } from "react-bootstrap";
import { getUserTimesheets } from "../../../api/timesheets";
import { Timesheet } from "../Timesheet/Timesheet";

const AllTimesheetsList = ({ user }) => {
  const timesheetsQuery = getUserTimesheets({
    userId: 1,
    page: 0,
  });

  const [timesheets, setTimesheets] = React.useState([]);
  const [isTimesheetsFetch, setIsTimesheetsFetch] = React.useState(false);

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
      {timesheets.length === 0 ? (
        <div className="alert alert-info" role="alert">
          You do not have any timesheets!
        </div>
      ) : (
        timesheets.map((t) => {
          return <Timesheet user={user} timesheet={t} />;
        })
      )}
    </Container>
  );
};

export { AllTimesheetsList };
