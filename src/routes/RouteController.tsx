import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import MainPage from "pages/MainPage";

function RouteController() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default RouteController;
