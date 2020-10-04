import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import { MainContent } from "./components/layout/MainContent";
import { AppBar } from "./components/layout/AppBar";
import { useDispatch, useSelector } from "react-redux";
import { checkSession } from "./store/slices/auth";

function App() {
  const isSessionChecked = useSelector((state) => state.auth.isSessionChecked);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkSession());
  }, [dispatch]);

  if (!isSessionChecked) {
    return null;
  }

  return (
    <BrowserRouter>
      <MainContent>
        <AppRoutes />
        <AppBar />
      </MainContent>
    </BrowserRouter>
  );
}

export default App;
