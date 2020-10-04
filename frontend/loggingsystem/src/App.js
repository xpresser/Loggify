import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import { MainContent } from "./components/layout/MainContent";
import { AppBar } from "./components/layout/AppBar";

function App() {
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
