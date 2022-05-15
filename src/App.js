import './App.css';
import Nav from './components/Nav.jsx';
import { Routes, Route } from "react-router-dom";
import Home from './screens/Home';


function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    
    </div>
  );
}

export default App;
