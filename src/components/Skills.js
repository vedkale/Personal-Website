import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Break from "./Break";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// import Skill from "./Skill";

export class Skills extends Component {
  componentDidMount() {
    AOS.refresh();
  }

  render() {
    return (
      <div data-aos="fade-up" data-aos-duration="10000" id="skills" className="skills">
        {/* <Skill /> */}
        <FontAwesomeIcon className="skill" icon={["fab", "python"]} size="8x" />
        <FontAwesomeIcon className="skill" icon={["fab", "java"]} size="8x" />
        <FontAwesomeIcon className="skill" icon={["fab", "react"]} size="8x" />
        <FontAwesomeIcon className="skill" icon={["fab", "git"]} size="8x" />
        {/* <Break /> */}
      </div>
    );
  }
}

export default Skills;
