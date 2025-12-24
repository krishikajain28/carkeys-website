import React from "react";
import {
  Target,
  Users,
  Award,
  Truck,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* 1. HERO HEADER: Corporate & Clean */}
      <section className="bg-slate-900 py-24 px-6 border-b border-slate-800 relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-8">
            Since 2005
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight">
            Empowering India's <br />
            <span className="text-blue-500">Locksmith Community</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Rishabh Keys is Mumbai's premier wholesale distributor for
            automotive security solutions. We bridge the gap between global
            technology and local craftsmanship.
          </p>
        </div>
      </section>

      {/* 2. STATS ROW: The "Trust Markers" */}
      <div className="bg-blue-600 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <div className="space-y-2">
            <h3 className="text-4xl font-black">20+</h3>
            <p className="text-blue-100 text-xs font-bold uppercase tracking-widest">
              Years Experience
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-black">500+</h3>
            <p className="text-blue-100 text-xs font-bold uppercase tracking-widest">
              Wholesale Partners
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-black">10k+</h3>
            <p className="text-blue-100 text-xs font-bold uppercase tracking-widest">
              Products In Stock
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-black">100%</h3>
            <p className="text-blue-100 text-xs font-bold uppercase tracking-widest">
              Genuine Parts
            </p>
          </div>
        </div>
      </div>

      {/* 3. MAIN NARRATIVE: The "Professional Fill" */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
                More Than Just a Supplier. <br />
                <span className="text-blue-600">
                  We Are Your Growth Partner.
                </span>
              </h2>
              <div className="w-20 h-1.5 bg-blue-600 mb-8"></div>

              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Founded in the heart of Mumbai's hardware district, Rishabh
                  Keys started with a simple mission: to provide Indian key
                  makers with access to world-class tools without the import
                  hassle.
                </p>
                <p>
                  Today, the automotive landscape is changing. Traditional
                  mechanical keys are being replaced by smart remotes,
                  transponder chips, and encrypted systems.
                  <strong> We ensure you don't get left behind.</strong>
                </p>
                <p>
                  We don't just sell boxes; we provide the technical
                  ecosystem—machines, software, and raw materials—required to
                  run a modern, profitable locksmith business.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-slate-900 font-black uppercase tracking-widest border-b-2 border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors"
              >
                Partner With Us <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          {/* Visual/Image Placeholder (Professional Abstract) */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 rounded-3xl transform rotate-3 opacity-10"></div>
            <div className="relative bg-white p-2 rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100">
              {/* Ideally, put a photo of your shop/office here. For now, a high-end placeholder */}
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                alt="Precision Engineering"
                className="rounded-2xl w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />

              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg max-w-xs border border-white/50">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="text-blue-600" size={24} />
                  <span className="font-bold text-slate-900 uppercase text-xs tracking-wider">
                    Quality Assurance
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Every machine is tested by our technicians before dispatch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VALUES GRID: Why Choose Us */}
      <section className="bg-white py-24 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-4">
              Why Professionals Choose Us
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              We understand that in this trade, precision and reliability are
              everything.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl border border-slate-100 transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Target size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Precision Inventory
              </h3>
              <p className="text-slate-500 leading-relaxed">
                We stock over 500 varieties of keys. From Maruti 800 to Audi
                smart keys, if it's on the road, we have the blank for it.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl border border-slate-100 transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Technical Expertise
              </h3>
              <p className="text-slate-500 leading-relaxed">
                We don't just sell; we guide. Our team helps you choose the
                right machine for your budget and provides basic setup guidance.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl border border-slate-100 transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Truck size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Pan-India Logistics
              </h3>
              <p className="text-slate-500 leading-relaxed">
                Based in Mumbai, connected to India. We have established
                logistics partners to ensure safe delivery to every corner of
                the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="bg-slate-900 py-20 px-6 text-center">
        <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6">
          Ready to Upgrade Your Setup?
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg">
          Join 500+ professionals who trust Rishabh Keys for their daily
          hardware needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest transition-all shadow-lg shadow-blue-900/50">
              Contact Sales
            </button>
          </Link>
          <Link to="/blank-keys">
            <button className="w-full sm:w-auto bg-transparent border border-slate-600 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
              View Products
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
