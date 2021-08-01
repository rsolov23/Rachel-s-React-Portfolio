import React from "react";

function Navigation(props) {
  const tabs = ["About", "Portfolio", "Contact", "Resume"];
  return (
    <ul className="nav nav-tabs">
      {tabs.map((tab) => (
        <li className="nav-item" key={tab}>
          <a
            href={"#" + tab}
            
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? "nav-link active" : "nav-link"
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
// <section>
//   <header>
//     <div className="links">
//       <a className="links" onClick={props.changeAbout}>
//         About Me
//       </a>
//       <a className="links" onClick={props.changePort}>
//         Portfolio
//       </a>
//       <a className="links" href="#contact-form">
//         Contact
//       </a>
//       <a className="links" href="#resume">
//         Resume
//       </a>
//     </div>
//   </header>
// </section>
