import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    const mystyle = {
      color: "#FFD700",
      backgroundColor: "#6CB33F",
      fontFamily: "Papyrus",
      fontWeight: "bold",
      fontSize: "30px", 
    }
    return (
      <>
        <h1 style={mystyle}>Footer!</h1>
      </> 
    )
  }
}

export default Footer