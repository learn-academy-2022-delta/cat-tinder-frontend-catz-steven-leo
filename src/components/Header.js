import React, { Component } from 'react'

export class Header extends Component {
  render() {
    const mystyle = {
      color: "#FFD700",
      backgroundColor: "#6CB33F",
      padding: "10px",
      fontFamily: "Papyrus",
      fontWeight: "bold"
    }
    return (
      <>
        <h1 style={mystyle}>Welcome to the Jungle!</h1>
      </> 
    
    )
  }
}

export default Header