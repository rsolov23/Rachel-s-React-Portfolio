import React, { useState } from "react";

import { validateEmail } from "../../utils/helper";
import backgroundVideo from "../Pages/video.mp4";

function ContactForm() {
  <video autoPlay loop muted id="video">
    <source src={backgroundVideo} type="video/mp4" />
  </video>;
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <section className="contact">
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form" className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" placeholder="Name">
            Name:
          </label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" placeholder="Email Address">
            Email:
          </label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message" placeholder="Message">
            Message:
          </label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">
          <div className="box-3">
            <div className="btn btn-three">Submit</div>
          </div>
        </button>
      </form>
    </section>
  );
}

export default ContactForm;