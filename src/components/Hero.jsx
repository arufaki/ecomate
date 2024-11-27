import React from "react";

const Hero = () => {
    return (
        <div>
            <div
                className="relative group overflow-hidden rounded-lg mt-28 bg-[#F9F9EB]"
            >
                {/* Gambar Produk */}
                <img
                src="src/assets/bg-hero.jpg"
                alt="bg-hero"
                className=" w-full px-2 h-[500px] md:w-[1328px] md:h-[698px] md:px-0 rounded-[50px] items-center justify-center mx-auto object-cover transition-transform duration-300 "
                />
                {/* Overlay dengan Judul */}
                <div className="absolute inset-0 w-[1328px] rounded-[50px] h-[698px] bg-[#28282880] bg-opacity-50 flex flex-col items-center justify-center mx-auto opacity-100   transition-opacity duration-300">
                <h2 className="text-white text-[48px] max-w-[764px] text-center font-bold">Jadilah Bagian dari Perubahan, Mulai Gaya Hidup Ramah Lingkungan Bersama Ecomate!</h2>
                <button className="text-white bg-[#2E7D32] text-[15px] mt-10 w-[254px] h-[62px] rounded-xl font-bold hover:bg-[#1B4B1E]">Yuk Bantu Selamatkan Bumi !</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;