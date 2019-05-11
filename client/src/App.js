import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
// Components
import AppNavbar from "./components/AppNavbar";
import Footer from "./components/Footer";
// CSS
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppNavbar />
          <Route exact path="/" component={HomePage} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
