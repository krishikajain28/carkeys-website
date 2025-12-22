import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import the helper
import ScrollToTop from "./components/ScrollToTop"; // <--- IMPORT THIS

// Import Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CuttingMachines from "./components/ui/CuttingMachines";
import ProgrammingMachines from "./components/ui/ProgrammingMachines";
import BlankKeys from "./components/ui/BlankKeys";

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* <--- ADD THIS HERE */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/cutting-machines" element={<CuttingMachines />} />
        <Route path="/programming-machines" element={<ProgrammingMachines />} />
        <Route path="/blank-keys" element={<BlankKeys />} />
      </Routes>
    </Router>
  );
};

export default App;
