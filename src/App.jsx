import reactLogo from "./assets/react.svg";
import "./styles/App.css";
import Projects from "./components/Projects";

export default function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Projects />
    </>
  );
}
