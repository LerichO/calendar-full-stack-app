import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Planner from "./pages/planner"
import LoginForm from "./components/login-form.component";

const App = () => {

  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);

  if(!token){
    return <LoginForm />
  }

  return (
    <main>
      <Router>
        <Route path="/planner" element={<Planner />}/>
        <Route path="/account" /> {/* create account page/component */}
      </Router>
    </main>
  );
}

export default App;
