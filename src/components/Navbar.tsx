import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showContactPopup, setShowContactPopup] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-content">
                        <div className="brand-logo">Olivia Hill</div>

                        <div className="desktop-menu">
                            <button onClick={() => scrollToSection('about')} className="nav-link">About Me</button>
                            <button onClick={() => scrollToSection('academics')} className="nav-link">Academics</button>
                            <button onClick={() => scrollToSection('extras')} className="nav-link">Extras!</button>
                            <button onClick={() => setShowContactPopup(true)} className="contact-button">Say Hi!</button>
                        </div>

                        <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-toggle">
                            <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>

                    {isOpen && (
                        <div className="mobile-menu">
                            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
                            <button onClick={() => scrollToSection('academics')} className="nav-link">Academics</button>
                            <button onClick={() => scrollToSection('extras')} className="nav-link">Extras!</button>
                            <button onClick={() => setShowContactPopup(true)} className="contact-button">Say Hi!</button>
                        </div>
                    )}
                </div>
            </nav>

            {/* Contact Popup */}
            {showContactPopup && (
                <div className="contact-modal-overlay" onClick={() => setShowContactPopup(false)}>
                    <div className="contact-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setShowContactPopup(false)}>&times;</button>
                        <h2 className="contact-modal-title">Let's Connect!</h2>

                        <div className="contact-info">
                            <div className="contact-item">
                                <span className="contact-label">Email:</span>
                                <a href="mailto:hill.ol@northeastern.edu" className="contact-link">
                                    hill.ol@northeastern.edu
                                </a>
                            </div>

                            <div className="contact-item">
                                <span className="contact-label">LinkedIn:</span>
                                <a href="https://linkedin.com/in/olivia-hill0" target="_blank" rel="noopener noreferrer" className="contact-link">
                                    linkedin.com/in/olivia-hill0
                                </a>
                            </div>

                            <div className="contact-item">
                                <span className="contact-label">GitHub:</span>
                                <a href="https://github.com/hill-ol" target="_blank" rel="noopener noreferrer" className="contact-link">
                                    github.com/hill-ol
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}