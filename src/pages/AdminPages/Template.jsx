import React,{ useState} from "react";
import useSideBarStore from "../../stores/useSideBarStore";
import Sidebar from "../../components/Admin/Sidebar";
import Header from "../../components/Admin/Header";
const Dashboard = () => {
    const { isOpen: sidebarOpen } = useSideBarStore();
    
    return (
        <div>
        <Sidebar    isOpen={sidebarOpen} 
                    toggleSidebar={() => sidebarOpen(!sidebarOpen)}
                    active="Dashboard" /> {/* ini aja yg diganti Sesuai yang dikerjain */}
        <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-[260px]' : 'ml-28'}`}>
        <Header />
        
            <div className="bg-secondary min-h-screen">
                {/* Content goes here */}
            </div>
        </div>
        </div>
    );
};

export default Dashboard;