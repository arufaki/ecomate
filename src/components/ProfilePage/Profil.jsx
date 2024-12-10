import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import User from "../../assets/jpg/user.jpg";
import api from "../../services/api";
import  ProfilContent  from './Navigasi/ProfilContent';
import  AlamatContent  from './Navigasi/Address';
import  PasswordContent  from './Navigasi/Password';
import  PrivasiContent  from './Navigasi/DeleteContent';
const Profil = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await api.get("/users");
            console.log(response.data.data);
            setData(response.data.data);
        } catch (error) {
            console.log(error); 
        }
    }
    useEffect(() => {
        getData();
    }, []);
    const [activeTab, setActiveTab] = useState('Profil');
    const tabContent = {
        'Profil': <ProfilContent Data={data} />,
        'Alamat': <AlamatContent />,
        'Password': <PasswordContent />,
        'Privasi': <PrivasiContent />
        };
  // Content for each tab
    
    return (
        <div className="flex flex-row">
            <Sidebar active="Profil" />
            <div className="bg-primary mt-20 w-[1152px] h-[327px]">
                
                <div className="flex flex-row px-10 pt-40 gap-10">
                    <div className="bg-white h-fit w-[309px] rounded-xl p-12">
                        <img src={User} alt="" className="w-[210px] h-[210px] rounded-full object-cover object-top" />
                        <h1 className="mx-auto w-full justify-center items-center text-center text-2xl font-semibold mt-5">{data.name}</h1>
                        <h1 className="mx-auto w-full justify-center items-center text-center text-lg font-light">{data.email}</h1>
                    </div>
                    <div className="bg-white h-fit w-[624px] rounded-xl">
                        <nav >
                        <ul className="flex flex-row gap-24 mx-8 text-lg p-4">
                        {['Profil', 'Alamat', 'Password', 'Privasi'].map((tab) => (
                            <li 
                            key={tab}
                            className={`font-bold cursor-pointer ${
                                activeTab === tab 
                                ? 'text-primary border-b-2 border-primary' 
                                : 'text-gray-500 hover:text-primary'
                            }`}
                            onClick={() => setActiveTab(tab)}
                            >
                            {tab}
                            </li>
                        ))}
                        </ul>
                            <hr />  
                        </nav>
                        <div>
                        {tabContent[activeTab]}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profil;