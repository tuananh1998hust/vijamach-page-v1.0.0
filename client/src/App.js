import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

// Pages
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
// Components
import AppNavbar from "./components/AppNavbar";
import Footer from "./components/Footer";
// Store
import store from "./store";
// CSS
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavbar />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/products" component={Products} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
