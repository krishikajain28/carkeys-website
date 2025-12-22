import React from "react";
import { ArrowRight } from "lucide-react";

const CategoryCard = ({ title, desc, icon: Icon, colorClass }) => {
  return (
    <div className="group h-full bg-white rounded-xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden cursor-pointer border border-slate-100">
      {/* 1. Top Accent Line (The "Professional" Touch) */}
      <div className={`absolute top-0 left-0 w-full h-1.5 ${colorClass}`}></div>

      {/* 2. Icon Box: Solid color square with white icon */}
      <div
        className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 shadow-lg ${colorClass} text-white`}
      >
        <Icon size={28} strokeWidth={2} />
      </div>

      {/* 3. Title: Heavy, Dark, Industrial font */}
      <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight group-hover:text-blue-800 transition-colors">
        {title}
      </h3>

      {/* 4. Description: Clean Slate Grey, easy to read */}
      <p className="text-slate-500 mb-8 text-sm leading-relaxed font-medium">
        {desc}
      </p>

      {/* 5. Bottom Action Link: Small, Technical style */}
      <div className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-blue-700 transition-colors">
        Open Catalog{" "}
        <ArrowRight
          size={14}
          className="group-hover:translate-x-1 transition-transform"
        />
      </div>
    </div>
  );
};

export default CategoryCard;
