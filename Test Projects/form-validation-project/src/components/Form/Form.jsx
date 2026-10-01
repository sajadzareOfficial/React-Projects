import React from "react";
import "./Form.css";

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstNameData: "",
      lastNameData: "",
      emailData: "",

      submitted: false,

      allValid: false,
    };
  }

  render() {
    return (
      <div className="form-container">
        <form
          className="register-form"
          autoComplete="off"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          {/* Uncomment the next line to show the success message */}

          {this.state.allValid && (
            <div className="success-message">
              Success! Thank you for registering
            </div>
          )}
          <input
            onChange={(event) =>
              this.setState({ firstNameData: event.target.value })
            }
            id="first-name"
            className="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
          />
          {/* Uncomment the next line to show the error message */}
          {this.state.firstNameData == "" && (
            <span id="first-name-error">Please enter a first name</span>
          )}
          <input
            onChange={(event) =>
              this.setState({ lastNameData: event.target.value })
            }
            id="last-name"
            className="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
          />
          {/* Uncomment the next line to show the error message */}
          {this.state.lastNameData == "" && (
            <span id="last-name-error">Please enter a last name</span>
          )}
          <input
            onChange={(event) =>
              this.setState({ emailData: event.target.value })
            }
            id="email"
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
          />
          {/* Uncomment the next line to show the error message */}
          {this.state.emailData == "" && (
            <span id="email-error">Please enter an email address</span>
          )}

          <button
            className="form-field"
            type="submit"
            onClick={(event) => {
              if (
                this.state.firstNameData != "" &&
                this.state.lastNameData != "" &&
                this.state.emailData != ""
              ) {
                this.setState( {allValid : true})
                this.setState( {submitted : true})
              }
              
            }}
          >
            Register
          </button>
        </form>
      </div>
    );
  }
}
