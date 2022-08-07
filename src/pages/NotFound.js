import { Component } from "react";
import lions from "../assets/lions.jpeg";

class NotFound extends Component {
  render() {
    const backgroundImageURL = "https://i.imgur.com/weOsraX.jpg";
    const containerStyle = {
      backgroundImage: `url(${backgroundImageURL})`,
      width: "1500px",
      height: "1500px",
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
    return (
      <div style={containerStyle}>
        <h1 style={{ color: "gold", textAlign: "center", padding: "50px" }}>
          Find your way back to Jungle...
        </h1>
      </div>
    );
  }
}

export default NotFound;
