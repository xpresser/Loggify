import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import { MainContent } from "./components/layout/MainContent/MainContent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div id="appbar">
          <MainContent>
            <AppRoutes />
          </MainContent>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
