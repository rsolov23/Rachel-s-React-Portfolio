import React from "react";
import About from "../About";
// import ContactForm from "../Contact";
// import ContactForm from "../Contact";
import Projects from "../Projects";
// import Resume from "../Resume";

const Section = (props) => {
  const section = props.section;
  if (section === "About") {
    return <About />;
  } else if (section === "Portfolio") {
    return <Projects />;
  }
};

export default Section;
