import React from "react";

const Hero = () => {
    return (
        <div className="relative flex justify-center items-center gap-[10px] h-[698px] mt-[128px] mx-[56px] mb-[80px] bg-[#F9F9EB] rounded-[24px] overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('/assets/png/hero.png')`
                }}
            ></div>

            <div 
                className="absolute inset-0" 
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.4)'
                }}
            ></div>

            <div className="relative z-10 text-white text-center px-[348px] gap[16px] ">
                <h1 className="text-5xl font-bold mx-[48px] mb-[16px] ">Selamat Datang di Challenge Kami!</h1>
                <p className="text-2xl font-regular text-[24px] ">
                    Temukan tantangan seru, tips berkelanjutan, dan cara-cara mudah untuk 
                    mengurangi jejak karbon Anda. Mulailah langkah kecil hari ini, demi masa depan 
                    yang lebih bersih dan sehat!
                </p>
            </div>
        </div>
    );
};

export default Hero;
