
import React from "react";

const Hero = ({ text, button, image }) => {
    return (
        <div className="bg-[#F9F9EB] pt-24 md:pt-40">
            <div className="relative group overflow-hidden rounded-lg max-w-full px-4 md:px-0">
                {/* Background Image */}
                <div className="relative w-full max-w-[1328px] mx-auto">
                    <img
                        src={image}
                        alt="bg-hero"
                        className="w-full h-[494px] sm:h-[500px] md:h-[698px] rounded-[30px] md:rounded-[50px] object-cover"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[#28282880] bg-opacity-50 rounded-[30px] md:rounded-[50px] flex flex-col items-center justify-center text-center px-4">
                        <h2 className="text-white text-3xl md:text-[48px] max-w-full md:max-w-[764px] font-bold leading-tight">
                            {text}
                        </h2>
                        <button className="text-white bg-[#2E7D32] text-sm sm:text-base md:text-[15px] mt-6 md:mt-10 w-[246px] sm:w-[249px] md:w-[254px] h-[50px] md:h-[62px] rounded-xl font-bold hover:bg-[#1B4B1E] transition-colors duration-300">
                            {button}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;