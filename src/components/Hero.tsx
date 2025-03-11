import waves from '/video/waves.mp4';
import Header from "./Header";
import ChevronIcon from "./ChevronIcon";

function Hero() {
    return (
        <section className="hero">
            <Header />
            <div className="text-group">
                <h1 className="container">Robert Bonglamphone</h1>
                <h2 className="container">Full-Stack Software Developer</h2>
            </div>
            <ChevronIcon />
            {/* <img className="scroll-prompt" width="50" height="50" src="https://img.icons8.com/ios/50/expand-arrow--v1.png" alt="expand-arrow--v1"/> */}
            <video id="particles-video" className="video-bg" autoPlay muted loop>
                <source src={waves} type="video/mp4"/>
            </video>
        </section>
    )
}

export default Hero;