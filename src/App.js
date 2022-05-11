import './App.css';
import Nav from './components/Nav.jsx';
import { Routes, Route } from "react-router-dom";
import Experiences from './screens/Experiences';
import Projects from './screens/Projects';
import About from './screens/About';
import Home from './screens/Home';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/"  />
        <Route path="/about" element={<About />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

    
    </div>
  );
}

export default App;
