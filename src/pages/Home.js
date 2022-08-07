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
          {/* <h3 style={{textAlign: "center", color:"gold", backgroundColor:"#6CB33F", fontWeight:"bold"}}>Welcome to Jungle</h3> */}
        </div>
      </>
    );
  }
}

export default Home;
