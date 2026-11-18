
import Navbar from "./Components/Navbar";
import Studentcard from "./Components/Studentcard";
import "./App.css";
import Home from "./Page/Home";
import About from "./Page/About";
import Contact from "./Page/Contact";
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="dashboard" id="home">
    
      <Navbar />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </div>
  );
}

export default App;
