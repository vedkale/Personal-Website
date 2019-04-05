import React, { Component } from "react";
// import { isScrolledIntoView, resizeToCover, scrolledOverPercent } from "../utils/landingPageScript";
import backgroundImg from "../images/WarmPoly.png";

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
  height: "100%",
  justifyContent: "center" /*centers items on the line (the x-axis by default)*/,
  alignItems: "center" /*centers items on the cross-axis (y by default)*/
};

const landingPageText = {
  font: "Arial",
  fontSize: "50px",
  lineHeight: "50pt",
  color: "#fff",
//   position: 'relative'
};

export class LandingPage extends Component {
  render() {
    return (
      <div style={landingPage} className="landingPage">
        <div style={landingPageText} className='landingPageText'>
            <p> Hi, I'm Ved Kale </p>
            <p> Software Engineer and Data Scientist </p>
            <p style={{flexGrow: '1'}}></p>
          </div>
      </div>
    );
  }
}

export default LandingPage;
