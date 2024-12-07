import React from "react";
import Logo from "../assets/png/Logo.png";
import Whatsapp from "../assets/png/whatsapp.png";
import Tiktok from "../assets/png/tiktok.png";
import Instagram from "../assets/png/instagram.png";

const Footer = () => {
  return (
    <div className="bg-primary text-white">
    <div className="container mx-auto px-4 py-10 md:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Logo and Contact Section */}
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center space-x-3">
            <img 
              src={Logo}
              alt="EcoMate Logo" 
              className="w-12 h-12" 
            />
            <h5 className="text-2xl font-bold">EcoMate</h5>          
          </div>

          <p className="text-base">
            Jl. Ahmad Dahlan no.23, Kebumen, Jawa Tengah 54311 
          </p>

          <div className="flex space-x-4">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white p-2 rounded-full w-10 h-10 flex items-center justify-center"
              >
                <img 
                  src={Whatsapp}
                  alt="Whatsapp"
                  className="w-6 h-6" 
                />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white p-2 rounded-full w-10 h-10 flex items-center justify-center"
              >
                <img 
                  src={Tiktok}
                  alt="Tiktok"
                  className="w-6 h-6" 
                />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white p-2 rounded-full w-10 h-10 flex items-center justify-center"
              >
                <img 
                  src={Instagram}
                  alt="Instagram" 
                  className="w-6 h-6" 
                />
              </a>
          </div>
        </div>

        {/* Kategori Section */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold">Kategori</h2>
          <div className="space-y-2">
            {['Baju', 'Sepatu', 'Sandal', 'Perabotan'].map((category) => (
              <a 
                key={category} 
                href="#" 
                className="block text-base hover:text-gray-200"
              >
                {category}
              </a>
            ))}
          </div>
        </div>

        {/* Tantangan Section */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold">Tantangan</h2>
          <div className="space-y-2">
            {['Energy Saver', 'Plastic Free', 'Green Communate', 'Tree Challenge'].map((challenge) => (
              <a 
                key={challenge} 
                href="#" 
                className="block text-base hover:text-gray-200"
              >
                {challenge}
              </a>
            ))}
          </div>
        </div>

        {/* EcoMate Section */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold">EcoMate</h2>
          <div className="space-y-2">
            {['Beranda', 'Tentang', 'Belanja', 'Tantangan'].map((link) => (
              <a 
                key={link} 
                href="#" 
                className="block text-base hover:text-gray-200"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Footer;
