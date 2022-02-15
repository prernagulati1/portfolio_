import React, { Component } from "react";
import "./style.scss";
import AboutImg from "../../Assets/about.JPG";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { mainSkills, awards, experience, education } from "./constants";

export class About extends Component {
  state = {
    tabs: ["Main Skills", "Awards", "Experience", "Education & Certification"],
    selected: "Main Skills",
    constantData: [],
  };
  componentDidMount() {
    this.loadHandler();
  }
  loadHandler = (selected) => {
    switch (selected) {
      case "Main Skills":
        this.setState({ constantData: mainSkills });
        break;
      case "Awards":
        this.setState({ constantData: awards });
        break;
      case "Experience":
        this.setState({ constantData: experience });
        break;
      case "Education & Certification":
        this.setState({ constantData: education });
        break;
    }
  };

  tabClicked = (selectedTab) => {
    const { selected } = this.state;
    this.setState({
      selected: selectedTab,
    });
    console.log(selected, "##");
  };

  tabPanel = () => {
    const { constantData } = this.state;
    console.log(constantData, "hi");
    return (
      <>
        <p>{constantData && constantData.heading}</p>
        {/* <p>hello</p> */}
      </>
    );
  };

  render() {
    return (
      <div className="about ">
        <div className="about_container">
          <div className="about_container_img">
            <img src={AboutImg} />
          </div>
          <div className="about_container_content">
            <h2>About Me</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which dont look even slightly
              believable. If you are going to use a passage of Lorem Ipsum,
            </p>
            <div className="about_tabs">
              <Tabs>
                <TabList>
                  {this.state.tabs.map((item) => {
                    return (
                      <Tab
                        onClick={() => {
                          this.tabClicked(item);
                        }}
                      >
                        {item}
                      </Tab>
                    );
                  })}
                </TabList>
                <div className="single_tabPanel">
                  <TabPanel>
                    <ul>
                      <li>
                        <p>
                          User experience design - <span>UI/UX</span>
                        </p>
                        Delight the user and make it work.
                      </li>
                      <li>
                        <p>
                          Web and user interface design -{" "}
                          <span> Development</span>
                        </p>
                        Websites, web experiences, ...
                      </li>
                      <li>
                        <p>
                          Interaction design - <span>Animation</span>
                        </p>
                        I like to move it move it.
                      </li>
                    </ul>
                  </TabPanel>
                  <TabPanel>
                    <ul>
                      <li>
                        <p>
                          Awwwards.com - <span> Winner</span>
                        </p>
                        2019 - 2020
                      </li>
                      <li>
                        <p>
                          Web and user interface design -{" "}
                          <span> Development</span>
                        </p>
                        Websites, web experiences, ...
                      </li>
                      <li>
                        <p>
                          Interaction design - <span>Animation</span>
                        </p>
                        I like to move it move it.
                      </li>
                    </ul>
                  </TabPanel>
                  <TabPanel>
                    <ul>
                      <li>
                        <p>
                          UI/UX Designer - <span>Appinventiv</span>
                        </p>
                        2021 - Current
                      </li>
                      <li>
                        <p>
                          Web and user interface design -{" "}
                          <span> Development</span>
                        </p>
                        Websites, web experiences, ...
                      </li>
                      <li>
                        <p>
                          Interaction design - <span>Animation</span>
                        </p>
                        I like to move it move it.
                      </li>
                    </ul>
                  </TabPanel>
                  <TabPanel>
                    <ul>
                      <li>
                        <p>
                          BTech in CSE - <span>HMRITM</span>
                        </p>
                        2017-2021
                      </li>
                      <li>
                        <p>
                          Web and user interface design -{" "}
                          <span> Development</span>
                        </p>
                        Websites, web experiences, ...
                      </li>
                      <li>
                        <p>
                          Interaction design - <span>Animation</span>
                        </p>
                        I like to move it move it.
                      </li>
                    </ul>
                  </TabPanel>
                </div>
                <div>{this.tabPanel()}</div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
