import "./styles/App.css";

import Hero from "./components/Hero";
import Skills from "./components/Skills";
import ProjectTripSplit from "./components/Projects/ProjectTripSplit";
import ProjectGacha from "./components/Projects/ProjectGacha";

function App() {

  return (
    <>
      <main>
        <Hero />

        <Skills />

        <ProjectTripSplit />
        <ProjectGacha />
        
      </main>
      <footer>
        <p className="copyright">&copy; Copyright 2025 Robert Bonglamphone</p>
      </footer>
    </>
  );
}

export default App;
