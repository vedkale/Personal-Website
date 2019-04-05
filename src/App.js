import React, { Component } from "react";
import logo from "./logo.svg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
library.add(fab);

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
        <Navigation />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Footer />
      </div>
    );
  }
}

export default App;
