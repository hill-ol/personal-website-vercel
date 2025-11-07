import './App.css';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import About from './components/About';

export default function App() {
    return (
        <div className="app">
            <NavBar />
            <Contact />
            <About />
        </div>
    );
}