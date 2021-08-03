import React from "react";

function Navigation(props) {
  const tabs = ["About", "Portfolio", "Contact", "Resume"];
  return (
    <nav>
      <ul className="nav nav-tabs links">
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
    </nav>
  );
}

export default Navigation;
