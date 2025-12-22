import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // IMPORT ANIMATION LIBRARY
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

// --- 1. HELPER: DYNAMIC IMAGE GENERATOR ---
// Since you have the images, this works perfectly now.
// Ensure your images are in public/images/ folder named kc1.png, kc2.png...
const generateImageArray = (prefix, count) =>
  Array.from({ length: count }, (_, i) => `/images/${prefix}${i + 1}.png`);

const KC_IMAGES = generateImageArray("kc", 10);
const KP_IMAGES = generateImageArray("kp", 10);
const BK_IMAGES = generateImageArray("bk", 10);

// --- 2. DATA CONSTANTS ---
const PRODUCT_DATA = [
  {
    id: "cutting",
    title: "Key Cutting Machines",
    subtitle: "Precision Mechanical & CNC Solutions",
    description:
      "From heavy-duty manual duplicators to advanced automatic CNC cutters. We stock machines that are easy to use, calibrate, and built to last for years.",
    icon: Cog,
    color: "blue",
    images: KC_IMAGES,
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
    images: KP_IMAGES,
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
    images: BK_IMAGES,
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
        label: "View Keys",
        link: "/blank-keys",
        type: "link",
        icon: LayoutGrid,
        variant: "primary",
      },
      {
        label: "Download Brochure",
        link: "/assets/catalog.pdf",
        type: "download",
        icon: Download,
        variant: "outline",
      },
    ],
  },
];

// --- 3. SUB-COMPONENTS ---

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

// --- 4. PRODUCT CARD COMPONENT (With Animation Wrapper) ---
const ProductCard = ({ product, isReversed }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const Icon = product.icon;

  const colorStyles = {
    blue: "bg-blue-600 shadow-blue-200 text-blue-600",
    indigo: "bg-indigo-600 shadow-indigo-200 text-indigo-600",
    emerald: "bg-emerald-600 shadow-emerald-200 text-emerald-600",
  };
  const themeColor = colorStyles[product.color];
  const bgColor = themeColor.split(" ")[0];

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
    // ANIMATION WRAPPER: This makes the section Fade Up as you scroll
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }} // Triggers when 100px into view, only once
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth, slow ease
      className={`flex flex-col ${
        isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-12 lg:gap-20 items-start`}
    >
      {/* IMAGE / SLIDER SECTION */}
      <div className="w-full lg:w-1/2">
        <div className="relative group select-none">
          <div
            className={`absolute -inset-4 rounded-2xl opacity-20 blur-xl transition duration-500 group-hover:opacity-30 ${bgColor}`}
          ></div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-100">
            <img
              src={product.images[currentImgIndex]}
              alt={`${product.title} view ${currentImgIndex + 1}`}
              className="w-full h-full object-cover transform transition-transform duration-500"
              // Fallback if image fails to load
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=800";
              }}
            />

            {hasMultipleImages && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white text-slate-900 transition-all z-20 hover:scale-110"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white text-slate-900 transition-all z-20 hover:scale-110"
                >
                  <ChevronRight size={24} />
                </button>

                <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {product.images.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1.5 rounded-full transition-all shadow-sm ${
                        idx === currentImgIndex
                          ? `w-6 ${bgColor}`
                          : "w-2 bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}

            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-100 flex items-center justify-between z-10">
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
              {hasMultipleImages && (
                <div className="bg-slate-100 px-3 py-1 rounded-md text-xs font-bold text-slate-500">
                  {currentImgIndex + 1} / {product.images.length}
                </div>
              )}
            </div>
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
    </motion.div>
  );
};

// --- MAIN PAGE COMPONENT ---
const ProductPillars = () => {
  return (
    <section
      className="bg-white py-20 px-4 md:px-8 overflow-hidden"
      id="product-pillars"
    >
      <div className="max-w-7xl mx-auto space-y-32">
        {" "}
        {/* Increased vertical spacing for better scroll feel */}
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
