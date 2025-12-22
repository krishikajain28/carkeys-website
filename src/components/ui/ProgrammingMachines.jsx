import React from "react";
import TopBar from "../layout/TopBar";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ProductCard from "../ui/ProductCard";
import { Download } from "lucide-react";

const ProgrammingMachines = () => {
  // Mock Data for Programming Tools
  const machines = [
    {
      id: 1,
      name: "OBD Smart Programmer",
      desc: "Universal tablet for coding remotes via OBD port.",
    },
    {
      id: 2,
      name: "Transponder Chip Cloner",
      desc: "Clones 4D/46/48 chips in seconds. Standalone unit.",
    },
    {
      id: 3,
      name: "Remote Frequency Tester",
      desc: "Digital frequency checker (315Mhz - 868Mhz).",
    },
    {
      id: 4,
      name: "EPROM Adapter Kit",
      desc: "Advanced soldering kit for ECU programming.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <TopBar />
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-200 pb-8">
          <div>
            <h1 className="text-3xl font-black text-gray-900 mb-2">
              Key Programming Tools
            </h1>
            <p className="text-gray-600 max-w-xl">
              Advanced tablets and software for programming car sensors,
              remotes, and smart keys.
            </p>
          </div>

          <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 shadow-md">
            <Download size={20} /> Download Tool Catalog (PDF)
          </button>
        </div>

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

export default ProgrammingMachines;
