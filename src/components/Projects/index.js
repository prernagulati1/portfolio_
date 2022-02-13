import { Button } from "@mui/material";
import React, { Component } from "react";
import "./style.scss";
export class Project extends Component {
  state = {
    toggle: false,
  };
  toggleHandler = () => {
    const { toggle } = this.state;
    this.setState({ toggle: !toggle });
    console.log("toggle");
  };
  render() {
    const { toggle } = this.state;
    return (
      <div className={toggle ? "wrapper1 project height" : "wrapper1 project"}>
        <div className="container">
          <div className="title">
            <h2 className="heading">My Latest Project</h2>
            <p className="tag">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
          </div>
          <div className="grid_container">
            <div className="portfolio"></div>
            <div className="portfolio"></div>
            <div className="portfolio"></div>
            <div className="portfolio"></div>
            <div className="portfolio"></div>
            <div className="portfolio"></div>
          </div>

          <div
            className={
              toggle ? "grid_container pt_20" : "grid_container hidden"
            }
          >
            <div className="portfolio"></div>
            <div className="portfolio"></div>
            <div className="portfolio"></div>
          </div>
          <Button onClick={this.toggleHandler}>
            {toggle ? "VIEW LESS" : "VIEW MORE"}
          </Button>
        </div>
      </div>
    );
  }
}

export default Project;
