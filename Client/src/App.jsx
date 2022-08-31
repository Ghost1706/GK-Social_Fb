import React from "react";
import HomePage from "./Pages/HomePage";
import Profile from "./Pages/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
