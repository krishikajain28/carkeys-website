import React from "react";
import TopBar from "../components/layout/TopBar";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <TopBar />
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-black text-blue-900 mb-8 uppercase tracking-tight">
          About Rishabh Keys
        </h1>

        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            <strong>Welcome to Rishabh Keys.</strong> We are a wholesale
            automotive locksmith supplier based in Mumbai, dedicated to serving
            key makers across India.
          </p>

          <p>
            Our business is built on three main pillars:{" "}
            <strong>Key Cutting</strong>, <strong>Key Programming</strong>, and
            providing high-quality <strong>Blank Keys</strong>. We understand
            that in this trade, precision and reliability are everything. That
            is why we only stock machines and tools that we trust.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">Our Mission</h2>
          <p>
            Our goal is simple: To provide affordable, professional-grade tools
            to help you start or grow your key cutting business. Whether you
            need a manual duplicator for house keys or an advanced tablet for
            programming smart car keys, we have the catalog to support you.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">
            Why Choose Us?
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Over 20 years of experience in the hardware industry.</li>
            <li>Huge inventory of 500+ key varieties.</li>
            <li>Direct support and guidance for new businessmen.</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
 