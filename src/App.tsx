import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Academic from './components/Academic'
import About from './components/About';
import Personal from './components/Personal'

export default function App() {
    return (
        <>
            <Navbar />
            <About />
            <Academic />
            <Personal />
            <Contact />
        </>
    );
}