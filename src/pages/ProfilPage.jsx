import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/ProfilePage/Sidebar";
import Profil from "../components/ProfilePage/Profil";
const ProfilPage = () => {
    return (
        <div className="bg-secondary">
            <Navbar active="profil" />
            <div className="min-h-screen max-w-[1328px] mx-auto bg-secondary">
                <Profil />
            </div>
            <Footer />
        </div>
        );
};

export default ProfilPage;