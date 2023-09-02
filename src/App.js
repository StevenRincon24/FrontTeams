import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TeamList from "./components/teamList";
import AddTeam from "./components/teamAdd";
import "bootswatch/dist/solar/bootstrap.min.css";
import Navigation from "./components/navBar";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container p-4">
          <Navigation />
        </div>
        <div className="container p-4">
          <Routes>
            <Route path="/" element={<TeamList />} />
            <Route path="/addTeam" element={<AddTeam />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
