import React from "react";
import { motion } from "framer-motion";
import { Download, FileText, ArrowRight } from "lucide-react";
import DownloadRow from "../ui/DownloadRow";

const Downloads = () => {
  // Animation settings for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // This makes rows appear one after another
      },
    },
  };

  return (
    <section
      id="catalog-section"
      className="bg-slate-50 py-24 px-6 border-t border-slate-200"
    >
      <div className="max-w-5xl mx-auto">
        {/* SECTION HEADER: Focused on 30-50 age group clarity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-black text-xs uppercase tracking-[0.3em] mb-4 block">
            Digital Resources
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6">
            Product <span className="text-blue-600">Catalogs</span>
          </h2>
          <p className="text-slate-500 font-medium max-w-xl mx-auto uppercase text-xs tracking-widest leading-loose">
            Download our latest 2025 price lists and technical specifications.
            All files are in high-resolution PDF format.
          </p>
          <div className="w-16 h-1 bg-slate-900 mx-auto mt-8"></div>
        </motion.div>

        {/* THE DOWNLOAD LIST: Staggered Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-200 overflow-hidden"
        >
          <DownloadRow
            title="Full Blank Keys Catalog (2025)"
            size="12.5 MB"
            category="Master Inventory"
          />
          <div className="h-[1px] bg-slate-100 mx-8" />

          <DownloadRow
            title="Key Cutting Machine Brochure"
            size="4.2 MB"
            category="Hardware Specifications"
          />
          <div className="h-[1px] bg-slate-100 mx-8" />

          <DownloadRow
            title="Programming Tools & Tablets"
            size="3.1 MB"
            category="Software & OBD"
          />
        </motion.div>

        {/* HELPLINE CALLOUT: Important for your target audience */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            Need a printed copy?{" "}
            <span className="text-blue-600 cursor-pointer hover:underline ml-2">
              Request via WhatsApp
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Downloads;
