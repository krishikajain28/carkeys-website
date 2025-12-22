import React from "react";
// notice we removed "components/" from the path because we are already in components
import TopBar from "../layout/TopBar";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ProductCard from "../ui/ProductCard"; // Import from same folder
import { Download } from "lucide-react";

const CuttingMachines = () => {
  // Mock Data (Replace with real JSON later)
  const machines = [
    {
      id: 1,
      name: "Automatic Key Cutter X1",
      desc: "High precision automatic cutter for laser keys.",
    },
    {
      id: 2,
      name: "Manual Duplicator Pro",
      desc: "Heavy duty manual machine for standard house keys.",
    },
    {
      id: 3,
      name: "Vertical Milling Master",
      desc: "Specialized for dimple keys and high security locks.",
    },
    {
      id: 4,
      name: "Portable Battery Cutter",
      desc: "Mobile solution for van-based locksmiths.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <TopBar />
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-200 pb-8">
          <div>
            <h1 className="text-3xl font-black text-gray-900 mb-2">
              Key Cutting Machines
            </h1>
            <p className="text-gray-600 max-w-xl">
              We stock over 20 varieties of cutting machines, from manual
              duplicators to fully automatic CNC units.
            </p>
          </div>

          {/* Main Catalog CTA */}
          <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 shadow-md whitespace-nowrap">
            <Download size={20} /> Download Full Catalog (PDF)
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {machines.map((machine) => (
            <ProductCard
              key={machine.id}
              name={machine.name}
              description={machine.desc}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CuttingMachines;
