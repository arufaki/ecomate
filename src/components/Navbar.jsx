import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {

    return (
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full h-[96px] bg-white text-sm py-3 ">
            <nav className="max-w-[100rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between">
                
                <a
                className="sm:order-1 flex-none text-[26px] font-bold text-[#1B4B1E]  focus:outline-none focus:opacity-80"
                href="#"
                >
                <span className="inline-flex items-center gap-x-2 text-xl font-bold ">
                    <img src="src/assets/logo.png" alt="logo" className="w-12 h-12" />
                    EcoMate
                </span>
                </a>
                <div className="sm:order-3 flex items-center gap-x-2 h-[46px] max-w-[231px]">
                <button
                    type="button"
                    className="sm:hidden hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-navbar-alignment-collapse"
                    aria-expanded="false"
                    aria-controls="hs-navbar-alignment"
                    aria-label="Toggle navigation"
                    data-hs-collapse="#hs-navbar-alignment"
                >
                    <svg
                    className="hs-collapse-open:hidden shrink-0 size-4"
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
                    <line x1={3} x2={21} y1={6} y2={6} />
                    <line x1={3} x2={21} y1={12} y2={12} />
                    <line x1={3} x2={21} y1={18} y2={18} />
                    </svg>
                    <svg
                    className="hs-collapse-open:block hidden shrink-0 size-4"
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
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                    </svg>
                    <span className="sr-only">Toggle</span>
                </button>
                <button
                    type="button"
                    className="  px-4 inline-flex items-center gap-x-2 text-[15px] h-full w-[81px] font-medium rounded-lg border border-gray-200 bg-[#2E7D32] text-white shadow-sm hover:bg-[#1B4B1E] focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
                >
                    Masuk
                </button>
                <div className="w-[1px] h-11 bg-[#999999]"></div>
                <button
                    type="button"
                    className=" px-4 inline-flex items-center gap-x-2 text-[15px] h-full w-[118px] font-medium rounded-lg border border-[#2E7D32] bg-white text-[#2E7D32] shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
                >
                    Daftar akun
                </button>
                </div>
                <div
                id="hs-navbar-alignment"
                className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2"
                aria-labelledby="hs-navbar-alignment-collapse"
                >
                <div className="flex flex-col gap-8 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5 text-xl">
                    <a
                    className="font-bold text-[#1B4B1E] focus:outline-none"
                    href="#"
                    aria-current="page"
                    >
                    Beranda
                    </a>
                    <a
                    className="font-medium text-[#1B4B1E] hover:text-[#246128] focus:outline-none  "
                    href="#"
                    >
                    Tentang
                    </a>
                    <a
                    className="font-medium text-[#1B4B1E] hover:text-[#246128] focus:outline-none  "
                    href="#"
                    >
                    Belanja
                    </a>
                    <a
                    className="font-medium text-[#1B4B1E] hover:text-[#246128] focus:outline-none  "
                    href="#"
                    >
                    Tantangan
                    </a>
                </div>
                </div>
            </nav>
            </header>

    );
};

export default Navbar;