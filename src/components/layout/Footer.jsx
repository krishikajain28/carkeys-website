import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 font-sans">
      {/* UPPER FOOTER: Main Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* COLUMN 1: Brand & Vision */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-blue-700 flex items-center justify-center rounded shadow-lg group-hover:bg-blue-600 transition-colors">
                <span className="text-white font-black text-lg">R</span>
              </div>
              <span className="text-xl font-black text-white uppercase tracking-tight">
                Rishabh Keys
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500 font-medium max-w-xs">
              India's leading wholesale distributor of automotive locksmith
              hardware. Equipping professionals with precision technology since
              2005.
            </p>
            <div className="flex gap-4">
              {/* Social Icons with Hover Effects */}
              {[Facebook, Instagram, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div>
            <h3 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">
              Company
            </h3>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-wide">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-500 transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={14}
                    className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                  />{" "}
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-500 transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={14}
                    className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                  />{" "}
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-500 transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={14}
                    className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                  />{" "}
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="/assets/catalog.pdf"
                  download
                  className="hover:text-blue-500 transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={14}
                    className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                  />{" "}
                  Catalog PDF
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Products */}
          <div>
            <h3 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">
              Inventory
            </h3>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-wide">
              <li>
                <Link
                  to="/cutting-machines"
                  className="hover:text-white transition-colors"
                >
                  Key Cutting Machines
                </Link>
              </li>
              <li>
                <Link
                  to="/programming-machines"
                  className="hover:text-white transition-colors"
                >
                  OBD Programming Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/blank-keys"
                  className="hover:text-white transition-colors"
                >
                  Blank Keys & Shells
                </Link>
              </li>
              <li>
                <Link
                  to="/blank-keys"
                  className="hover:text-white transition-colors"
                >
                  Transponder Chips
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Contact Info (Vital for B2B) */}
          <div>
            <h3 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">
              Banglore HQ
            </h3>
            <div className="space-y-6 text-sm font-medium">
              <div className="flex items-start gap-4">
                <MapPin className="text-blue-600 shrink-0 mt-1" size={20} />
                <p className="text-slate-400">
                  Shop No. 12, Industrial Estate,
                  <br />
                  Grant Road East,
                  <br />
                  Mumbai, Maharashtra 400007
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-blue-600 shrink-0" size={20} />
                <a
                  href="tel:+919876543210"
                  className="hover:text-white transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-blue-600 shrink-0" size={20} />
                <a
                  href="mailto:sales@rishabhkeys.com"
                  className="hover:text-white transition-colors"
                >
                  sales@rishabhkeys.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LOWER FOOTER: Copyright & Legal */}
      <div className="border-t border-slate-900 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-600">
          <p>© {currentYear} Rishabh Keys. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-slate-400">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
