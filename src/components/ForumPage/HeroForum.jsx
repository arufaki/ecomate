import React, { useState } from "react";
import { useNavigate } from 'react-router';
import heroForum from '../../assets/png/heroForum.png';
import Women from '../../assets/png/women.png';
import Plus from '../../assets/png/plus-Icon.png';
import Location from '../../assets/png/location-on.png';
import Emote from '../../assets/png/emote.png';
import Photo from '../../assets/png/photo.png';
import UserPlus from '../../assets/png/user-plus.png';


const HeroForum = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); 

    const handleOpenDesktopModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseDesktopModal = () => {
        setIsModalOpen(false);
    };
    const navigate = useNavigate(); 

    const handleButtonClick = () => {
        navigate("/post-mobile");
    };

    return (
        <div className="bg-secondary pt-[80px] sm:pt-[96px] md:pt-40 mb-0 sm:mb-[24px] ">
            <div className="relative group overflow-hidden rounded-0 sm:rounded-lg max-w-full">

                <div className="relative w-full max-w-[1328px] mx-auto z-0">
                    <img
                        src={heroForum}
                        alt="bg-hero"
                        className="w-full h-[698px] sm:h-[500px] md:h-[698px] rounded-[0px] md:rounded-[50px] object-cover"
                    />

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

                        {/* Button Buat Postingan desktop */}
                        <button
                            onClick={handleOpenDesktopModal}
                            className="text-white bg-[#2E7D32] text-sm sm:text-base md:text-[15px] mt-6 md:mt-10 w-[246px] sm:w-[249px] md:w-[254px] h-[50px] md:h-[62px] rounded-xl font-bold hover:bg-[#1B4B1E] transition-colors duration-300 hidden sm:block"
                        >
                            Buat Postingan
                        </button>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="relative sm:flex sm:flex-col w-[382px] sm:w-[1280px] mx-auto p-6 mt-[-70px] sm:mt-[48px] sm:relative z-10 justify-center items-center gap-[10px] rounded-[12px] border border-gray-300 bg-white">
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
                                placeholder="Cari topik"
                                defaultValue=""
                            />
                        </div>

                        <button className="bg-[#2E7D32] hover:bg-[#1B4B1E] h-[52px] w-[52px] rounded-[8px] flex items-center justify-center">
                            <img src="../src/assets/png/search.png" alt="search" className="h-[20px] w-[20px]" />
                        </button>
                    </div>
                </div>

                {/* Button Buat Postingan mobile */}
                <button
                    onClick={handleButtonClick} 
                    className="text-white bg-[#2E7D32] text-sm sm:text-base md:text-[15px] w-[334px] h-[50px] md:h-[62px] mt-6 rounded-xl font-bold hover:bg-[#1B4B1E] transition-colors duration-300  sm:hidden block "
                >
                    Buat Postingan
                </button>
            </div>

            {/* Modal Desktop */}
            {isModalOpen && (
                <div className="fixed inset-0 min-h-[654px] bg-black bg-opacity-50 z-50 flex items-center justify-center">
                    <div className="bg-white rounded-[16px] w-[500px] relative">
                        <button
                            onClick={handleCloseDesktopModal}
                            className="absolute top-4 right-4 w-[24px] h-[24px] p-[4px] bg-[#2E7D32] text-white rounded-full flex items-center justify-center hover:bg-[#1B4B1E]"
                        >
                            x
                        </button>

                        <h3 className="text-lg border-b border-[#D4D4D4] pt-[28px] pb-[19px] w-full text-center font-bold mb-4">
                            Buat Postingan
                        </h3>

                        <div className="flex items-center gap-4 mb-4 px-[22px] ">
                            <img
                                src={Women}
                                alt="User Profile"
                                className="w-[40px] h-[40px] rounded-full"
                            />
                            <div className="flex flex-col">
                                <p className="font-semibold text-black  text-base">Nama User</p>
                                <p className="text-sm text-black ">Posting ke semua orang</p>
                            </div>
                        </div>

                        <textarea
                            className="w-full text-sm tetx-[#737373] px-[22px] mb-4 focus:border-[#A1A1AA] focus:outline-none focus:ring-0"
                            rows="4"
                            placeholder="Apa yang Anda pikirkan sekarang?"
                        />

                        <div className="relative flex border border-[#A1A1AA] rounded-xl px-[14px] mb-[24px] mx-[21px] items-center gap-2">
                            <p  className="py-3 flex-1 bg-white text-black font-bold placeholder-black focus:border-[#A1A1AA] focus:outline-none focus:ring-0">
                            Tambahkan ke postingan anda </p>

                            <div className="flex gap-2 h-[24px] ">
                                <button className="flex items-center w-[24px] h-[24px] justify-center">
                                    <img src={Photo} alt="photo" className="w-6 h-6" />
                                </button>
                                <button className="flex items-center w-[24px] h-[24px] justify-center">
                                    <img src={Location} alt="location" className="w-6 h-6" />
                                </button>
                                <button className="flex items-center w-[24px] h-[24px] justify-center">
                                    <img src={Emote} alt="emote" className="w-6 h-6" />
                                </button>
                                <button className="flex items-center w-[24px] h-[24px] justify-center">
                                    <img src={UserPlus} alt="user plus" className="w-6 h-6" />
                                </button>
                                <button className="flex items-center w-[24px] h-[24px] justify-center">
                                    <img src={Plus} alt="plus" className="w-6 h-6" />
                                </button>
                            </div>
                        </div>


                        <div className="px-4 pb-4">
                            <button className="w-full px-4 py-2 bg-[#E5E7EB] hover:bg-green-primary  text-[16px] font-bold hover:text-white rounded-lg  transition-colors">
                                Kirim
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default HeroForum;
