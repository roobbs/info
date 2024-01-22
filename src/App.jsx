import reactLogo from './assets/react.svg'
import './styles/App.css'
import ProjectCard from './components/ProjectCard'

export default function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <ProjectCard/>
    </>
  )
}


