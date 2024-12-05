import React from 'react';
import { User, Search, BellIcon, ChevronDown } from "lucide-react"
import Image from "../../assets/jpg/user.jpg"
const Header = () => {
    return (
        <header className="bg-white p-5 border-b ">
            <div className="flex items-center justify-between">
                <div className="relative w-[372px]">
                    <input 
                        type="text" 
                        placeholder="Cari" 
                        className="border ps-11 border-gray-300 rounded-xl h-[40px] px-4 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <Search className="w-6 h-6 text-gray-400" />
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center ">
                        <BellIcon className="w-6 h-6 text-gray-400" />
                        <div className='h-[40px] w-[1px] bg-gray-400 mx-5' ></div>
                        <img src={Image} alt="" className='h-[32px] w-[32px] rounded-full object-cover object-top ml-2' />
                        <div className='flex flex-col mx-2'>
                        <span className="font-medium text-sm">Adi Septian</span>
                        <span className="font-medium text-xs">Admin</span>
                        </div>
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;