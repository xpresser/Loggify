import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "src/api/users";
import { resetSheets } from "src/store/slices/timesheets";
import { PageCaption } from "../components/generic/PageCaption/PageCaption.styled";
import { AllTimesheetsList } from "../components/timesheets/AllTimesheetsList/AllTimesheetsList";

const AllTimesheetsPage = () => {
  const user = useSelector((state) => state.auth.user.username);
  if (user === undefined) {
    window.location.reload();
  }
  const currentUser = user.toString();
  const getLoggedUser = getCurrentUser(currentUser);
  const current = [];
  getLoggedUser.then((value) => {
    let content = value;
    current.push(value);
  });

  return (
    <div>
      <PageCaption>Your timesheets:</PageCaption>
      <AllTimesheetsList user={current[0]} />
    </div>
  );
};

export { AllTimesheetsPage };
