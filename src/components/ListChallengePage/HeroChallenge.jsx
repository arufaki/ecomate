import React from "react";

const Hero = () => {
    return (
    <div class="relative flex flex-col justify-center items-center gap-2 w-[380px]  h-[698px] w-[430px] h-[698px] mt-32  sm:mx-auto mb-20 rounded-3xl overflow-hidden sm:w-[1328px]">
        <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('/assets/png/hero.png')`
                }}
            ></div>

            <div 
                className="absolute inset-0" 
                style={{
                    backgroundColor: '#1F5221B2'
                }}
            ></div>

                <div className="relative flex flex-col justify-center items-center text-white text-center">
                    <h1 className="w-[329px] sm:w-[502px] text-[30px] sm:text-[48px] font-bold leading-normal tracking-[0.24px] mb-[16px]">
                        Selamat Datang di Challenge Kami!
                    </h1>
                    <p className="w-[283px] sm:w-[631px] text-[24px] font-normal leading-normal tracking-[0.12px] pb-[22px]">
                        Temukan tantangan seru, tips berkelanjutan, dan cara-cara mudah untuk 
                        mengurangi jejak karbon Anda. Mulailah langkah kecil hari ini, demi masa depan 
                        yang lebih bersih dan sehat!
                    </p>
                    <p className="text-base flex items-center gap-2">
                        <a href="/">Beranda</a>
                        <img src="/assets/svg/arrow-right.svg" alt="Arrow Right" className="inline-block w-3 h-3" />
                        Tantangan
                    </p>
                </div>

        </div>
    );
};

export default Hero;
