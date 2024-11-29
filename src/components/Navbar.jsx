import React, { useState } from 'react';
import { Link } from 'react-router';

const Navbar = ({active}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 w-full h-[96px] backdrop-blur-xl bg-white bg-opacity-30 z-50">
            <nav className="max-w-[83rem] w-full mx-auto px-4 flex flex-wrap items-center justify-between h-full">
                {/* Logo */}
                <a
                    className="flex-none text-[26px] font-bold text-[#1B4B1E] focus:outline-none focus:opacity-80"
                    href="#"
                >
                    <span className="inline-flex items-center gap-x-2 text-xl font-bold">
                        <img src="assets/png/Logo.png" alt="logo" className="w-12 h-12" />
                        EcoMate
                    </span>
                </a>

                {/* Mobile Menu Toggle */}
                <button
                    type="button"
                    className="sm:hidden z-50"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                >
                    {isMenuOpen ? (
                        <svg
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
                    ) : (
                        <svg
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
                    )}
                </button>

                {/* Desktop Navigation Links */}
                <div className="hidden sm:flex items-center gap-8 text-xl">
                    <a className={` text-[#1B4B1E] hover:text-[#246128] focus:outline-none ${active === "home" ? "font-bold" : "font-normal"}`} href="/">Beranda</a>
                    <a className={` text-[#1B4B1E] hover:text-[#246128] focus:outline-none ${active === "about" ? "font-bold" : "font-normal"}`} href="#">Tentang</a>
                    <a className={` text-[#1B4B1E] hover:text-[#246128] focus:outline-none ${active === "Shopping" ? "font-bold" : "font-normal"}`} href="#">Belanja</a>
                    <a className={` text-[#1B4B1E] hover:text-[#246128] focus:outline-none ${active === "challenge" ? "font-bold" : "font-normal"}`} href="/tantangan">Tantangan</a>
                </div>

                {/* Desktop Action Buttons */}
                
                <div className="hidden sm:flex items-center gap-x-2 h-[46px] max-w-[231px]">
                    {localStorage.getItem('token') ? (
                        <div className='flex flex-row w-full ml-28'>
                        <Link
                            to="/dashboard"
                            className="p-3"
                        >
                            <img src="/assets/svg/shopping-cart-nav.svg" alt="logo" className="w-6 h-6" />
                        </Link>
                        <div className="w-[1px] h-11 bg-[#999999]"></div>
                        <Link
                            to="/dashboard"
                            className="p-3"
                        >
                            <img src="/assets/svg/user.svg" alt="logo" className="w-6 h-6" />
                        </Link>
                        </div>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="px-4 inline-flex items-center gap-x-2 text-[15px] h-full w-[81px] font-medium rounded-lg bg-[#2E7D32] text-white shadow-sm hover:bg-[#1B4B1E] focus:outline-none"
                            >
                                Masuk
                            </Link>
                            <div className="w-[1px] h-11 bg-[#999999]"></div>
                            <Link
                                to="/register"
                                className="px-4 inline-flex items-center gap-x-2 text-[15px] h-full w-[118px] font-medium rounded-lg border border-[#2E7D32] backdrop-blur-xl text-[#2E7D32] shadow-sm hover:bg-gray-50 focus:outline-none"
                            >
                                Daftar akun
                            </Link>
                        </>
                    )}
                    
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="sm:hidden absolute top-full left-0 w-full bg-white shadow-lg">
                        <div className="flex flex-col p-4 space-y-4">
                            <a className={` text-[#1B4B1E] hover:text-[#246128] focus:outline-none ${active === "home" ? "font-bold" : "font-normal"}`} href="/">Beranda</a>
                            <a className={` text-[#1B4B1E] hover:text-[#246128] focus:outline-none ${active === "about" ? "font-bold" : "font-normal"}`} href="#">Tentang</a>
                            <a className={` text-[#1B4B1E] hover:text-[#246128] focus:outline-none ${active === "Shopping" ? "font-bold" : "font-normal"}`} href="#">Belanja</a>
                            <a className={` text-[#1B4B1E] hover:text-[#246128] focus:outline-none ${active === "challenge" ? "font-bold" : "font-normal"}`} href="/tantangan">Tantangan</a>
                            
                            <div className="border-t pt-4 flex flex-col space-y-4">
                                <Link
                                    to="/login"
                                    className="w-full px-4 py-2 inline-flex items-center justify-center gap-x-2 text-[15px] font-medium rounded-lg bg-[#2E7D32] text-white shadow-sm hover:bg-[#1B4B1E] focus:outline-none"
                                >
                                    Masuk
                                </Link>
                                <button
                                    type="button"
                                    className="w-full px-4 py-2 inline-flex items-center justify-center gap-x-2 text-[15px] font-medium rounded-lg border border-[#2E7D32] backdrop-blur-xl text-[#2E7D32] shadow-sm hover:bg-gray-50 focus:outline-none"
                                >
                                    Daftar akun
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;