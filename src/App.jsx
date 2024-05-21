import "./styles/App.css";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Header />
      {/* <Home />
      <Projects />*/}
      <About />
      <Contact />
    </>
  );
}
