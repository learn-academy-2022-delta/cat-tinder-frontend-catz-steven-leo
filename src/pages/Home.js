import { Component } from "react";

class Home extends Component {
  render() {
    return (
      <>
        <div className="main-container">
          <h3
            style={{
              textAlign: "center",
              color: "gold",
              fontWeight: "bold",
              fontSize: "70px",
            }}
          >
            Welcome to Jungle
          </h3>
          <h4
            style={{
              textAlign: "center",
              color: "#03C04A",
              fontWeight: "bold",
              fontSize: "31px",
              fontFamily: "open sans seriff",
            }}
          >
            #1 Fastest Growing Dating App For Exotic Felines!
          </h4>
        </div>
      </>
    );
  }
}

export default Home;
