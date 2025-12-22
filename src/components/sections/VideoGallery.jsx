import React from "react";
import { Youtube } from "lucide-react";

const VideoGallery = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-10 justify-center">
        <Youtube size={36} className="text-red-600" />
        <h2 className="text-3xl font-bold text-gray-900">Machine Demos</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Video Placeholder 1 */}
        <div className="aspect-video bg-black rounded-xl overflow-hidden relative group cursor-pointer shadow-md hover:shadow-xl transition-shadow">
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white pl-1 group-hover:scale-110 transition-transform">
              <Youtube size={32} fill="white" />
            </div>
          </div>
          <span className="absolute bottom-4 left-4 text-white font-bold z-10 text-lg drop-shadow-md">
            Unboxing: X9 Cutting Machine
          </span>
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
        </div>

        {/* Video Placeholder 2 */}
        <div className="aspect-video bg-black rounded-xl overflow-hidden relative group cursor-pointer shadow-md hover:shadow-xl transition-shadow">
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white pl-1 group-hover:scale-110 transition-transform">
              <Youtube size={32} fill="white" />
            </div>
          </div>
          <span className="absolute bottom-4 left-4 text-white font-bold z-10 text-lg drop-shadow-md">
            Tutorial: Programming Honda Keys
          </span>
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
