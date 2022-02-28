import "./App.css";
import { useState } from "react";
import "./style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Service from "./components/Services";
import Project from "./components/Projects";
import Footer from "./components/Footer";
import DoubleArrowRoundedIcon from "@mui/icons-material/DoubleArrowRounded";

function App() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    // <Router>
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Service />
      <Project />
      {/* <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/About" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/project" element={<Project />} />
        </Routes> */}

      <button
        id="go-to-top"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
        className={`back-to-top`}
      >
        <DoubleArrowRoundedIcon />
      </button>
      <Footer />
    </div>
    // </Router>
  );
}

export default App;
