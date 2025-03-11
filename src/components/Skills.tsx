import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faPhp } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";

function Skills() {
    return (
        <section id="skills">
            <h2 className="skills-header">Skills & Experience</h2>
            <p>HTML, CSS, JS, building small and medium web applications with React.</p>
            <div className="skills-brands-container">
                <div className="skill-container">
                    <FontAwesomeIcon icon={faNodeJs} className="icon-size-lg" />
                    <p className="caption">Node.js</p>
                </div>
                <div className="skill-container">
                    <FontAwesomeIcon icon={faGitAlt} className="icon-size-lg" />
                    <p className="caption">Git</p>
                </div>
                <div className="skill-container">
                    <FontAwesomeIcon icon={faCss3Alt} className="icon-size-lg" />
                    <p className="caption">CSS3</p>
                </div>
                <div className="skill-container">
                    <FontAwesomeIcon icon={faPhp} className="icon-size-lg" />
                    <p className="caption">PHP</p>
                </div>
                <div className="skill-container">
                    <FontAwesomeIcon icon={faReact} className="icon-size-lg" />
                    <p className="caption">React</p>
                </div>
                <div className="skill-container">
                    <FontAwesomeIcon icon={faHtml5} className="icon-size-lg" />
                    <p className="caption">HTML5</p>
                </div>
                <div className="skill-container">
                    <FontAwesomeIcon icon={faJs} className="icon-size-lg" />
                    <p className="caption">JavaScript</p>
                </div>
            </div>
        </section>
    );
}

export default Skills;