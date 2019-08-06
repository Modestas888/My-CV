import React from "react";
import Title from "../Title";
// import pictureOfMe from "../../../image/person.jpg";
// import blueStroke from "../../../image";
import "./index.scss";

function Header() {
  return (
    <header className="Header">
      <div className="Header--image">
        {/* <img src={pictureOfMe} alt="My headshot" /> */}
      </div>
      <div className="Header--title">
        <Title level="1">Modestas</Title>
        <Title level="3" weightClass="weigfont-weight-400">
          Wizard of Oz
        </Title>
      </div>
      {/* <img src={blueStroke} alt="My headshot" className="Header--decoration" /> */}
    </header>
  );
}
export default Header;
