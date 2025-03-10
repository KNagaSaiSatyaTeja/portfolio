import Navbar from "./components/navbar/navbar";
import "./App.css";
import Herosection from "./components/hero/herosection";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import ContactMe from "./components/contact/contact";

function App() {
  return (
    <div
      className="app-main bg-gray-800 "
      style={{
        margin: "0",
        padding: "0",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      <Navbar />
      <Herosection />
      <About />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
