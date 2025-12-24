import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu automatically when the route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Firm", path: "/about" },
    { name: "Products", path: "/blank-keys" }, // Points to your products page
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* HEADER BAR */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-white/10 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* 1. LOGO */}
          <Link to="/" className="flex items-center gap-3 group relative z-50">
            <div className="w-10 h-10 bg-blue-600 flex items-center justify-center rounded-lg shadow-lg shadow-blue-900/50 group-hover:bg-blue-500 transition-colors">
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

          {/* 2. DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative text-sm font-bold text-slate-300 uppercase tracking-wide hover:text-white transition-colors group"
              >
                {link.name}
                {/* Animated Underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* 3. ACTION BUTTON (Desktop) */}
          <div className="hidden md:block">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-6 py-2.5 rounded-lg font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-yellow-500/20 transform hover:-translate-y-0.5"
            >
              <Phone size={16} fill="currentColor" />
              Call Support
            </a>
          </div>

          {/* 4. MOBILE TOGGLE BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-50 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      {/* MOBILE MENU OVERLAY (AnimatePresence allows exit animations) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-slate-950 md:hidden flex flex-col pt-32 px-8"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1 }} // Stagger effect
                    className="flex items-center justify-between py-4 border-b border-white/10 group"
                  >
                    <span className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-blue-500 transition-colors">
                      {link.name}
                    </span>
                    <ChevronRight className="text-slate-600 group-hover:text-blue-500" />
                  </motion.div>
                </Link>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12"
            >
              <a
                href="tel:+919876543210"
                className="flex w-full items-center justify-center gap-3 bg-blue-600 text-white py-5 rounded-xl font-bold text-sm uppercase tracking-widest shadow-xl"
              >
                <Phone size={18} /> Call Now
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
