import "./styles/App.css";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectTripSplit from "./components/Projects/ProjectTripSplit";
import ProjectGacha from "./components/Projects/ProjectGacha";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <main>
        <Hero />

        <About />

        <Skills />

        <ProjectTripSplit />
        <ProjectGacha />
      </main>
      <div className="padding"></div>
      <Footer />
    </>
  );
}

export default App;
