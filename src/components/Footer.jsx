import React from "react";
import Logo from "../assets/Logo-eco-mate.png";
import Whatsapp from "../assets/Whatsapp.png";
import Tiktok from "../assets/Tiktok.png";
import Instagram from "../assets/Instagram.png";

const Footer = () => {
  return (
    <div className=" fixed h-full sm:h-[400px] w-full bg-[#2E7D32] flex flex-col items-center justify-center">
      <div className="flex flex-col sm:flex-row  w-full px-[24px] sm:px-[80px] py-[40px] sm:py-[110px] sm:gap[0px] gap-[48px]">
        <div className="flex flex-col items-start gap-[16px] h-[180px] w-[278px]  sm:pl-[0px] pl-[48px] ">
          <div className=" flex flex-row gap-[12px]">
              <img src={Logo} alt="EcoMate Logo" className="w-[48px] h-[48px]" />
              <h5 className="text-white text-[26px] font-bold">EcoMate</h5>          
          </div>

          <p className="text-white text-left text-[18px] pr-[16px] ">
            Jl. Ahmad Dahlan no.23, Kebumen, Jawa Tengah 54311 
          </p>
          <div className="flex gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <div className="bg-white p-2 rounded-full w-[40px] h-[40px] flex items-center justify-center">
                <img src={Whatsapp} alt="Whatsapp" className="w-[24px] h-[24px]" />
              </div>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <div className="bg-white p-2 rounded-full w-[40px] h-[40px] flex items-center justify-center">
                <img src={Tiktok} alt="Tiktok" className="w-[24px] h-[24px]" />
              </div>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <div className="bg-white p-2 rounded-full w-[40px] h-[40px] flex items-center justify-center">
                <img src={Instagram} alt="Instagram" className="w-[24px] h-[24px]" />
              </div>
            </a>
          </div>
        </div>

        <div className="flex flex-cop items-start pl-[48px] sm:flex-row gap-[40px] sm:gap-[62px] w-full sm:w-auto sm:pl-[364px] pl-[0px] ">
          <div className="flex flex-col  items-start text-left gap-[12px]">
            <h2 className="text-white text-lg font-semibold text-[24px]">Kategori</h2>
            <div className="flex flex-col gap-[12px] ">
              <p className="text-white text-[18px]">Baju</p>
              <p className="text-white text-[18px]">Sepatu</p>
              <p className="text-white text-[18px]">Sandal</p>
              <p className="text-white text-[18px]">Perabotan</p>
            </div>
          </div>

          <div className="flex flex-col items-start text-left gap-[12px] px-[61px]">
            <h2 className="text-white text-lg font-semibold text-[24px]  ">Tantangan</h2>
            <div className="flex flex-col gap-[12px] ">
              <p className="text-white text-[18px]">Energy Saver</p>
              <p className="text-white text-[18px]">Plastic Free</p>
              <p className="text-white text-[18px]">Green Communate</p>
              <p className="text-white text-[18px]">Tree Challenge</p>
            </div>
          </div>
        </div>
            <div className="flex flex-col text-left gap-[12px] pr-[292px] sm:pr-[0px] pl-[48px] pb-[48px] sm:pb-[0px] ">
              <h2 className="text-white text-lg font-semibold text-[24px]">Ecomate</h2>
              <div className="flex flex-col gap-[12px] ">
              <p className="text-white text-[18px]">Beranda</p>
              <p className="text-white text-[18px]">Tentang</p>
              <p className="text-white text-[18px]">Belanja</p>
              <p className="text-white text-[18px]">Tantangan</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Footer;
