import React, { Component } from "react";
import AppNavbar from "./components/layout/AppNavbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppNavbar />
          <div className="container">
            <h1>Client Panel</h1>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
