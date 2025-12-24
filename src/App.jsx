import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 1. Helpers
import ScrollToTop from "./components/ScrollToTop";

// 2. Layout Components (The High-End Header & Footer)
// Make sure these paths match where you saved Header.jsx and Footer.jsx
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// 3. Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CuttingMachines from "./components/ui/CuttingMachines";
import ProgrammingMachines from "./components/ui/ProgrammingMachines";
import BlankKeys from "./components/ui/BlankKeys";

const App = () => {
  return (
    <Router>
      <ScrollToTop />

      {/* HEADER: Placed outside Routes so it stays fixed at the top */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Inner Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Product Details */}
        <Route path="/cutting-machines" element={<CuttingMachines />} />
        <Route path="/programming-machines" element={<ProgrammingMachines />} />
        <Route path="/blank-keys" element={<BlankKeys />} />
      </Routes>

      {/* FOOTER: Placed outside Routes so it shows at the bottom of every page */}
      <Footer />
    </Router>
  );
};

export default App;
