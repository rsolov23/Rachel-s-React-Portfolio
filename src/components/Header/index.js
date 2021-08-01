import React, { useState } from "react";
import Navigation from "../Navigation";
import backgroundVideo from "./video.mp4";

function Header() {
  const [currentPage, handlePageChange] = useState("About");
  return (
    <div className="jumbotron">
      <div className="jumbotron-text">
        <video autoPlay loop muted id="video">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="overlay">
          <h1>Rachel Solov</h1>
          <p>Full-Stack Web Developer in Austin, TX</p>

          <div id="down-arrow">
            <span>
              <a href="#about">
                <i
                  style={{ color: "black" }}
                  className="fa fa-chevron-down"
                  id="fa"
                  aria-hidden="true"
                ></i>
              </a>
              <Navigation
                currentPage={currentPage}
                handlePageChange={handlePageChange}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
