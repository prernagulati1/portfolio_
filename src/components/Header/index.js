import React from "react";
import Logo from "../../Assets/logo.png";
import { ReactComponent as Facebook } from "../../Assets/facebook.svg";
import { ReactComponent as Linkedin } from "../../Assets/linkedin.svg";
import { ReactComponent as Instagram } from "../../Assets/instagram.svg";
import { ReactComponent as Twitter } from "../../Assets/twitter.svg";
import { ReactComponent as DownloadIcon } from "../../Assets/download.svg";
import TelegramIcon from "@mui/icons-material/Telegram";
import GoogleIcon from "@mui/icons-material/Google";
import RedditIcon from "@mui/icons-material/Reddit";

import "./style.scss";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";
import CV from "../../Assets/resume.pdf";
class Header extends React.Component {
  state = {
    active: 1,
  };
  activeHandler = (index) => {
    // const { active } = this.state;
    this.setState({ active: index });
  };
  ScrollAbout = () => {
    var elmnt = document.getElementsById("service");
    elmnt.scrollIntoView();
  };

  componentDidUpdate = () => {
    window.addEventListener("scroll", this.isSticky);
    return () => {
      window.removeEventListener("scroll", this.isSticky);
    };
  };

  isSticky = (e) => {
    const header = document.querySelector(".header");
    const scrollTop = window.scrollY;
    scrollTop >= 100
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  render() {
    const { active } = this.state;
    return (
      <div className="header">
        <div className="header_left">
          <nav>
            {/* <div className="logo">
              <img src={Logo} />
            </div> */}
            <ul>
              <li
                className={active === 1 ? "active" : ""}
                onClick={() => this.activeHandler(1)}
              >
                <a href="/">Home</a>
              </li>
              <li
                className={active === 2 ? "active" : ""}
                onClick={() => this.activeHandler(2)}
              >
                <a onclick="smoothScroll(document.getElementById('about'))">
                  About
                </a>
              </li>
              <li
                className={active === 3 ? "active" : ""}
                onClick={() => this.activeHandler(3)}
              >
                <Link href="service" onClick={() => this.ScrollAbout()}>
                  {" "}
                  Service
                </Link>
              </li>
              <li
                className={active === 4 ? "active" : ""}
                onClick={() => this.activeHandler(4)}
              >
                <a href="project"> Projects</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header_right">
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
                <Linkedin />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/iammayankuppal" target="_blank">
                <Twitter />
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

          <a href={CV} download>
            <Button variant="outlined" size="medium" className="mr-5">
              {/* <DownloadIcon /> */}
              Download CV
            </Button>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
