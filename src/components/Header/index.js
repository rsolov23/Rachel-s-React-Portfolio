import React from "react";

import backgroundVideo from "./video.mp4";

function Header() {
  return (
    <video autoPlay loop muted id="video">
      <source src={backgroundVideo} type="video/mp4" />
    </video>
  );
}

export default Header;
