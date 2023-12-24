import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Planner from "./Planner";


function handleButtonClick(page){
    window.location = `/${page}`
}

function Redirect(props){
    const [showPlannerLink, setShowPlannerLink] = useState(true);

  const handlePlannerLinkClick = () => {
    setShowPlannerLink(false);
  };

  return (
    <Router>
      <div className="App">
        {showPlannerLink && (
          <Link to="/planner" className="nav-link" onClick={handlePlannerLinkClick}>
            Planner
          </Link>
        )}
        <Routes>
          <Route path="/planner" element={<Planner />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Redirect;