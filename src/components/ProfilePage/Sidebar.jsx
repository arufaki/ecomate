import React from "react";
import { User2, Trophy, Award, Dock, HandCoins } from "lucide-react";
const Sidebar = ({active}) => {
    const sidebar = [
        {
            id: 1,
            name: "Profil",
            icon: <User2/>
        },
        {
            id:2,
            name: "Kontribusi",
            icon: <Trophy/>
        },
        {
            id:3,
            name: "Challenge",
            icon: <Award/>
        },
        {
            id:4,
            name:"Pesanan",
            icon:<Dock/>
        },
        {
            id:5,
            name:"Koin Ecomate",
            icon:<HandCoins/>
        }
    ]
    return (
        <div className="sidebar bg-secondary w-[288px] h-[1088px] pt-48 px-7 ">
            {sidebar.map((item) => (
                <div key={item.id}>
                <button className={`" py-3 w-full gap-3 mt-5 rounded-[12px]  text-start flex px-4 text-xl fontbold" ${active === item.name ? "bg-primary text-white" : "text-primary hover:bg-primary hover:text-white"}`}>
                    {item.icon} {item.name}
                </button>
                </div>
            ))}
            
        </div>
    );
};

export default Sidebar;