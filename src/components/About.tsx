export default function About() {
    return (
        <section id="about" className="about-section">
            <div className="about-flex-container">
                <div className="about-container">
                    <h1 className="section-title">Hi!</h1>
                    <p className="about-text">
                        Hi! I'm Olivia, a second year Computer Science and Mathematics major at Northeastern University.
                        I'm from the Chicago suburbs.
                    </p>
                </div>
                <div className="about-image-container">
                    <img src="/about-me.jpg" alt="About Me" />
                </div>
            </div>
        </section>
    );
}