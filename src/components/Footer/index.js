import React, { Component } from "react";
import { ReactComponent as TwitterIcon } from "../../Assets/twitter.svg";
import { ReactComponent as LinkedinIcon } from "../../Assets/linkedin.svg";
import TelegramIcon from "@mui/icons-material/Telegram";
import GoogleIcon from "@mui/icons-material/Google";
import RedditIcon from "@mui/icons-material/Reddit";
import "./style.scss";

export class footer extends Component {
  render() {
    return (
      <footer className="wrapper1">
        <div className="container">
          <div className="">
            <ul>
              <li>
                <a href="mailto: muppal88@gmail.com" target="_blank">
                  <GoogleIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mayankuppal/"
                  target="_blank"
                >
                  <LinkedinIcon />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/iammayankuppal" target="_blank">
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a href="https://telegram.me/mayankuppal" target="_blank">
                  <TelegramIcon />
                </a>
              </li>
              <li>
                <a href="https://www.reddit.com/user/muppal88/" target="_blank">
                  <RedditIcon />
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
