import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Catalog from "../components/CatalogProductPage/Catalog";
import Hero from "../components/CatalogProductPage/Hero-catalog";
const CatalogProductPage = () => {
    
    return <div className="bg-secondary ">
        <Navbar active="Shopping"/>
        <div className="min-h-screen">
            <Hero />
            
            <Catalog />
        </div>
        <Footer />
        </div>;
        
};

export default CatalogProductPage;