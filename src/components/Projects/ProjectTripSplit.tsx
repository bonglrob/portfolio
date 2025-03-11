import Button from "../Button";
import { styles } from './project.styles';

function ProjectTripSplit() {
    return (
        <>
            <h2 id="projects" className="project-header">Projects</h2>
            <section style={styles.Background}>
                <div style={styles.Container}>
                    <div style={styles.TextContent}>
                        <div style={styles.Content}>
                            <p style={styles.Caption}>Web Application</p>
                            <h2>TripSplit</h2>
                            <p>An app to track travel expenses in a group with currency conversion.</p>
                            <p><strong>Built with: </strong>React, JavaScript, Bootstrap JS Components, HTML, CSS, Git, Firebase (Google Cloud Hosting)</p>
                        </div>
                        <div className="project-links">
                            <ul style={styles.ProjectLinks}>
                                <Button url="https://tripsplit-b7.web.app/landing"/>
                                <li><a href="https://github.com/bonglrob/trip-expense-tracker" target="_blank">&lt; View the code /&gt;</a></li>
                            </ul>
                        </div>
                    </div>
                    <img style={styles.Image} src="/images/tripsplit-ui.svg" alt="tripsplit's landing and expense page" />
                </div>
            </section>
        </>
    )
}

export default ProjectTripSplit;