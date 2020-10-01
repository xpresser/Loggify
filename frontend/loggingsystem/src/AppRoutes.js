import React from "react";
import Switch from "react-bootstrap/esm/Switch";
import { Route } from "react-router-dom";
import { LoginPage } from "./pages/Auth/LoginPage";
import { RegisterPage } from "./pages/Auth/RegisterPage";

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/login" exact component={LoginPage} />
      <Route path="/signup" exact component={RegisterPage} />
    </Switch>
  );
};

export { AppRoutes };
