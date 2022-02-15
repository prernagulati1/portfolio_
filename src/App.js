import "./App.css";
import "./style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Service from "./components/Services";
import Project from "./components/Projects";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
