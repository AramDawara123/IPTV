import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Navbar";
import Home from "../Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;