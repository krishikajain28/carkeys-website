import React from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    // bg-slate-900 matches the Hero section perfectly
    <header className="bg-slate-900 sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO: All White now to pop against dark background */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-blue-600 flex items-center justify-center rounded shadow-lg shadow-blue-900/50 group-hover:bg-blue-500 transition-colors">
            <span className="text-white font-black text-xl">R</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black text-white tracking-tight uppercase leading-none">
              Rishabh Keys
            </span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] group-hover:text-blue-400 transition-colors">
              Security Solutions
            </span>
          </div>
        </Link>

        {/* NAVIGATION: Light Grey text, turning White on hover */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-300 uppercase tracking-wide">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-white transition-colors">
            About Firm
          </Link>
          <Link to="/blank-keys" className="hover:text-white transition-colors">
            Products
          </Link>
          <Link to="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        {/* ACTION BUTTON: Yellow stays. Yellow on Dark Blue is the ultimate "Construction/Industrial" color combo. */}
        <a
          href="tel:+919876543210"
          className="hidden md:flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-5 py-2.5 rounded font-black text-sm uppercase tracking-wider transition-all shadow-lg shadow-yellow-500/20"
        >
          <Phone size={16} fill="currentColor" />
          Call Support
        </a>
      </div>
    </header>
  );
};

export default Header;
