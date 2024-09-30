import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Import ikonica iz react-icons

const About: React.FC = () => {
  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow-md">
      <h2 className="text-2xl font-bold mb-4">About Us</h2>
      <p className="mb-6">
        We are a small shop providing the best products at affordable prices.
      </p>

      {/* Kontakt informacije */}
      <div className="space-y-4">
        {/* Email */}
        <div className="flex items-center">
          <FaEnvelope className="text-blue-500 mr-3" />
          <span className="text-gray-700">matijasevic.pavle99@gmail.com</span>
        </div>

        {/* Telefon */}
        <div className="flex items-center">
          <FaPhone className="text-blue-500 mr-3" />
          <span className="text-gray-700">+123 456 7890</span>
        </div>

        {/* Adresa */}
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-blue-500 mr-3" />
          <span className="text-gray-700">Arandjelovac 34300, Kralja Petra I br 40</span>
        </div>
      </div>
    </div>
  );
};

export default About;
