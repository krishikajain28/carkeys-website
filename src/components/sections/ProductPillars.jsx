import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  Cog,
  Cpu,
  Key,
  Info,
  Car,
} from "lucide-react";

// --- DATA CONSTANTS (Senior Devs separate data from the view) ---
const PRODUCT_DATA = [
  {
    id: "cutting",
    title: "Key Cutting Machines",
    subtitle: "Precision Mechanical & CNC Solutions",
    description:
      "From heavy-duty manual duplicators to advanced automatic CNC cutters. We stock machines that are easy to use, calibrate, and built to last for years of daily rough usage.",
    icon: Cog,
    color: "blue",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62496096b?q=80&w=1000&auto=format&fit=crop",
    link: "/cutting-machines",
    actionType: "link", // Options: 'link' or 'download'
    stats: [
      { label: "Stock Status", value: "20+ Models Ready" },
      { label: "Operation", value: "Manual & Automatic" },
      { label: "Warranty", value: "1 Year On-Site" },
      { label: "Voltage", value: "220V / 50Hz" },
    ],
    compatibility: [
      "Double Sided Keys",
      "Laser Keys",
      "Dimple Keys",
      "Tibbe Keys",
    ],
    features: [
      "High-precision cutter calibration",
      "Built-in light for night work",
      "Spare parts (belts/cutters) always available",
    ],
  },
  {
    id: "programming",
    title: "Key Programming Tools",
    subtitle: "OBD Tablets & Cloning Devices",
    description:
      "Modern tablets and software to program sensor keys and immobilizers. These devices feature simple plug-and-play interfaces suitable for technicians with basic knowledge.",
    icon: Cpu,
    color: "indigo",
    image:
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1000&auto=format&fit=crop",
    link: "/programming-machines",
    actionType: "link",
    stats: [
      { label: "Inventory", value: "10+ Variants" },
      { label: "Updates", value: "Lifetime Free via WiFi" },
      { label: "Interface", value: "Touch Screen" },
      { label: "Language", value: "English / Hindi" },
    ],
    compatibility: [
      "Maruti Suzuki",
      "Hyundai / Kia",
      "Toyota / Honda",
      "Luxury (German)",
    ],
    features: [
      "Read & Clear Error Codes",
      "Generate Universal Remotes",
      "Detect Remote Frequency (MHz)",
    ],
  },
  {
    id: "blanks",
    title: "Blank Keys & Remotes",
    subtitle: "Wholesale Raw Materials",
    description:
      "The raw material for your business. We hold the largest wholesale catalog of key shells, flip keys, and smart remotes. Order in bulk for the best margins.",
    icon: Key,
    color: "emerald",
    image:
      "https://images.unsplash.com/photo-1622435804770-38448eb5c6b6?q=80&w=1000&auto=format&fit=crop",
    link: "/assets/catalog.pdf",
    actionType: "download", // This triggers the PDF download logic
    stats: [
      { label: "Catalog Size", value: "500+ Varieties" },
      { label: "Quality", value: "OEM Grade Plastic" },
      { label: "MOQ", value: "10 Pieces" },
      { label: "Shipping", value: "All India Delivery" },
    ],
    compatibility: ["Flip Keys", "Smart Remotes", "Key Shells", "Button Pads"],
    features: [
      "Perfect fit for original circuit boards",
      "Durable rubber buttons",
      "Includes logos and emergency blades",
    ],
  },
];

// --- REUSABLE SUB-COMPONENTS ---

const SpecBadge = ({ label, value }) => (
  <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg flex flex-col justify-center">
    <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-1">
      {label}
    </span>
    <span className="text-sm font-bold text-slate-900 leading-tight">
      {value}
    </span>
  </div>
);

const CompatibilityTag = ({ text }) => (
  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
    {text}
  </span>
);

// --- MAIN COMPONENT ---

const ProductPillars = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-24">
        {PRODUCT_DATA.map((product, index) => {
          const isReversed = index % 2 !== 0; // Alternates layout automatically
          const Icon = product.icon;

          // Dynamic colors based on the data
          const colorStyles = {
            blue: "bg-blue-600 shadow-blue-200",
            indigo: "bg-indigo-600 shadow-indigo-200",
            emerald: "bg-emerald-600 shadow-emerald-200",
          };
          const btnColor = colorStyles[product.color] || colorStyles.blue;

          return (
            <div
              key={product.id}
              className={`flex flex-col ${
                isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-12 lg:gap-20 items-start`}
            >
              {/* IMAGE SECTION */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  {/* Decorative backdrop */}
                  <div
                    className={`absolute -inset-4 rounded-2xl opacity-20 blur-xl transition duration-500 group-hover:opacity-30 ${
                      btnColor.split(" ")[0]
                    }`}
                  ></div>

                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-2xl bg-white">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Floating Info Card on Image */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-full text-white ${
                            btnColor.split(" ")[0]
                          }`}
                        >
                          <Icon size={20} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-500 uppercase">
                            Category
                          </p>
                          <p className="text-sm font-black text-slate-900">
                            {product.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CONTENT SECTION */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                {/* Header */}
                <div className="mb-6">
                  <span
                    className={`inline-block px-3 py-1 mb-4 text-xs font-bold text-white uppercase tracking-widest rounded-full ${
                      btnColor.split(" ")[0]
                    }`}
                  >
                    {product.subtitle}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight">
                    {product.title}
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Technical Specs Grid */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {product.stats.map((stat, idx) => (
                    <SpecBadge
                      key={idx}
                      label={stat.label}
                      value={stat.value}
                    />
                  ))}
                </div>

                {/* Compatibility / Works With */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3 text-sm font-bold text-slate-900 uppercase tracking-wide">
                    <Car size={16} className="text-slate-400" /> Compatible
                    With:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.compatibility.map((tag, idx) => (
                      <CompatibilityTag key={idx} text={tag} />
                    ))}
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-slate-700 font-medium"
                    >
                      <CheckCircle2
                        className={`mt-0.5 shrink-0 ${
                          product.color === "emerald"
                            ? "text-emerald-500"
                            : "text-blue-500"
                        }`}
                        size={18}
                      />
                      <span className="text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Call to Action */}
                <div className="pt-4 border-t border-slate-100">
                  {product.actionType === "download" ? (
                    <a
                      href={product.link}
                      download
                      className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 ${
                        btnColor.split(" ")[0]
                      }`}
                    >
                      <Download size={20} /> Download Catalog (PDF)
                    </a>
                  ) : (
                    <Link to={product.link}>
                      <button
                        className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 ${
                          btnColor.split(" ")[0]
                        }`}
                      >
                        View Available Models <ArrowRight size={20} />
                      </button>
                    </Link>
                  )}
                  <p className="mt-3 text-xs text-slate-400 font-medium text-center lg:text-left">
                    {product.actionType === "download"
                      ? "*Updated Monthly"
                      : "*Includes Video Demos"}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductPillars;
