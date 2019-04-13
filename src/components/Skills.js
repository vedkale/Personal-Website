import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Break from "./Break";
// import Skill from "./Skill";

export class Skills extends Component {
  render() {
    return (
      <div id="skills" className="skills">
        {/* <Skill /> */}
        <FontAwesomeIcon className="skill" icon={["fab", "python"]} size="8x" />
        <FontAwesomeIcon className="skill" icon={["fab", "java"]} size="8x" />
        <FontAwesomeIcon className="skill" icon={["fab", "react"]} size="8x" />
        <FontAwesomeIcon className="skill" icon={["fab", "git"]} size="8x" />
        <Break />
        <FontAwesomeIcon className="skill" icon={["fab", "js"]} size="8x" />
        <FontAwesomeIcon className="skill" icon={["fab", "html5"]} size="8x" />
        <FontAwesomeIcon className="skill" icon={["fab", "css3"]} size="8x" />
        <FontAwesomeIcon className="skill" icon={["fab", "r-project"]} size="8x" />
      </div>
    );
  }
}

export default Skills;
