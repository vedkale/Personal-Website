import React, { Component } from "react";
import objectDetect from "../images/tennis_ball (1).jpg";
import scrable from "../images/scrabble.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import pythonImg from "../images/python.svg";
import tensorImg from "../images/tensorflow.svg";
import kerasImg from "../images/keras.svg";
import javaImg from "../images/java.png";

const skill = {
  background: "#fff",
  color: "#000",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center"
};

export class Projects extends Component {
    componentDidMount() {
      AOS.refresh();
    }
  render() {
    return (
      <div id="projects">
        <div style={skill}>
          <div data-aos="fade-up" data-aos-duration="10000" className="hvrbox">
            <img className="hvrbox-layer_bottom" src={objectDetect} alt="objectImage"/>
            <div className="hvrbox-layer_top">
              <div className="hvrbox-text">Object Detection</div>
            </div>
          </div>
          <span data-aos="fade-right" data-aos-duration="10000">
            <ol>
              <li><img style={{maxWidth:"50%"}} src={pythonImg} alt='python' /></li>
              <li><img style={{maxWidth:"50%"}} src={kerasImg} alt='tensorflow'/></li>
              <li><img style={{maxWidth:"50%"}} src={tensorImg} alt='keras'/></li>
            </ol>
          </span>
        </div>

        <div style={skill}>
          <div data-aos="fade-up" data-aos-duration="10000" className="hvrbox">
            <img className="hvrbox-layer_bottom" src={scrable} alt="objectImage"/>
            <div className="hvrbox-layer_top">
              <div className="hvrbox-text">Smart Scrabble</div>
            </div>
          </div>
          <span data-aos="fade-right" data-aos-duration="10000">
            <ol>
              <li><img style={{maxWidth:"45%"}} src={javaImg} alt='java'/></li>
            </ol>
          </span>
        </div>
      </div>
    );
  }
}

export default Projects;
