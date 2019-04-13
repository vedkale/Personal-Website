import React, { Component } from "react";
import backgroundImg from "../images/WarmPoly.png";
import chevron from "../images/chevron.svg";

const landingPage = {
  backgroundImage: `url(${backgroundImg})`,
//   position: "relative",
  opacity: "1",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: window.innerHeight,
  display: "flex",
  flexWrap: 'wrap',
  flexDirection: 'column',
  height: "100%",
  justifyContent: "center" /*centers items on the line (the x-axis by default)*/,
  alignItems: "center" /*centers items on the cross-axis (y by default)*/
};

const landingPageText = {
  font: "Arial",
  fontSize: "50px",
  color: "#fff",
  lineHeight: '1.75em',
  position: 'relative'
};

export class LandingPage extends Component {
  render() {
    return (
      <div id='home' style={landingPage} className="landingPage">
        <div style={landingPageText} className='landingPageText'>
            <p> Hi, I'm Ved Kale </p>
            <p> Software Engineer | Web Developer </p>
            <p> Aspiring Data Scientist </p>
          </div>
          <a href='/'><img src={chevron} className="arrow" alt="logo" /></a>
      </div>
    );
  }
}

export default LandingPage;
