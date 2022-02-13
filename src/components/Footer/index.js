import React, { Component } from "react";
import { ReactComponent as TwitterIcon } from "../../Assets/twitter.svg";
import { ReactComponent as LinkedinIcon } from "../../Assets/linkedin.svg";
import "./style.scss";

export class footer extends Component {
  render() {
    return (
      <footer className="wrapper1">
        <div className="container">
          <div className="">
            <ul>
              <li>
                <a>
                  <LinkedinIcon />
                </a>
              </li>
              <li>
                <a>
                  <TwitterIcon />
                </a>
              </li>
            </ul>
          </div>
          <div className="tag">
            <p>
              Designed by Ken Adams <br></br> Developed By Regina Phalange
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default footer;
