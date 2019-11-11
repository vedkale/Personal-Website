import React, { Component } from "react";
import backgroundImg from "../images/WarmPoly.png";
import chevron from "../images/chevron.svg";

const landingPage = {
  backgroundImage: `url(${backgroundImg})`,
  position: "relative",
  opacity: "1",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: window.innerHeight,
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
  height: "100%",
  justifyContent:
    "center" /*centers items on the line (the x-axis by default)*/,
  alignItems: "center" /*centers items on the cross-axis (y by default)*/
};
export class LandingPage extends Component {
  componentDidMount() {
    // var clientWidth = function() {
    //   return Math.max(window.innerWidth, document.documentElement.clientWidth);
    // };
    // var clientHeight = function () {  return Math.max(window.innerHeight, document.documentElement.clientHeight);};
  }

  render() {
    return (
      <div id="home" style={landingPage} className="landingPage">
        <div className="landingPageText">
          <p style={{ whiteSpace: "nowrap" }}> Hi, I'm Ved Kale </p>
          <p style={{ whiteSpace: "nowrap" }}> Software Engineer </p>
          <p style={{ whiteSpace: "nowrap" }}> Web Developer </p>
          <p style={{ whiteSpace: "nowrap" }}> Data Scientist </p>
        </div>
        <div style={{ position: "absolute", bottom: "5px" }}>
          {/* <p style={{fontSize:'32px'}}> Read More </p> */}
          <a id="scroll" href="#skills">
            <img
              className="arrow"
              style={{ minHeight: "5vh", minWidth: "5vh" }}
              src={chevron}
              alt="logo"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default LandingPage;
