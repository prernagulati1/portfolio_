import "./App.css";
import "./style.scss";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Service from "./components/Services";
import Project from "./components/Projects";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Service />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
