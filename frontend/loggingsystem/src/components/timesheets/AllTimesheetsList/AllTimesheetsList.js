import React from "react";
import { Timesheet } from "../Timesheet/Timesheet";
import { Container } from "react-bootstrap";

const AllTimesheetsList = ({ user }) => {
  return (
    <Container>
      {user.timesheets.timesheets.map((t) => {
        return <Timesheet user={user} timesheet={t} />;
      })}
    </Container>
  );
};

export { AllTimesheetsList };
