// import "./styles/App.css";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Stack from "./components/Stack";

export default function App() {
  return (
    <div className="page">
      <Header />
      <Projects />
      <Stack />
    </div>
  );
}
