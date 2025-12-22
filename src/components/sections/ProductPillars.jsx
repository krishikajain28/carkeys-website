import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Download,
  Cog,
  Cpu,
  Key,
  LayoutGrid,
  Car,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

// --- HELPER: Generate the array for kc1.png to kc10.png ---
// This assumes your files are in public/images/kc1.png, public/images/kc2.png, etc.
const keyCuttingImages = Array.from(
  { length: 10 },
  (_, i) => `/images/kc${i + 1}.png`
);

// --- DATA CONSTANTS ---
const PRODUCT_DATA = [
  {
    id: "cutting",
    title: "Key Cutting Machines",
    subtitle: "Precision Mechanical & CNC Solutions",
    description:
      "From heavy-duty manual duplicators to advanced automatic CNC cutters. We stock machines that are easy to use, calibrate, and built to last for years.",
    icon: Cog,
    color: "blue",
    // NOW AN ARRAY OF IMAGES
    images: keyCuttingImages,
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
      "Spare parts (belts/cutters) available",
    ],
    buttons: [
      {
        label: "View Machines",
        link: "/cutting-machines",
        type: "link",
        icon: ArrowRight,
        variant: "primary",
      },
    ],
  },
  {
    id: "programming",
    title: "Key Programming Tools",
    subtitle: "OBD Tablets & Cloning Devices",
    description:
      "Modern tablets and software to program sensor keys. Simple plug-and-play interfaces suitable for technicians with basic knowledge.",
    icon: Cpu,
    color: "indigo",
    // Single image in an array
    images: [
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1000&auto=format&fit=crop",
    ],
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
    buttons: [
      {
        label: "View Tools",
        link: "/programming-machines",
        type: "link",
        icon: ArrowRight,
        variant: "primary",
      },
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
    // Single image in an array
    images: [
      "https://images.unsplash.com/photo-1622435804770-38448eb5c6b6?q=80&w=1000&auto=format&fit=crop",
    ],
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
    buttons: [
      {
        label: "View Gallery Page",
        link: "/blank-keys",
        type: "link",
        icon: LayoutGrid,
        variant: "primary",
      },
      {
        label: "Download PDF",
        link: "/assets/catalog.pdf",
        type: "download",
        icon: Download,
        variant: "outline",
      },
    ],
  },
];

// --- SUB-COMPONENTS ---

const SpecBadge = ({ label, value }) => (
  <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg flex flex-col justify-center text-center hover:bg-white hover:shadow-sm transition-all">
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

// --- NEW: PRODUCT CARD COMPONENT (Handles Slider State Internally) ---
const ProductCard = ({ product, isReversed }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const Icon = product.icon;

  // Theme Colors
  const colorStyles = {
    blue: "bg-blue-600 shadow-blue-200 text-blue-600",
    indigo: "bg-indigo-600 shadow-indigo-200 text-indigo-600",
    emerald: "bg-emerald-600 shadow-emerald-200 text-emerald-600",
  };
  const themeColor = colorStyles[product.color];
  const bgColor = themeColor.split(" ")[0];

  // Slider Logic
  const nextImage = () => {
    setCurrentImgIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImgIndex(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };

  const hasMultipleImages = product.images.length > 1;

  return (
    <div
      className={`flex flex-col ${
        isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-12 lg:gap-20 items-start`}
    >
      {/* IMAGE / SLIDER SECTION */}
      <div className="w-full lg:w-1/2">
        <div className="relative group select-none">
          {/* Background Glow */}
          <div
            className={`absolute -inset-4 rounded-2xl opacity-20 blur-xl transition duration-500 group-hover:opacity-30 ${bgColor}`}
          ></div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-100">
            {/* The Image */}
            <img
              src={product.images[currentImgIndex]}
              alt={`${product.title} view ${currentImgIndex + 1}`}
              className="w-full h-full object-cover transform transition-transform duration-500"
            />

            {/* SLIDER CONTROLS (Only if multiple images) */}
            {hasMultipleImages && (
              <>
                {/* Left Arrow */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-lg hover:bg-white text-slate-800 transition-all z-10"
                >
                  <ChevronLeft size={24} />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-lg hover:bg-white text-slate-800 transition-all z-10"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Dots Indicator at Bottom */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {product.images.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentImgIndex ? "bg-white w-4" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Floating Info Card (Hide if slider controls are active to avoid clutter, or keep it) */}
            {!hasMultipleImages && (
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full text-white ${bgColor}`}>
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
            )}
          </div>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <div className="mb-6">
          <span
            className={`inline-block px-3 py-1 mb-4 text-xs font-bold text-white uppercase tracking-widest rounded-full ${bgColor}`}
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

        <div className="grid grid-cols-2 gap-3 mb-8">
          {product.stats.map((stat, idx) => (
            <SpecBadge key={idx} label={stat.label} value={stat.value} />
          ))}
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3 text-sm font-bold text-slate-900 uppercase tracking-wide">
            <Car size={16} className="text-slate-400" /> Compatible With:
          </div>
          <div className="flex flex-wrap gap-2">
            {product.compatibility.map((tag, idx) => (
              <CompatibilityTag key={idx} text={tag} />
            ))}
          </div>
        </div>

        <ul className="space-y-3 mb-8">
          {product.features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-slate-700 font-medium"
            >
              <CheckCircle2
                className={`mt-0.5 shrink-0 ${themeColor.split(" ")[2]}`}
                size={18}
              />
              <span className="text-sm md:text-base">{feature}</span>
            </li>
          ))}
        </ul>

        {/* DYNAMIC BUTTONS AREA */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
          {product.buttons.map((btn, btnIdx) => {
            const ButtonIcon = btn.icon;

            const baseClasses =
              "flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1 shadow-lg";
            const primaryClasses = `${bgColor} text-white hover:shadow-xl`;
            const outlineClasses =
              "bg-white border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50";

            const finalClass = `${baseClasses} ${
              btn.variant === "primary" ? primaryClasses : outlineClasses
            }`;

            if (btn.type === "download") {
              return (
                <a key={btnIdx} href={btn.link} download className={finalClass}>
                  <ButtonIcon size={20} /> {btn.label}
                </a>
              );
            } else {
              return (
                <Link key={btnIdx} to={btn.link} className={finalClass}>
                  <ButtonIcon size={20} /> {btn.label}
                </Link>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
const ProductPillars = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-24">
        {PRODUCT_DATA.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductPillars;
