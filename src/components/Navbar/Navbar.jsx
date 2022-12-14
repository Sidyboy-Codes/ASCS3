import React, { useState } from "react";
import "./Navbar.css";

import Hamburger from "hamburger-react";

import logo from "../../assets/ASCS-logo.svg";

import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import TicketBtn from "../TicketBtn";

const Menu = (props) => {
  return (
    <ul className="links">
      <li onClick={() => props.setOpen(false)}>
        <a>About</a>
      </li>
      <li onClick={() => props.setOpen(false)}>
        <a>Charities</a>
      </li>
      <li onClick={() => props.setOpen(false)}>
        <a>Teams</a>
      </li>
      <li onClick={() => props.setOpen(false)}>
        <a>Articles</a>
      </li>
      <li onClick={() => props.setOpen(false)}>
        <a>Contact</a>
      </li>
      <li onClick={() => props.setOpen(false)}>
        <a>Shop</a>
      </li>
    </ul>
  );
};

const Socials = (props) => {
  return (
    <ul className="social__links">
      <li>
        <a onClick={() => props.setOpen(false)}>
          <BsFacebook />
        </a>
      </li>
      <li>
        <a onClick={() => props.setOpen(false)}>
          <BsInstagram />
        </a>
      </li>
      <li>
        <a onClick={() => props.setOpen(false)}>
          <BsTwitter />
        </a>
      </li>
    </ul>
  );
};

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav>
      <img src={logo} alt="all star charity shootout logo" />
      <div className="navbar__smScreen">
        <div className="navbar__smScreen__toggleBtn">
          <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
        </div>
        {isOpen && (
          <div className="navbar__smScreen__menu">
            <Menu setOpen={setOpen} />
            <TicketBtn />
            <Socials setOpen={setOpen} />
          </div>
        )}
      </div>

      <div className="navbar__lgScreen">
        <div className="navbar__lgScreen__menu">
          <Menu />
          <TicketBtn />
        </div>
        <Socials />
      </div>
    </nav>
  );
};

export default Navbar;
