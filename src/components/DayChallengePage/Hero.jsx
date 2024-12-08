
import React from "react";
import { Link } from "react-router";
import Image from "../../assets/png/bg-challenge.png";



const Hero = () => {
    
    return (
        <div className="bg-secondary pt-24 md:pt-40 ">
            <div className="relative group overflow-hidden rounded-lg max-w-full px-4 md:px-0">
                {/* Background Image */}
                <div className="relative w-full max-w-[1328px] mx-auto">
                    <img
                        src={Image}
                        alt="bg-hero"
                        className="w-full h-[494px] sm:h-[500px] md:h-[698px] rounded-[30px] md:rounded-[50px] object-cover"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[#28282880] bg-opacity-50 rounded-[30px] md:rounded-[50px] flex flex-col items-center justify-center text-center px-4">

                        <h2 className={`text-white text-3xl md:text-[48px] max-w-full md:max-w-[500px] font-bold leading-tight`}>
                            Plastic-Free Week Challange
                        </h2>
                        <div className="flex md:flex-row flex-wrap gap-2 justify-center items-center text-[#115E59] mt-8 mb-10">
                            <p className="font-semibold bg-green-50 px-4 py-1 rounded-3xl border border-green-800">Mudah</p>
                            <p className="font-semibold bg-green-50 px-4 py-1 rounded-3xl border border-green-800">7 Hari</p>
                            <p className="font-semibold bg-green-50 px-4 py-1 rounded-3xl border border-green-800">100 Koin</p>
                            <p className="font-semibold bg-green-50 px-4 py-1 rounded-3xl border border-green-800">200 Exp</p>
                        </div>
                        <div className="bg-white p-5 rounded-[24px]">
                        <div>
                            <div className="mb-2 flex justify-between items-center">
                                <h3 className="text-xl font-semibold text-gray-800 ">
                                Hari Ke 1
                                </h3>
                                <span className="text-xl font-medium text-gray-800 ">14.2%</span>
                            </div>
                            <div
                                className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-8"
                                role="progressbar"
                                aria-valuenow={20}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            >
                                <div
                                className="flex flex-col w-[14%] justify-center rounded-full overflow-hidden bg-[#57C15D] text-xs text-white text-center whitespace-nowrap transition duration-500 "
                                />
                            </div>
                        </div>
                            <button className="hover:cursor-not-allowed bg-green-300 text-white w-[436px] py-5 rounded-[16px] text-lg">
                                Klaim Koin
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;