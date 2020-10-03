import React from "react";
import { useSelector } from "react-redux";
import { Switch, Redirect, Route } from "react-router-dom";
import { AllTimesheetsPage } from "./pages/AllTimesheetsPage";
import { LoginPage } from "./pages/Auth/LoginPage";
import { RegisterPage } from "./pages/Auth/RegisterPage";
import { ViewTimesheetPage } from "./pages/ViewTimesheetPage";

const AppRoutes = () => {
  const user = useSelector((state) => state.auth.user);

  if (user) {
    return (
      <Switch>
        <Route path="/" exact component={AllTimesheetsPage} />
        <Route path="/timesheet/:id" exact component={ViewTimesheetPage} />
        <Route path="/timesheets" exact component={AllTimesheetsPage} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={RegisterPage} />
        <Redirect to="/login" />
      </Switch>
    );
  }
};

export { AppRoutes };
