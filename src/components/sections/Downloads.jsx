import React from "react";
import { Download } from "lucide-react";
import DownloadRow from "../ui/DownloadRow"; // Importing the UI component

const Downloads = () => {
  return (
    <section className="bg-blue-50 py-16 px-4 border-y border-blue-100">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8 justify-center sm:justify-start">
          <div className="p-3 bg-blue-100 rounded-full text-blue-700">
            <Download size={32} />
          </div>
          <h2 className="text-3xl font-bold text-blue-900">Product Catalogs</h2>
        </div>

        <p className="mb-8 text-gray-700 text-center sm:text-left text-lg">
          Download our full price lists and product brochures in PDF format.
          Updated for 2025.
        </p>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <DownloadRow title="Full Blank Keys Catalog (2025)" size="12.5 MB" />
          <DownloadRow title="Key Cutting Machine Brochure" size="4.2 MB" />
          <DownloadRow title="Programming Tools & Tablets" size="3.1 MB" />
        </div>
      </div>
    </section>
  );
};

export default Downloads;
