import React from "react";
import { motion } from "framer-motion";
import google from "../assets/google.jpg";
import cyber from "../assets/cyber secrituy.jpg";
import pyton from "../assets/pyton 2.jpg";
import ccn from "../assets/ccn 3.jpg";
import LOR from "../assets/LOR.jpg";

const certificates = [
  {
    title: "Google AI Builder Lab",
    issuer: "Google for Developers",
    year: "2024",
    image: google,
  },
  
  {
    title: "Introduction to CyberSecurity",
    issuer: "CISCO Networking Academy",
    year: "2024",
    image: cyber,
  },
  {
    title: " Python Essentials 2",
    issuer: "Python PI Institute",
    year: "2025",
    image: pyton,
  },
  {
    title: "CCNA: Enterprise Networking, Security, and Automation",
    issuer: "CISCO Networking Academy",
    year: "2025",
    image: ccn,
  },
  {
    title:"letter of recommendation",
    issuer: "Wyreflow Technologies",
    year: "2025",
    image: LOR,
  },
];

const Certificate = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="text-white text-3xl font-bold mb-8">Certificates</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-[#1d1836] text-white p-5 rounded-xl shadow-md border border-purple-600"
          >
            {cert.image ? (
              <motion.img
                src={cert.image}
                alt={cert.title}
                className="w-full sm:w-58 h-auto object-contain rounded-lg border border-gray-600"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            ) : (
              <div className="w-full sm:w-58 h-48 bg-gray-700 rounded-lg flex items-center justify-center text-sm text-gray-400">
                No Image
              </div>
            )}

            {/* TEXT CONTENT - VISIBLE ON MOBILE, HIDDEN ON LAPTOP */}
            <div className="text-center sm:text-left block sm:hidden">
              <h3 className="text-xl font-semibold">{cert.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{cert.issuer}</p>
              <p className="text-sm mt-1 text-teal-400">{cert.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
