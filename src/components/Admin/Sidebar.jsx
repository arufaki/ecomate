// Sidebar.jsx
import React, { useState } from 'react';
import useSideBarStore from '../../stores/useSideBarStore';
import useAuthStore from '../../stores/useAuthStore';
import Logo from "../../assets/png/Logo.png"
import { HomeIcon, UsersIcon, LogOutIcon, ShoppingBasket, ChevronLeftCircleIcon, ChevronRightCircleIcon} from "lucide-react"
import { Link, useNavigate } from 'react-router';
import { logoutAlert, Toast } from "../../utils/function/toast";
const Sidebar = ({active}) => {
    const { isOpen, toggleSidebar } = useSideBarStore();
    const { clearToken } = useAuthStore();
    const navigate = useNavigate();
    const menuItems = [
        { title: 'Dashboard', icon: HomeIcon, path: '/admin/dashboard' },
        { title: 'Pengguna', icon: UsersIcon, path: '/admin/pengguna' },
        { title: 'Produk', icon: ShoppingBasket, path: '/admin/produk' },
        { title: 'Tantangan', icon: ChevronRightCircleIcon, path: '/admin/tantangan' },
        { title: 'Pesanan', icon: ChevronRightCircleIcon, path: '/admin/pesanan' },
        { title: 'Kategori Efek', icon: ChevronRightCircleIcon, path: '/admin/kategori' },
    ];
    const handleLogout = () => {
    const logoutAction = () => {
            // Clear the authentication token
            clearToken();

            // Redirect to login page
            navigate('/');
            
            // Show success message
            Toast.fire({
                icon: "success",
                title: "Logout Berhasil.",
            });
            // Close dropdown
            };
        
            // Show logout confirmation alert
            logoutAlert(logoutAction);
    };
    return (
        <div className={`fixed left-0 top-0 h-screen bg-white text-primary transition-all duration-300 ease-in-out ${isOpen ? 'w-[260px]' : 'w-28'}`}>
        <div className="flex h-full flex-col">
            {/* Header */}
            <div className="flex py-5 items-center border-b border-r">
            <img src={Logo} alt="Logo" className="h-8 px-4" />
            <h1 className={`text-xl  mr-16 font-bold ${!isOpen && 'hidden'}`} >EcoMate</h1>
            <button
                onClick={toggleSidebar}
                className="rounded-lg p-2 bg-green-300"
            >
                <ChevronLeftCircleIcon className={`h-6 w-6 transition-transform duration-300 ${!isOpen && 'rotate-180'}`} />
            </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-2 p-6 border-r">
                <h1 className={`text-[#6B7280]  ${!isOpen && 'text-xs'}`}>Menu Utama</h1>
            {menuItems.map((item) => (
                <Link
                key={item.path}
                to={item.path}
                className={`flex items-center rounded-lg p-4  h-[44px]  ${active === item.title ? 'bg-primary text-white' : 'text-[#404040]'} transition-colors hover:bg-primary hover:text-white`}
                >
                <item.icon className="h-6 w-6" />
                <span className={`ml-4 ${!isOpen && 'hidden'}`}>{item.title}</span>
                </Link>
            ))}
            </nav>

            {/* Footer */}
            <div className="shadow p-4">
            <button className="flex w-full items-center rounded-lg p-3 text-gray-300 transition-colors hover:bg-red-500 hover:text-white" onClick={handleLogout}>
                <LogOutIcon className="h-6 w-6" />
                <span className={`ml-4 ${!isOpen && 'hidden'}`}>Logout</span>
            </button>
            </div>
        </div>
        </div>
    );
};

export default Sidebar;