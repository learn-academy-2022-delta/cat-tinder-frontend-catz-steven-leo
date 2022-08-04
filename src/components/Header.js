import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <header>
        <Nav className="header-nav">
          <NavItem>
          </NavItem>
            <NavItem>
              <NavLink to="/catindex" className="nav-link">View Exotic Cats</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/catnew" className="nav-link">Add</NavLink>
            </NavItem>
            <NavItem>
              <a target="blank" href="https://pethelpful.com/exotic-pets/small-exotic-cats" className="nav-link">
                Additional Info
              </a>
            </NavItem>
        </Nav>
      </header>
    )
  }
}

export default Header