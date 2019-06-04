import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import axios from "axios";
import "aos/dist/aos.css"; // You can also use <link> for styles

export class Contact extends Component {
  componentDidMount() {
    AOS.refresh();
  }

  state = {
    name: "",
    message: "",
    email: "",
    sent: false,
    buttonText: <FontAwesomeIcon icon={"paper-plane"} size="2x" />
  };

  formSubmit = e => {
    e.preventDefault();
    
    this.setState({
      buttonText: <FontAwesomeIcon icon={"spinner"} spin size="2x" />
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };
  
    axios
      .post("https://nodejs-express.vedkale.now.sh/api/post", data)
      .then(res => {
        this.setState({ sent: true }, this.resetForm());
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  };

  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      buttonText: <FontAwesomeIcon icon={"check"} size="2x" />
    });
  };

  render() {
    return (
      <div data-aos="fade-up-right" className="contact" id="contact">
        <div className="container-contact">
          <div className="wrap-contact">
            <form
              onSubmit={ (e) => this.formSubmit(e)}
              className="contact-form validate-form"
            >
              <span className="contact-form-title">Contact Me</span>

              <div
                className="wrap-input validate-input"
                // data-validate="Name is required"
              >
                <input
                  className="input"
                  type="text"
                  name="name"
                  value={this.state.name}
                  required
                  onChange={e => this.setState({ name: e.target.value })}
                />
                <span className="focus-input" data-placeholder="NAME" />
              </div>

              <div
                className="wrap-input validate-input"
                // data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  className="input"
                  type="text"
                  name="email"
                  onChange={e => this.setState({ email: e.target.value })}
                  required
                  value={this.state.email}
                />
                <span className="focus-input" data-placeholder="EMAIL" />
              </div>

              <div
                className="wrap-input validate-input"
                // data-validate="Message is required"
              >
                <textarea
                  className="input"
                  name="message"
                  type="text"
                  onChange={e => this.setState({ message: e.target.value })}
                  value={this.state.message}
                  required
                />
                <span className="focus-input" data-placeholder="MESSAGE" />
              </div>

              <div className="container-contact-form-btn">
                <div className="wrap-contact-form-btn">
                  <div className="contact-form-bgbtn" />
                  <button type="submit" className="contact-form-btn">
                    { this.state.buttonText }
                  </button>
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
