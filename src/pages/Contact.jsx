import React from "react";
import TopBar from "../components/layout/TopBar";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Phone, MapPin, Mail, MessageCircle } from "lucide-react";

const ContactItem = ({ icon: Icon, title, value, link, colorClass }) => (
  <a
    href={link}
    className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-500 transition-colors group"
  >
    <div className={`p-4 rounded-full text-white ${colorClass}`}>
      <Icon size={24} />
    </div>
    <div>
      <h3 className="font-bold text-gray-500 text-sm uppercase tracking-wider">
        {title}
      </h3>
      <p className="text-xl md:text-2xl font-black text-gray-900 group-hover:text-blue-700 transition-colors">
        {value}
      </p>
    </div>
  </a>
);

const Contact = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <TopBar />
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Have a doubt about a machine? Call us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <ContactItem
            icon={Phone}
            title="Call Us Directly"
            value="+91 98765 43210"
            link="tel:+919876543210"
            colorClass="bg-blue-600"
          />
          <ContactItem
            icon={MessageCircle}
            title="WhatsApp Support"
            value="Chat on WhatsApp"
            link="https://wa.me/919876543210"
            colorClass="bg-green-500"
          />
          <ContactItem
            icon={Mail}
            title="Email Sales"
            value="sales@rishabhkeys.com"
            link="mailto:sales@rishabhkeys.com"
            colorClass="bg-red-500"
          />
          <ContactItem
            icon={MapPin}
            title="Visit Our Shop"
            value="Grant Road, Mumbai"
            link="#"
            colorClass="bg-gray-800"
          />
        </div>

        {/* Simple Map Placeholder */}
        <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center border border-gray-300">
          <span className="text-gray-500 font-bold">
            Google Map Integration Here
          </span>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
