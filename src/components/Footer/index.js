import React from "react";

function Footer() {
  return (
    <section>
      <footer className="container">
        <i
          className="fab fa-github-square fa-3x"
          style={{ paddingLeft: "25px" }}
        ></i>
        <i
          className="fab fa-linkedin fa-3x"
          style={{ paddingLeft: "25px" }}
        ></i>
        <span className="copyright">Ⓒ Rachel Solov 2021</span>
      </footer>
    </section>
  );
}

export default Footer;
