import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Planner from "./pages/planner"
import LoginForm from "./pages/login-form";

const App = () => {

  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);



  const loggedIn = (token) => {

    if (!token) {
      return <LoginForm />
    }

    return (
      <Router>
        <Route path="/planner" element={<Planner />} />
        <Route path="/account" /> {/* create account page/component */}
      </Router>
    );
  }

  return (

    /* Remember to fix the flexing on both the footer and page container */
    <div className="auto grid h-screen min-h-[560px] w-screen place-items-center bg-light-grayscale-primary">
      <main className="my-8 p-3 place-items-center">
        {loggedIn(token)}
      </main>
      <footer className="auto grid bg-light-grayscale-secondary p-2 h-[50px] w-full self-end justify-center self-start content-center">
        <p>Made by Lerich Osay</p>
      </footer>
    </div>
  );
}

export default App;
