import Button from "../Button";
import { styles } from './project.styles';

function ProjectGacha() {
    return (
        <>
            <section style={styles.BackgroundAlt}>
                <div style={styles.Container}>
                    <img src="/images/gachapon.svg" alt="landing page of a Japanese gachapon capsule vending machine" />
                    <div style={styles.TextContent}>
                        <div style={styles.Content}>
                            <p style={styles.Caption}>Web Application</p>
                            <h2>Gachapon</h2>
                            <p>A virtual Japanese capsule vending machine that dispenses "memory" capsules.</p>
                            <p><strong>Built with: </strong>TypeScript, React, Bootstrap CSS, HTML, Google Firebase</p>
                        </div>
                        <div className="project-links">
                            <ul style={styles.ProjectLinks}>
                                <Button url="https://gachapon-prod.web.app/" />
                                <li><a href="https://github.com/bonglrob/gachapon" target="_blank">&lt; View the code /&gt;</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectGacha;