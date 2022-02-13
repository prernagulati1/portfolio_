import React from "react";
import Logo from "../../Assets/logo.png";
import { ReactComponent as Facebook } from "../../Assets/facebook.svg";
import { ReactComponent as Linkedin } from "../../Assets/linkedin.svg";
import { ReactComponent as Instagram } from "../../Assets/instagram.svg";
import { ReactComponent as Twitter } from "../../Assets/twitter.svg";
import { ReactComponent as DownloadIcon } from "../../Assets/download.svg";
import "./style.scss";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";
class Header extends React.Component {
  state = {
    active: 1,
  };
  activeHandler = (index) => {
    // const { active } = this.state;
    this.setState({ active: index });
  };
  render() {
    const { active } = this.state;
    return (
      <div className="header">
        <div className="header_left">
          <nav>
            {/* <div>
              <img src={Logo} />
            </div> */}
            <ul>
              <li
                className={active === 1 ? "active" : ""}
                onClick={() => this.activeHandler(1)}
              >
                <a href="#">Home</a>
              </li>
              <li
                className={active === 2 ? "active" : ""}
                onClick={() => this.activeHandler(2)}
              >
                <a href="#">About</a>
              </li>
              <li
                className={active === 3 ? "active" : ""}
                onClick={() => this.activeHandler(3)}
              >
                <a href="#"> Service</a>
              </li>
              <li
                className={active === 4 ? "active" : ""}
                onClick={() => this.activeHandler(4)}
              >
                <a href="#"> Projects</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header_right">
          <ul>
            <li>
              <Facebook />
            </li>
            <li>
              <Linkedin />
            </li>
            <li>
              <Instagram />
            </li>
            <li>
              <Twitter />
            </li>
          </ul>

          <a href="pdf.pdf" target="_blank">
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
