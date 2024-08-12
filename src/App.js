import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
      <>
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>

      <Route index element={<Home/>}/>      
      <Route path="/home" element={<Home/>}/>      
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact phno="(+91)91010 51183" email="sonuraj1649@gmail.com"/>}/>
      </Routes>
    </div>
    </Router>
      </>
  );
}

export default App;
