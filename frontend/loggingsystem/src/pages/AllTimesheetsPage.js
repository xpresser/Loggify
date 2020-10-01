import React, { useState } from "react";
import { PageCaption } from "../components/generic/PageCaption/PageCaption.styled";
import { AllTimesheetsList } from "../components/timesheets/AllTimesheetsList/AllTimesheetsList";
import { timesheets } from "../mocks/timesheets";
import { user } from "../mocks/user";
import styled from "styled-components";

const AllTimesheetsPage = () => {
  const [loggedUser, setUser] = useState(user);

  return (
    <div>
      <PageCaption>Your timesheets:</PageCaption>
      <AllTimesheetsList user={loggedUser} />
    </div>
  );
};

export { AllTimesheetsPage };
