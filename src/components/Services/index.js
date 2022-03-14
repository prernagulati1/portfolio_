import React, { Component } from "react";
import "./style.scss";
import { ReactComponent as Icon } from "../../Assets/icon.svg";
export class Service extends Component {
  render() {
    return (
      <div className="service" id="service">
        <div className="container">
          <div className="container_title">
            <h2>My Awesome Service</h2>
            <p>
              Yes, they are AWESOME! You gotta check it (Although It’s not free,
              unless you gift me a CAR!)
            </p>
          </div>
          <div className="services_gridContainer">
            <div className="grid1">
              <div className="service1">
                <div>{/* <Icon /> */}</div>
                <div>
                  <h3>UX Design</h3>
                  <p>
                    From start to end, I Research, Analyse and get the
                    experience what END USER Desires
                  </p>
                </div>
              </div>
            </div>
            <div className="grid1">
              <div className="service1">
                <div>{/* <Icon /> */}</div>
                <div>
                  <h3>Interaction Design</h3>
                  <p>
                    From Clicks to Sounds to anything which gets the user
                    engaging. I’ve got it all COVERED!
                  </p>
                </div>
              </div>
            </div>
            <div className="grid1">
              <div className="service1">
                <div>{/* <Icon /> */}</div>
                <div>
                  <h3>Visual Design</h3>
                  <p>
                    Visual Appearances! Ah, Leave it to me. The Designs are
                    going to be modern, minimalistic or WHAT YOU LIKE!
                  </p>
                </div>
              </div>
            </div>
            <div className="grid1">
              <div className="service1">
                <div>{/* <Icon /> */}</div>
                <div>
                  <h3>UX Research</h3>
                  <p>
                    I throw myself down among the tall grass by the stream as I
                    lie close to the earth.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid1">
              <div className="service1">
                <div>{/* <Icon /> */}</div>
                <div>
                  <h3>UI Design</h3>
                  <p>
                    I throw myself down among the tall grass by the stream as I
                    lie close to the earth.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid1">
              <div className="service1">
                <div>{/* <Icon /> */}</div>
                <div>
                  <h3>UX Research</h3>
                  <p>
                    I throw myself down among the tall grass by the stream as I
                    lie close to the earth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Service;
