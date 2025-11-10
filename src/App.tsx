import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import About from './components/About';

export default function App() {
    return (
        <div className="app">
            <Navbar />
            <About />
            <Contact />
        </div>
    );
}