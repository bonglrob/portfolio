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
            <video id="particles-video" className="video-bg" autoPlay muted loop>
                <source src={waves} type="video/mp4"/>
            </video>
        </section>
    )
}

export default Hero;