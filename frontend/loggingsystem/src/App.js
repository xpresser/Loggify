import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div id="appbar">
          <div id="maincontent">
            <AppRoutes />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
