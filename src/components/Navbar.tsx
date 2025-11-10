import { useState } from 'react';
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-content">
                    <div className="brand-logo">Olivia Hill</div>

                    {}
                    <div className="desktop-menu">
                        <button onClick={() => scrollToSection('about')} className="nav-link">About Me</button>
                        <button onClick={() => scrollToSection('academic')} className="nav-link">Academics</button>
                        <button onClick={() => scrollToSection('personal')} className="nav-link">Extras!</button>
                        <button onClick={() => scrollToSection('contact')} className="book-button">Say Hi!</button>
                    </div>

                    {}
                    <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-toggle">
                        <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>

                {}
                {isOpen && (
                    <div className="mobile-menu">
                        <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
                        <button onClick={() => scrollToSection('academics')} className="nav-link">Academics</button>
                        <button onClick={() => scrollToSection('extras')} className="nav-link">Extras!</button>
                        <button onClick={() => scrollToSection('contact')} className="book-button">Say Hi!</button>
                    </div>
                )}
            </div>
        </nav>
    );
}