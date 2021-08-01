import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import ContactForm from "./components/Contact";
import About from "./components/About";
import Resume from "./components/Resume";
import Section from "./components/Section";

function App() {
  //useState in the app that changes depending on whatever gets clicked on from the nav bar
  //you can drill down a function to the navbar to handle the on clicks depending on which one
  const [pageLoad, setPageLoad] = useState("About");

  const changePage = (e) => {
    e.preventDefault();
    setPageLoad("About");
  };
  const changePagePort = (e) => {
    e.preventDefault();
    setPageLoad("Portfolio");
  };
  const changePageContact = (e) => {
    e.preventDefault();
    setPageLoad("Contact");
  };
  const changePageResume = (e) => {
    e.preventDefault();
    setPageLoad("Resume");
  };

  return (
    <main>
      <Header></Header>
      <Navigation changeAbout={changePage} changePort={changePagePort} />

      <Section section={pageLoad} />

      <About></About>
      <Projects></Projects>
      <ContactForm></ContactForm>
      <Resume></Resume>
      <Footer></Footer>
    </main>
  );
}

export default App;
