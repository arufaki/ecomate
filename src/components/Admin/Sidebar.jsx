// Sidebar.jsx
import React, { useState } from "react";
import useSideBarStore from "../../stores/useSideBarStore";
import { Link } from "react-router";
import Logo from "../../assets/png/Logo.png";
import { HomeIcon, UsersIcon, LogOutIcon, ShoppingBasket, ChevronLeftCircleIcon, ChevronRightCircleIcon, Briefcase, ShoppingCart, File } from "lucide-react";

const Sidebar = ({ active }) => {
    const { isOpen, toggleSidebar } = useSideBarStore();

    const menuItems = [
        { title: "Dashboard", icon: HomeIcon, path: "/admin/dashboard" },
        { title: "Pengguna", icon: UsersIcon, path: "/admin/pengguna" },
        { title: "Produk", icon: ShoppingBasket, path: "/admin/produk" },
        { title: "Tantangan", icon: Briefcase, path: "/admin/tantangan" },
        { title: "Pesanan", icon: ShoppingCart, path: "/admin/pesanan" },
        { title: "Kategori Efek", icon: File, path: "/admin/kategori" },
    ];

    return (
        <div className={`fixed left-0 top-0 h-screen bg-white text-primary transition-all duration-300 ease-in-out ${isOpen ? "w-[260px]" : "w-28"}`}>
            <div className="flex h-full flex-col">
                {/* Header */}
                <div className="flex py-5 items-center border-b border-r">
                    <img src={Logo} alt="Logo" className="h-8 px-4" />
                    <h1 className={`text-xl  mr-16 font-bold ${!isOpen && "hidden"}`}>EcoMate</h1>
                    <button onClick={toggleSidebar} className="rounded-lg p-2 bg-green-300">
                        <ChevronLeftCircleIcon className={`h-6 w-6 transition-transform duration-300 ${!isOpen && "rotate-180"}`} />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 space-y-2 p-6 border-r">
                    <h1 className={`text-[#6B7280]  ${!isOpen && "text-xs"}`}>Menu Utama</h1>
                    {menuItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center rounded-lg p-4  h-[44px]  ${
                                active === item.title ? "bg-primary text-white" : "text-[#404040]"
                            } transition-colors hover:bg-primary hover:text-white`}
                        >
                            <item.icon className="h-6 w-6" />
                            <span className={`ml-4 ${!isOpen && "hidden"}`}>{item.title}</span>
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
