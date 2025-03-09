import "./App.css";

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
          <section className="project-container">
            <div className="text-container">
              <p className="caption">Web Application</p>
              <h2>TripSplit</h2>
              <p>An app to track travel expenses in a group with currency conversion.</p>
              <p><strong>Built with:</strong>React, JavaScript, Bootstrap JS Components, HTML, CSS, Git, Firebase (Google Cloud Hosting)</p>
              <div className="project-links">
                  <p><a href="https://github.com/bonglrob/trip-expense-tracker" target="_blank">View the code &gt;</a></p>
                  <p><a href="https://tripsplit-b7.web.app/landing" target="_blank">View the app &gt;</a></p>
              </div>
            </div>
          </section>
        </section>
      </main>
      <footer>
        <p className="copyright">&copy; Copyright 2025 Robert Bonglamphone</p>
      </footer>
    </>
  );
}

export default App;
