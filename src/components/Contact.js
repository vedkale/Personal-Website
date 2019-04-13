import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Contact extends Component {
  render() {
    return (
      <div id='contact'>
        <div className="container-contact2">
          <div className="wrap-contact2">
            <form className="contact2-form validate-form">
              <span className="contact2-form-title">Contact Me</span>

              <div className="wrap-input2 validate-input" data-validate="Name is required" >
                <input className="input2" type="text" name="name" />
                <span className="focus-input2" data-placeholder="NAME" />
              </div>

              <div className="wrap-input2 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input className="input2" type="text" name="email" />
                <span className="focus-input2" data-placeholder="EMAIL" />
              </div>

              <div className="wrap-input2 validate-input" data-validate="Message is required">
                <textarea className="input2" name="message" />
                <span className="focus-input2" data-placeholder="MESSAGE" />
              </div>

              <div className="container-contact2-form-btn">
                <div className="wrap-contact2-form-btn">
                  <div className="contact2-form-bgbtn" />
                  <button className="contact2-form-btn"><FontAwesomeIcon icon={'paper-plane'} size='2x' /></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
