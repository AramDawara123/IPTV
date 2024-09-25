import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { About, Contact,Home , Services } from "./components/pages";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <div className="informatica">
      <h1>All-In-One Premium IPTV Service</h1>
            <p>Enjoy your time with excellent image quality up to 4K, on any device, anytime and anywhere,with over
                +18,000 channels, +88,000 VOD and uptime 100%</p>
            <button className="free-button"><a href="https://wa.me/qr/2WXRBEQMIZKEB1">Free Trial</a></button>
      </div>
    </div>

  );
};

export default App;