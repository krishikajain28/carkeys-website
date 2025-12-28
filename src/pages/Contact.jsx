import React from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* 1. HERO HEADER: Clean separation, no overlap */}
      <section className="bg-slate-900 pt-36 pb-24 px-6 border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-8">
            24/7 Support
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Get in <span className="text-blue-500">Touch</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Have a question about a key machine or need a bulk price list? Our
            sales team is ready to assist you.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT GRID: Standard padding, perfectly spaced */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT COLUMN: Contact Info Cards */}
          <div className="space-y-8">
            {/* WhatsApp Card (High Priority) */}
            <div className="bg-green-600 rounded-2xl p-8 shadow-xl shadow-green-900/10 text-white flex items-center justify-between gap-4 group cursor-pointer hover:bg-green-500 transition-colors">
              <div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-1">
                  Chat on WhatsApp
                </h3>
                <p className="text-green-100 font-medium text-sm">
                  Fastest response (9 AM - 9 PM)
                </p>
              </div>
              <div className="p-3 bg-white/20 rounded-full group-hover:scale-110 transition-transform">
                <MessageCircle size={32} />
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:border-blue-300 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Visit Our Showroom
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4 text-sm md:text-base">
                    Shop No. 12, Industrial Estate,
                    <br />
                    Grant Road East,
                    <br />
                    Mumbai, Maharashtra 400007
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Grant+Road+East+Mumbai"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 font-bold text-xs uppercase tracking-wider hover:underline flex items-center gap-1"
                  >
                    Get Directions &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Phone & Email Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:border-blue-300 transition-colors">
                <div className="p-2 bg-slate-100 w-fit rounded-lg mb-4 text-slate-700">
                  <Phone size={20} />
                </div>
                <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wide">
                  Call Us
                </h3>
                <a
                  href="tel:+919876543210"
                  className="text-slate-500 font-medium hover:text-blue-600 transition-colors block mt-1"
                >
                  +91 98765 43210
                </a>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:border-blue-300 transition-colors">
                <div className="p-2 bg-slate-100 w-fit rounded-lg mb-4 text-slate-700">
                  <Mail size={20} />
                </div>
                <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wide">
                  Email Us
                </h3>
                <a
                  href="mailto:sales@rishabhkeys.com"
                  className="text-slate-500 font-medium hover:text-blue-600 transition-colors block mt-1"
                >
                  sales@rishabhkeys.com
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 p-8 md:p-10">
            <h3 className="text-2xl font-black text-slate-900 mb-6">
              Send a Message
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium text-slate-700"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium text-slate-700"
                    placeholder="+91 98..."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Subject
                </label>
                <div className="relative">
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium text-slate-700 appearance-none">
                    <option>Inquiry about Blank Keys</option>
                    <option>Inquiry about Cutting Machines</option>
                    <option>Programming Support</option>
                    <option>Other</option>
                  </select>
                  {/* Custom arrow for styling consistency */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium text-slate-700"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 3. GOOGLE MAPS EMBED */}
      <section className="h-96 w-full bg-slate-200 relative border-t border-slate-200">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.123456789!2d72.8!3d18.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40wMDA!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
