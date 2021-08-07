import React, { useState } from "react";
import "./App.css";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Projects from "./components/Pages/Portfolio";
import ContactForm from "./components/Pages/Contact";
import About from "./components/Pages/About";
import Resume from "./components/Pages/Resume";

function App() {
  const [currentPage, handlePageChange] = useState("About");
  const renderPage = () => {
    switch (currentPage) {
      case "Contact":
        return <ContactForm />;
      case "Portfolio":
        return <Projects />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };
  console.log(renderPage);
  return (
    <div>
      <Header />
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <div>{renderPage()}</div>
      <Footer />
    </div>
  );
}
export default App;
