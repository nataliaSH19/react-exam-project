import React from "react";
import TripSearchPage from "./components/TripSearchPage";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Route } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Route exact path="/" component={HomePage} />
      <Route path="/tripSearch" component={TripSearchPage} />
    </div>
  );
}

export default App;
