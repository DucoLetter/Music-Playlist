import React from "react";
import "./App.css";
import SongOverview from "./Components/SongOverview";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul id="navBar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
            <h1>Winc Lil' Liedjeslijst</h1>
            <SongOverview />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return (
    <div>
      <h2>About me</h2>
      <p>een kort verhaaltje over jezelf en dit project (max 10 zinnen).</p>
    </div>
  );
}

export default App;
