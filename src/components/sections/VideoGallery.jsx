import React from "react";
import { Youtube, Play } from "lucide-react";
import { motion } from "framer-motion";

const VIDEOS = [
  {
    id: 1,
    title: "Unboxing: X9 CNC Machine",
    // Fetches the REAL high-res thumbnail from YouTube using the ID 'WafXJVkPGKA'
    image: "https://img.youtube.com/vi/WafXJVkPGKA/maxresdefault.jpg",
    link: "https://youtu.be/WafXJVkPGKA?si=OkEUegEEcWNdYMMS",
  },
  {
    id: 2,
    title: "Tutorial: Honda Key Programming",
    // Fetches the REAL high-res thumbnail from YouTube using the ID 'ox1O_hN2o24'
    image: "https://img.youtube.com/vi/ox1O_hN2o24/maxresdefault.jpg",
    link: "https://youtu.be/ox1O_hN2o24?si=bq0OaO4srQx5xCGV",
  },
];

const VideoGallery = () => {
  return (
    <section className="py-24 px-6 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <div className="p-3 bg-red-50 rounded-full mb-6">
            <Youtube size={32} className="text-red-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">
            Machine <span className="text-red-600">Demos</span>
          </h2>
          <p className="text-slate-500 font-bold text-xs uppercase tracking-[0.2em]">
            Watch our equipment in action
          </p>
          <div className="w-20 h-1 bg-slate-200 mt-8 rounded-full"></div>
        </motion.div>

        {/* VIDEO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {VIDEOS.map((video, index) => (
            <motion.a
              key={video.id}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 cursor-pointer block"
            >
              {/* Thumbnail Image (Zoom Effect on Hover) */}
              <img
                src={video.image}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 ease-out"
              />

              {/* Dark Gradient Overlay - Ensures text is readable over the thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90"></div>

              {/* Play Button (Pulse Effect) */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="relative">
                  {/* Pulsing Ring */}
                  <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-20"></div>
                  {/* The Button */}
                  <div className="relative w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300 shadow-xl">
                    <Play size={32} fill="currentColor" className="ml-1" />
                  </div>
                </div>
              </div>

              {/* Text Label */}
              <div className="absolute bottom-0 left-0 p-8 w-full z-20">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-red-500 font-black text-[10px] uppercase tracking-widest mb-2 block">
                    Now Playing
                  </span>
                  <h3 className="text-white font-bold text-xl md:text-2xl leading-tight">
                    {video.title}
                  </h3>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
