import React from "react";
import TopBar from "../components/layout/TopBar";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import Hero from "../components/sections/Hero";
import ProductPillars from "../components/sections/ProductPillars";
import Downloads from "../components/sections/Downloads";
import VideoGallery from "../components/sections/VideoGallery";

const Home = () => {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      <TopBar />
      <Header />

      <main>
        <Hero />
        <ProductPillars />
        <Downloads />
        <VideoGallery />

        {/* About Placeholder (Simple Text Section) */}
        <section className="bg-gray-900 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">
              About Rishabh Keys
            </h2>
            <p className="leading-relaxed text-gray-300">
              We are a trusted name in the automotive security industry. With
              over 20 years of experience, we supply high-quality cutting
              machines and programming tools to locksmiths across India.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
