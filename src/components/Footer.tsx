import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer>
            <div className="top-border-gradient"></div>
            <div className="footer-contents">
                <div className="social-icons">
                    <a href="https://github.com/bonglrob/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="xl"/>
                    </a>
                    <a href="https://www.linkedin.com/in/robbong/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="xl"/>
                    </a>
                </div>
                <p className="copyright">&copy; Copyright 2025 Robert Bonglamphone</p>
            </div>
        </footer>
    );
}

export default Footer;