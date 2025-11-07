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
                    <div className="brand-logo">Ashrita's Nails</div>

                    {/* Desktop Menu */}
                    <div className="desktop-menu">
                        <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
                        <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
                        <button onClick={() => scrollToSection('gallery')} className="nav-link">Gallery</button>
                        <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
                        <button onClick={() => scrollToSection('booking')} className="book-button">Book Now</button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-toggle">
                        <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mobile-menu">
                        <button onClick={() => scrollToSection('home')} className="mobile-nav-link">Home</button>
                        <button onClick={() => scrollToSection('services')} className="mobile-nav-link">Services</button>
                        <button onClick={() => scrollToSection('gallery')} className="mobile-nav-link">Gallery</button>
                        <button onClick={() => scrollToSection('about')} className="mobile-nav-link">About</button>
                        <button onClick={() => scrollToSection('booking')} className="mobile-book-button">Book Now</button>
                    </div>
                )}
            </div>
        </nav>
    );
}