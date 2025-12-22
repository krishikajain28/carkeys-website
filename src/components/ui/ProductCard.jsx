import React from "react";

const ProductCard = ({ name, image, description }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      {/* Image Placeholder */}
      <div className="h-48 bg-gray-100 flex items-center justify-center border-b border-gray-100">
        {image ? (
          <img src={image} alt={name} className="h-full w-full object-cover" />
        ) : (
          <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">
            No Image
          </span>
        )}
      </div>

      <div className="p-6">
        <h3 className="font-bold text-lg text-gray-900 mb-2">{name}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>
        <button className="w-full bg-gray-900 text-white py-2 rounded font-bold text-sm uppercase tracking-wide hover:bg-blue-600 transition-colors">
          Enquire Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
