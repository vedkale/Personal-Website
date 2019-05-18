import React, { Component } from "react";
import resume from "./assets/Resume.pdf";
import { toElement as scrollToElement } from "../utils/scroll";

export class Navigation extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      isSticky: false,
      tranparency: 'transparent',
      burger: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    var clientWidth = function () {  return Math.max(window.innerWidth, document.documentElement.clientWidth);};
    // var clientHeight = function () {  return Math.max(window.innerHeight, document.documentElement.clientHeight);};
    
    this.setState({burger: clientWidth < 435 ? true : false})
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
      
    this.setState({tranparency:document.querySelector('.landingPage').getBoundingClientRect().bottom > 0 ? 'transparent' : '#212121'});
    //if (window.pageYOffset > document.querySelector('#nav').offsetTop && document.querySelector('.landingPage').getBoundingClientRect().bottom < 0) {
        // first part checks if scrolled down to make navbar touch the top(makes it stick) and second part check if bottom of hero page is in view(not stick)
      //if (window.pageYOffset > document.querySelector('#nav').offsetTop) {
      if (window.pageYOffset > document.querySelector('#nav').offsetTop) {    
      this.setState({
        isSticky: true,
      });
    } else {
      this.setState({
        isSticky: false,
      });
    }
  }

  scrollToPage(pageSelector) {
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    const stickyClass = this.state.isSticky ? "navbarSticky" : "navbar";
    return (
      <nav id='nav' className={stickyClass} style={{background: this.state.tranparency, transition:'all 0.3s ease-in', pointerEvents:'auto'}}>
        <ul>
          <li><a href="/"> Home </a> </li>
          <li><a href="#skills"> Skills </a></li>
          <li><a href="#projects"> Projects </a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href={resume} target="_blank" rel="noopener noreferrer">Resume</a></li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
