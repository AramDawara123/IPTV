import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./Navbar";
import Home from "../Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Video from "./Video";    

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>} />
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