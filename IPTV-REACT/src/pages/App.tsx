// Importeert de nodige modules uit react-router-dom
import { Navigate, Route, Routes } from "react-router-dom";

// Importeert de navigatiebalk en de verschillende pagina's
import { Navbar } from "./Navbar";
import Home from "../Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Video from "./Video";    

// Hoofdfunctie van de app
const App: React.FC = () => {
  return (
    <div className="App">
      {/* Navigatiebalk wordt hier weergegeven */}
      <Navbar />
      
      {/* Routes component om de verschillende URL-paden te koppelen aan componenten */}
      <Routes>
        {/* Redirect "/" naar "/home" */}
        <Route path="/" element={<Navigate to="/home"/>} />
        
        {/* Definieert de route voor elk component */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;
