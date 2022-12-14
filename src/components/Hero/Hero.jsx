import React from "react";
import "./Hero.css";

import khpLogo from "../../assets/Kids-Help-logo.svg";
import mawLogo from "../../assets/MAW_Canada_RGB.png";

import { GrCalendar, GrMapLocation } from "react-icons/gr";
import TicketBtn from "../TicketBtn";

const Hero = () => {
  return (
    <header id="hero" className="container">
      <div className="hero__title">
        <h2>All Star Charity Shootout</h2>
        <h3>20 of Canada's Top Stars Battle in</h3>
        <h1>Clash of the Charities</h1>
      </div>

      <div className="hero__charity">
        <div className="hero__charity__logo">
          <img src={mawLogo} alt="make a wish logo" />
        </div>
        <span>V/S</span>
        <div className="hero__charity__logo">
          <img src={khpLogo} alt="kid's help phone" />
        </div>
      </div>

      <div className="hero__eventInfo">
        <div>
          <GrMapLocation />
          <span>Humber College, Toronto</span>
        </div>

        <div>
          <GrCalendar />
          <span>July 3, 2023</span>
        </div>

        <TicketBtn/>
      </div>
    </header>
  );
};

export default Hero;
