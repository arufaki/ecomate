import React from "react";
import heroForum from '../../assets/png/heroForum.png';

const HeroForum = () => {
    return (
        <div className="bg-secondary pt-[80px] sm:pt-[96px] md:pt-40 mb-20">
            <div className="relative group overflow-hidden rounded-0 sm:rounded-lg max-w-full">
                {/* Background Image */}
                <div className="relative w-full max-w-[1328px] mx-auto">
                    <img
                        src={heroForum}
                        alt="bg-hero"
                        className="w-full h-[698px] sm:h-[500px] md:h-[698px] rounded-[0px] md:rounded-[50px] object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 text-white bg-[#28282880] bg-opacity-50 rounded-[0px] md:rounded-[50px] flex flex-col items-center justify-center text-center px-4">
                        <h2 className="w-[329px] sm:w-[502px] text-[30px] sm:text-[48px] font-bold leading-normal tracking-[0.24px] mb-[16px]">
                            Selamat Datang di Forum Diskusi Kami!
                        </h2>
                        <p className="w-[283px] sm:w-[631px] text-[14px] sm:text-[24px] font-normal leading-normal tracking-[0.12px] pb-[22px]">
                            Jelajahi topik-topik menarik, bagikan ide, dan berdiskusi dengan komunitas yang penuh inspirasi. Mari bersama menciptakan wawasan baru dan solusi inovatif di sini!
                        </p>
                        <p className="text-base flex items-center gap-2">
                            <a href="/">Beranda</a>
                            <img src="/assets/svg/arrow-right.svg" alt="Arrow Right" className="inline-block w-3 h-3" />
                            Forum
                        </p>

                        {/* Button Buat Postingan */}
                        <button className="text-white bg-[#2E7D32] text-sm sm:text-base md:text-[15px] mt-6 md:mt-10 w-[246px] sm:w-[249px] md:w-[254px] h-[50px] md:h-[62px] rounded-xl font-bold hover:bg-[#1B4B1E] transition-colors duration-300 hidden sm:block">
                            Buat Postingan
                        </button>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="absolute-top sm:flex sm:flex-col w-[382px] sm:w-[1280px] mx-auto p-6 mt-[-48px] sm:mt-[48px] justify-center items-center gap-[10px] rounded-[12px] border border-gray-300 bg-zinc-50">
                <div className="flex flex-col items-start w-full">
                    <p className="text-[#262626] text-[16px] font-bold leading-[24px] tracking-[0.08px] mb-[10px]">
                        Cari
                    </p>
                    <div className="flex items-center justify-between gap-2">
                        <div className="relative w-[280px] sm:w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                                <svg
                                    className="shrink-0 size-4 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx={11} cy={11} r={8} />
                                    <path d="m21 21-4.3-4.3" />
                                </svg>
                            </div>
                            <input
                                className="py-3 ps-10 pe-4 block w-[280px] sm:w-[500px] md:w-[1158px] h-[52px] border border-[#E5E7EB] bg-white rounded-[8px] text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                type="text"
                                role="combobox"
                                aria-expanded="false"
                                placeholder="Cari tantangan"
                                defaultValue=""
                                data-hs-combo-box-input=""
                            />
                        </div>

                        {/* Button Search */}
                        <button className="bg-[#2E7D32] hover:bg-[#1B4B1E] h-[52px] w-[52px] rounded-[8px] flex items-center justify-center">
                            <img src="../src/assets/png/search.png" alt="search" className="h-[20px] w-[20px]" />
                        </button>
                    </div>
                </div>

                {/* Button Buat Postingan untuk layar kecil */}
                <button className="text-white bg-[#2E7D32] text-sm sm:text-base md:text-[15px] w-[334px] h-[50px] md:h-[62px] mt-6 rounded-xl font-bold hover:bg-[#1B4B1E] transition-colors duration-300 block sm:hidden">
                    Buat Postingan
                </button>
            </div>
        </div>
    );
};

export default HeroForum;
