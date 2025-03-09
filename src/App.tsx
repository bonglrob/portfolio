import "./App.css";

import Header from "./components/Header";
import ProjectTripSplit from "./components/projects/ProjectTripSplit";
import ProjectGacha from "./components/projects/ProjectGacha";

function App() {

  return (
    <>
      <Header />
      <main>
        <section id="landing-banner">
          <h1>Robert Bonglamphone</h1>
          <h2>Full-Stack Software Developer</h2>
        </section>
        <section id="projects">
          <h2 className="project-header">Projects</h2>
          <ProjectTripSplit />
          <ProjectGacha />
        </section>
      </main>
      <footer>
        <p className="copyright">&copy; Copyright 2025 Robert Bonglamphone</p>
      </footer>
    </>
  );
}

export default App;
