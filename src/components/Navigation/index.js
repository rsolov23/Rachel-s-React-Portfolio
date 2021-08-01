import React from "react";

function Navigation(props) {
  return (
    <section>
      <header>
        <div className="links">
          <a className="links" onClick={props.changeAbout}>
            About Me
          </a>
          <a className="links" onClick={props.changePort}>
            Portfolio
          </a>
          <a className="links" href="#contact-form">
            Contact
          </a>
          <a className="links" href="#resume">
            Resume
          </a>
        </div>
      </header>
    </section>
  );
}

export default Navigation;
