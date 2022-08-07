import React, { Component } from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import catLogo from "../assets/cat-logo.jpeg";

class Header extends Component {
  render() {
    const mystyle = {
      color: "#FFD700",
      backgroundColor: "#6CB33F",
      padding: "10px",
      fontFamily: "Papyrus",
      fontWeight: "bold",
    };
    return (
      <header>
        <Nav className="header-nav-a">
          <NavLink to="/">
            <img src={catLogo} alt="logo for Cat Tinder" className="cat-logo" />
          </NavLink>
          <NavItem>
            <NavLink to="/catindex" className="nav-link">
              View Purrtnerships
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/catnew" className="nav-link">
              Join Now!
            </NavLink>
          </NavItem>
          <NavItem>
            <a
              target="blank"
              href="https://www.safewise.com/blog/how-to-date-online-safely/"
              className="nav-link"
            >
              Safe Dating
            </a>
          </NavItem>
        </Nav>
      </header>
    );
  }
}

export default Header;
