import React, { Component } from "react";
import "./style.scss";
import AboutImg from "../../Assets/about.JPG";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { mainSkills, awards, experience, education } from "./constants";

export class About extends Component {
  state = {
    tabs: ["Experience", "Education"],
    selected: "Experience",
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
      <div className="about">
        <div className="about_container">
          <div className="about_container_img">
            <img src={AboutImg} />
          </div>
          <div className="about_container_content">
            <h2>Honestly Me</h2>
            {/* <pre> */}
            <p>
              Yeah, I'm Hard Working, BLAH BLAH BLAH.<br></br> Instead, here are
              some important insights covered in just 2 years of Journey!
              <br></br>- Worked on more than{" "}
              <b>40 Websites and Landing Pages</b> <br></br>- Designed more than{" "}
              <b>half a dozen</b> fully functional Apps, which have an amazing
              ROI <br></br>- Conceptualized and Worked on
              <b> 5+ SaaS products</b>
            </p>
            {/* </pre> */}
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
                          AppInventiv
                          {/* <span>Mar 2021 - Present</span> */}
                        </p>
                        2021 - Current
                      </li>
                      <li>
                        <p>
                          Gensofts Infosolutions Pvt. Ltd.
                          {/* <span> Development</span> */}
                        </p>
                        Feb 2021 - Mar 2021 · 2 mos
                      </li>
                      <li>
                        <p>
                          Mauka (Earlier Pracify)
                          {/* <span>Animation</span> */}
                        </p>
                        Sept 2020 - Jan 2021
                      </li>
                    </ul>
                  </TabPanel>
                  <TabPanel>
                    <ul>
                      <li>
                        <p>
                          BTech in CSE -{" "}
                          <span>Guru Gobind Singh Indraprastha University</span>
                        </p>
                        2017-2021
                      </li>
                      <li>
                        <p>
                          Schooling -{" "}
                          <span> Arwachin Bharti Bhawan Sr. Sec. School </span>
                        </p>
                        2010-2017
                      </li>
                      {/* <li>
                        <p>
                          Interaction design - <span>Animation</span>
                        </p>
                        I like to move it move it.
                      </li> */}
                    </ul>
                  </TabPanel>
                </div>
                {/* <div>{this.tabPanel()}</div> */}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
