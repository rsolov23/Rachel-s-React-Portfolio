import React from "react";

function Footer() {
  return (
    <section>
      <footer className="container">
        <div className="icons">
          <a href="https://github.com/rsolov23">
            {" "}
            <i
              className="fab fa-github-square fa-3x"
              style={{ paddingLeft: "25px", color: "black" }}
            ></i>
          </a>
          <a href="https://www.linkedin.com/in/rachel-solov-80bb3a174">
            <i
              className="fab fa-linkedin fa-3x"
              style={{ paddingLeft: "25px", color: "black" }}
            ></i>
          </a>
        </div>
        <span className="copyright">Ⓒ Rachel Solov 2021</span>
      </footer>
    </section>
  );
}

export default Footer;
