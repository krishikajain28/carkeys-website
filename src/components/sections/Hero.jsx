import React from "react";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    // Background Image with Dark Overlay
    <section className="relative w-full py-32 bg-slate-900 overflow-hidden">
      {/* BACKGROUND IMAGE: High-end car interior or hardware abstract */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop"
          alt="Premium Car"
          className="w-full h-full object-cover opacity-30" // Low opacity so text is readable
        />
        {/* Gradient Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40"></div>
      </div>

      {/* CONTENT: Centered, White, Bold */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 border border-slate-600 bg-slate-800/50 backdrop-blur-md px-4 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">
            India's #1 Locksmith Supplier
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
          Secure Your Business with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
            Premium Hardware.
          </span>
        </h1>

        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
          We supply professional-grade Key Cutting Machines, Programming Tools,
          and Raw Keys to over 500+ businesses across India.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/blank-keys">
            <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded font-bold text-lg uppercase tracking-wide hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/50 flex items-center justify-center gap-2">
              View Catalog <ChevronRight size={20} />
            </button>
          </Link>

          <Link to="/contact">
            <button className="w-full sm:w-auto bg-transparent border-2 border-white/20 text-white px-8 py-4 rounded font-bold text-lg uppercase tracking-wide hover:bg-white/10 transition-all">
              Contact Sales
            </button>
          </Link>
        </div>

        {/* TRUST ICONS: Simple, White, Clean */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
          <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider">
            <ShieldCheck size={18} /> Official Distributor
          </div>
          <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider">
            <ShieldCheck size={18} /> Pan-India Shipping
          </div>
          <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider">
            <ShieldCheck size={18} /> GST Compliant
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
