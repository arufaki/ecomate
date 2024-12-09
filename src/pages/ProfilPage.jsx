import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const ProfilPage = () => {
    return (
        <div>
            <Navbar active="profil" />
            <div className="min-h-screen">
                <h1>Profil</h1>
            </div>
            <Footer />
        </div>
        );
};

export default ProfilPage;