import React, { Component } from "react";
import "./style.scss";
export class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="content_container">
          <p>WELCOME TO MY WORLD</p>
          <h1>
            Hi, I'm Mayank Uppal<br></br>
            <span>UI/UX Designer.</span>
          </h1>
          <h2>based in India</h2>
        </div>
      </div>
    );
  }
}

export default Banner;
