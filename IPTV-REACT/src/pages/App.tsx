import { Route, Routes } from "react-router-dom";
import "../CSS/App.css";
import { Navbar } from "./Navbar";
import { About, Contact, Services } from ".";



const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
