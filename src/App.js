import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown, faCircle, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import express from 'express';
// import bodyParser from 'body-parser';
// import nodemailer from 'nodemailer';
// import cors from 'cors';
library.add(fab, faArrowDown, faCircle, faPaperPlane);

class App extends Component {

  constructor(props) {
    super(props);
    this.main = React.createRef();
  }

  handleScroll = e => {
    e.preventDefault();
    const main = this.main.current;
    window.scrollTo({
      top: main.offsetTop,
      left: 0,
      behavior: "instant"
    });
  };
  
  componentDidMount() 
    {
        AOS.init();
        //AOS.refresh()
    }

  render() {
    return (
      <div className="App">
        <Navigation />
        <LandingPage />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
