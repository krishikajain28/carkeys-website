import React from "react";
import TopBar from "../layout/TopBar";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Download, FileText } from "lucide-react";

const BlankKeys = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <TopBar />
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-10 border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-black text-gray-900 mb-2">
            Blank Keys (Raw Material)
          </h1>
          <p className="text-gray-600 max-w-2xl">
            We stock over 500 varieties of key shells, blades, and remotes for
            Honda, Toyota, Maruti, Hyundai, and more.
          </p>
        </div>

        {/* Large Call To Action for PDF */}
        <div className="bg-blue-900 rounded-2xl p-8 md:p-12 text-center text-white mb-16 shadow-xl">
          <div className="inline-block p-4 bg-blue-800 rounded-full mb-6">
            <FileText size={48} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            View the Complete Collection
          </h2>
          <p className="text-blue-200 max-w-lg mx-auto mb-8 text-lg">
            Because our inventory is so large (500+ items), we recommend
            downloading our full visual catalog to find the exact key blade you
            need.
          </p>
          <button className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl font-black text-xl hover:bg-yellow-300 transition-colors shadow-lg hover:shadow-yellow-400/20">
            <Download size={24} /> Download 2025 Catalog (12MB)
          </button>
        </div>

        {/* Brand List (Simple Text) */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest mb-6">
            Brands We Cover
          </h3>
          <div className="flex flex-wrap justify-center gap-4 text-gray-500 font-bold">
            <span className="bg-white px-4 py-2 rounded border">Honda</span>
            <span className="bg-white px-4 py-2 rounded border">Toyota</span>
            <span className="bg-white px-4 py-2 rounded border">Suzuki</span>
            <span className="bg-white px-4 py-2 rounded border">Hyundai</span>
            <span className="bg-white px-4 py-2 rounded border">Mahindra</span>
            <span className="bg-white px-4 py-2 rounded border">Tata</span>
            <span className="bg-white px-4 py-2 rounded border">
              Volkswagen
            </span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlankKeys;
