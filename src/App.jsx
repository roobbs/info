import "./styles/App.css";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Home from "./components/Home";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Projects />
    </>
  );
}
