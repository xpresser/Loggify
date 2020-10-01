import React from "react";
import Switch from "react-bootstrap/esm/Switch";
import { Redirect, Route } from "react-router-dom";
import { LoginPage } from "./pages/Auth/LoginPage";
import { RegisterPage } from "./pages/Auth/RegisterPage";

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/login" exact component={LoginPage} />
    </Switch>
  );
};

export { AppRoutes };
