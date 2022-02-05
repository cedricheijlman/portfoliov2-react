import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Front from "./components/Front";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Front />
      <AboutMe />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
