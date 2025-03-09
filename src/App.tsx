import "./App.css";

import ProjectTripSplit from "./components/projects/ProjectTripSplit";

function App() {

  return (
    <>
      <header>
        <nav>
          <div className="logo">RB.</div>
          <ul>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="landing-banner">
          <h1>Robert Bonglamphone</h1>
          <h2>Full-Stack Software Developer</h2>
        </section>
        <section id="projects">
          <h2 className="project-header">Projects</h2>
          <ProjectTripSplit />
        </section>
      </main>
      <footer>
        <p className="copyright">&copy; Copyright 2025 Robert Bonglamphone</p>
      </footer>
    </>
  );
}

export default App;
