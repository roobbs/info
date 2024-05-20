import "./styles/App.css";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Name from "./components/name";

export default function App() {
  return (
    <div className="page">
      <Header />
      <Name />
      <Projects />
    </div>
  );
}
