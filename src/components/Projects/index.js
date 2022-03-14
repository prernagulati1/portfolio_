import { Button } from "@mui/material";
import React, { Component } from "react";
import "./style.scss";
import ModalImage from "react-modal-image-responsive";
import bg1 from "../../Assets/01.png";
import bg2 from "../../Assets/02.png";
import bg3 from "../../Assets/03.png";
import bg4 from "../../Assets/04.png";
import bg5 from "../../Assets/05.png";
import bg6 from "../../Assets/06.jpg";

export class Project extends Component {
  state = {
    toggle: false,
    projects: [bg1, bg2, bg3, bg4, bg5, bg6],
  };
  toggleHandler = () => {
    const { toggle } = this.state;
    this.setState({ toggle: !toggle });
    console.log("toggle");
  };
  render() {
    const { toggle, projects } = this.state;
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
            {/* {projects.map(item=>{
               <ModalImage
               className="modal"
               small={item}
               large={bg1}
               alt="Hello World!"
             />
            })} */}
            <ModalImage
              className="modal"
              small={bg1}
              large={bg1}
              alt="Hello World!"
            />
            <ModalImage
              className="modal"
              small={bg2}
              large={bg2}
              alt="Hello World!"
            />
            <ModalImage
              className="modal"
              small={bg3}
              large={bg3}
              alt="Hello World!"
            />
            <ModalImage
              className="modal"
              small={bg4}
              large={bg4}
              alt="Hello World!"
            />
            <ModalImage
              className="modal"
              small={bg5}
              large={bg5}
              alt="Hello World!"
            />

            <ModalImage
              className="modal"
              small={bg5}
              large={bg5}
              alt="Hello World!"
            />
          </div>

          <div
            className={
              toggle ? "grid_container pt_20" : "grid_container hidden"
            }
          >
            <ModalImage
              className="modal"
              small={bg5}
              large={bg5}
              alt="Hello World!"
            />{" "}
            <ModalImage
              className="modal"
              small={bg5}
              large={bg5}
              alt="Hello World!"
            />{" "}
            <ModalImage
              className="modal"
              small={bg5}
              large={bg5}
              alt="Hello World!"
            />
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
