import { div } from "motion/react-client";
import React from "react";

const Hero = () => {
    return (
        <div className="bg-secondary pt-24 md:pt-40">
        <div className="relative flex justify-center items-center gap-[10px] h-[698px] w-[1328px] mx-auto mb-[80px]  rounded-[24px] overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('../src/assets/png/hero.png')`
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
        </div>
    );
};

export default Hero;
