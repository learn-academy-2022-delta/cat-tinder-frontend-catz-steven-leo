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

      <div className="page-container">
        <div className="content-wrap">
          <div className="main-footer">
            <div className="container">
              <div className="row">
                {/* column1 */}
                <div className="col">
                  <h4>HeadQuarters</h4>
                  <ul className="list-unstyled">
                    <li>1-800-CAT-EXOTIC</li>
                    <li>453 Purr Ave</li>
                    <li>San Diego, CA</li>
                  </ul>
                </div>
                {/* column2 */}
                <div className="col">
                  <h4>More Info</h4>
                  <ul className="list-unstyled">
                    <li>Testimonials</li>
                    <li>FAQS</li>
                    <li>Careers</li>
                  </ul>
                </div>
                
              </div>
            </div>
            <hr />
              <div className="row">
                <p className="col-sm">
                  &copy;{new Date().getFullYear()} Jungle Inc | All Rights Reserved | Created by Leo & Steven
                </p>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer