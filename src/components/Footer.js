import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterStyle = {
  padding: "10px",
  backgroundColor: "#212121",
  color: "#ccc"
};

 const linkStyle = {
    padding : '20px 20px'
 }

export class Footer extends Component {
  render() {
    return (
      <footer style={FooterStyle}>
        <div>            
          <a
            href="https://github.com/vedkale/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            <FontAwesomeIcon icon={["fab", "github"]} size="3x" />
          </a>
          <a
            href="https://www.linkedin.com/in/vedkale/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" />
          </a>
          <a
            href="https://www.kaggle.com/vedkale/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            <FontAwesomeIcon icon={["fab", "kaggle"]} size="3x" />
          </a>
        </div>
        <div>
          <p style={{paddingTop:'20px'}}> Ved Kale &copy; 2019 </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
