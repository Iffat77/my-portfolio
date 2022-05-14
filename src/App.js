import './App.css';
import Nav from './components/Nav.jsx';
import { Routes, Route } from "react-router-dom";
import Experiences from './screens/Contact';
import About from './screens/About';
import Home from './screens/Home';


function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home element={<About />}/>} />
        <Route path="/about" element={<About />}   />
        <Route path="/experiences" element={<Experiences />} />
      </Routes>

    
    </div>
  );
}

export default App;
