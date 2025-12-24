import React, { useState } from "react";
import {
  Download,
  FileText,
  ShieldCheck,
  ArrowRight,
  Grid3X3,
  ArrowUp,
} from "lucide-react";

// You have 10 images for Key Cutting Machines (kc1.png to kc10.png)
const TOTAL_IMAGES = 10;

const machineBrands = [
  "Xhorse",
  "Dolphin",
  "Condor",
  "Silca",
  "JMA",
  "Keyline",
  "Raise",
  "Defu",
  "Wenxing",
];

const CuttingMachines = () => {
  // STATE: Track if we are showing all images or just the preview
  const [showAll, setShowAll] = useState(false);

  // LOGIC: Show 8 initially, or all 10 if button is clicked
  const visibleCount = showAll ? TOTAL_IMAGES : 8;

  // Generates paths: /images/kc1.png ... to ... /images/kc10.png
  const currentImages = Array.from(
    { length: visibleCount },
    (_, i) => `/images/kc${i + 1}.png`
  );

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* 1. HERO HEADER: Industrial/Hardware Theme */}
      <section className="bg-slate-900 pt-36 pb-20 px-6 border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-8">
            <ShieldCheck size={14} /> Authorized Machine Distributor
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            Key Cutting <span className="text-blue-500">Machines</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            High-precision CNC and Manual cutting stations. From portable
            battery-operated units to heavy-duty industrial duplicators.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT WRAPPER */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 space-y-24">
        {/* A. MACHINE INVENTORY GRID */}
        <div>
          <div className="flex items-center justify-between mb-10 px-2">
            <div>
              <h2 className="text-2xl font-black text-slate-900">
                {showAll ? "Full Machine Inventory" : "Featured Machines"}
              </h2>
              <p className="text-slate-500 text-sm font-bold mt-1">
                Explore our bestsellers
              </p>
            </div>
            <Grid3X3 className="text-slate-300" size={28} />
          </div>

          {/* GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {currentImages.map((img, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 overflow-hidden"
              >
                {/* Image Area */}
                <div className="aspect-square bg-slate-100 relative flex items-center justify-center p-4">
                  <img
                    src={img}
                    alt={`Machine ${idx + 1}`}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/300x300/f1f5f9/94a3b8?text=Machine+Img";
                    }}
                  />
                  {/* "Bestseller" Badge for first 2 items */}
                  {idx < 2 && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-red-600 text-white text-[10px] font-bold uppercase rounded-sm shadow-sm">
                        Bestseller
                      </span>
                    </div>
                  )}
                </div>

                {/* Text Area */}
                <div className="p-4 text-center">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Model: KC-{idx + 500}
                  </p>
                  <h3 className="text-sm font-black text-slate-800 group-hover:text-blue-600 transition-colors">
                    Automatic CNC Cutter
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* TOGGLE BUTTON */}
          <div className="text-center mt-12">
            {!showAll ? (
              <button
                onClick={() => setShowAll(true)}
                className="group inline-flex items-center gap-2 text-slate-500 font-bold text-sm uppercase tracking-widest hover:text-blue-600 transition-colors"
              >
                View All Machines
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            ) : (
              <button
                onClick={() => setShowAll(false)}
                className="group inline-flex items-center gap-2 text-slate-500 font-bold text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
              >
                Show Less
                <ArrowUp
                  size={16}
                  className="group-hover:-translate-y-1 transition-transform"
                />
              </button>
            )}
          </div>
        </div>

        {/* B. BROCHURE DOWNLOAD CARD */}
        <div className="bg-blue-600 rounded-2xl p-6 md:p-12 shadow-2xl shadow-blue-900/20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left border border-blue-500/30">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
              <div className="p-2 bg-white/20 rounded-lg text-white backdrop-blur-md">
                <FileText size={24} />
              </div>
              <span className="text-blue-100 font-bold uppercase tracking-widest text-xs">
                Technical Specs
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
              Download Machine Brochure
            </h2>
            <p className="text-blue-100/90 text-sm md:text-base leading-relaxed max-w-md">
              Includes jaw specifications, power consumption details,
              calibration guides, and warranty information.
            </p>
          </div>

          <button className="whitespace-nowrap inline-flex items-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-xl font-black text-xs md:text-sm uppercase tracking-wider transition-all hover:bg-blue-50 hover:scale-105 shadow-xl">
            <Download size={20} /> Download PDF (4MB)
          </button>
        </div>

        {/* C. SUPPORTED BRANDS */}
        <div className="text-center border-t border-slate-200 pt-16">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-10">
            Stocked Brands
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {machineBrands.map((brand, idx) => (
              <span
                key={idx}
                className="bg-white px-5 py-2.5 rounded-lg border border-slate-200 text-slate-600 font-bold text-xs uppercase tracking-wider shadow-sm select-none hover:border-blue-500 hover:text-blue-600 transition-colors cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CuttingMachines;
