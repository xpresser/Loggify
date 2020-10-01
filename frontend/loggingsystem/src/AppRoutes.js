import React from "react";
import Switch from "react-bootstrap/esm/Switch";
import { Redirect, Route } from "react-router-dom";
import { LoginPage } from "./pages/Auth/LoginPage";

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/login" exact component={LoginPage} />
      <Redirect to="/login" />
    </Switch>
  );
};

export { AppRoutes };
