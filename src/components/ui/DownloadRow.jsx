import React from "react";
import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

const DownloadRow = ({ title, size, category }) => {
  // Animation for individual row
  const rowItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      variants={rowItem}
      className="group flex flex-col md:flex-row items-center justify-between p-6 md:p-8 transition-all hover:bg-slate-50 cursor-pointer"
    >
      <div className="flex items-center gap-6 mb-4 md:mb-0">
        <div className="w-14 h-14 bg-slate-900 text-white flex items-center justify-center rounded-xl group-hover:bg-blue-600 transition-colors shadow-lg">
          <FileText size={24} />
        </div>
        <div>
          <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block mb-1">
            {category}
          </span>
          <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight group-hover:text-blue-700 transition-colors">
            {title}
          </h3>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">
            PDF Document • {size}
          </p>
        </div>
      </div>

      <button className="flex items-center gap-3 bg-slate-100 text-slate-900 px-6 py-3 rounded-lg font-black text-xs uppercase tracking-[0.2em] group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
        Download <Download size={16} />
      </button>
    </motion.div>
  );
};

export default DownloadRow;
