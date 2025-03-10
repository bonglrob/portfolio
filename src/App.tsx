import "./styles/App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectTripSplit from "./components/Projects/ProjectTripSplit";
import ProjectGacha from "./components/Projects/ProjectGacha";

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />

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
