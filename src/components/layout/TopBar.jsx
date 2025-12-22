import React from "react";
import { Phone, Mail } from "lucide-react";

const TopBar = () => {
  return (
    // Pitch black background for contrast against the Slate-900 header
    <div className="bg-black text-slate-400 py-2.5 px-6 text-[11px] font-bold tracking-widest uppercase border-b border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <span className="opacity-80">Automotive Hardware • Banglore HQ</span>

        <div className="flex items-center gap-6">
          <a
            href="mailto:sales@rishabhkeys.com"
            className="hover:text-white transition-colors"
          >
            sales@rishabhkeys.com
          </a>
          <span className="hidden sm:inline text-slate-700">|</span>
          <span className="text-slate-500">GST: 27ABCDE1234F1Z5</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
