import React from "react";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Animation Library

const Hero = () => {
  const scrollToProducts = () => {
    const section = document.getElementById("product-pillars");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // --- Animation Configurations ---
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }, // Staggers each element by 0.2s
    },
  };

  return (
    <section className="relative w-full py-28 bg-slate-900 overflow-hidden">
      {/* BACKGROUND IMAGE: Cinematic Slow Zoom Animation */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop"
            alt="Premium Car"
            className="w-full h-full object-cover opacity-30"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40"></div>
      </div>

      {/* CONTENT: Staggered Fade Up Entrance */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* 1. Badge */}
        <motion.div
          variants={fadeUpVariant}
          className="inline-flex items-center gap-2 border border-slate-600 bg-slate-800/50 backdrop-blur-md px-4 py-1.5 rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">
            India's #1 Locksmith Supplier
          </span>
        </motion.div>

        {/* 2. Headline */}
        <motion.h1
          variants={fadeUpVariant}
          className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight"
        >
          Wholesale Key Machines <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
            & Remotes{" "}
          </span>
        </motion.h1>

        {/* 3. Subtitle */}
        <motion.p
          variants={fadeUpVariant}
          className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-medium leading-relaxed"
        >
          We supply professional-grade Key Cutting Machines, Programming Tools,
          and Raw Keys to over 500+ businesses across India.
        </motion.p>

        {/* 4. Buttons */}
        <motion.div
          variants={fadeUpVariant}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button
            onClick={scrollToProducts}
            className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded font-bold text-lg uppercase tracking-wide hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/50 flex items-center justify-center gap-2"
          >
            View Products <ChevronRight size={20} />
          </button>

          <Link to="/contact">
            <button className="w-full sm:w-auto bg-transparent border-2 border-white/20 text-white px-8 py-4 rounded font-bold text-lg uppercase tracking-wide hover:bg-white/10 transition-all">
              Contact Sales
            </button>
          </Link>
        </motion.div>

        {/* 5. Trust Icons */}
        <motion.div
          variants={fadeUpVariant}
          className="mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8 md:gap-16 opacity-70"
        >
          <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider">
            <ShieldCheck size={18} /> Official Distributor
          </div>
          <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider">
            <ShieldCheck size={18} /> Pan-India Shipping
          </div>
          <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider">
            <ShieldCheck size={18} /> GST Compliant
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
