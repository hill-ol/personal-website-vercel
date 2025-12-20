import './About.css';

export default function About() {
    return (
        <section id="about" className="about-section">
            <div className="about-flex-container">
                <div className="about-container">
                    <h1 className="section-title">Hi!</h1>
                    <p className="about-text">
                        I'm Olivia, a second year Computer Science and Mathematics major at Northeastern University from the Chicago suburbs.
                        Currently, I am interested in full-stack development and research! I appreciate both the ability to be creative, but also build concrete solutions using my programming abilities.
                    </p>
                </div>
                <div className="about-image-container">
                    <img src="/about-me.jpg" alt="About Me" />
                </div>
            </div>
        </section>
    );
}