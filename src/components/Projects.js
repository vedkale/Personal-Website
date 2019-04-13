import React, { Component } from "react";
import objectDetect from "../images/tennis_ball (1).jpg";
import scrable from "../images/scrabble.png";


export class Projects extends Component {
  render() {
    return (
      <div id="projects">

        <div className="hvrbox">
          <img className="hvrbox-layer_bottom" src={objectDetect} alt="objectImage" />
          <div className="hvrbox-layer_top" >
            <div className='hvrbox-text'>Object Detection</div>
          </div>
        </div>

        <div className="hvrbox">
          <img className="hvrbox-layer_bottom" src={scrable} alt="objectImage" />
          <div className="hvrbox-layer_top" >
            <div className='hvrbox-text'>Smart Scrabble</div>
          </div>
        </div>

      </div>
    );
  }
}

export default Projects;
