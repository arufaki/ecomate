import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/DetailProductPage/hero-detail";
import ProductDetail from "../components/DetailProductPage/product-detail";
const DetailProductPage = () => {
    
    return <div className="bg-secondary ">
        <Navbar active="Shopping"/>
        <div className="min-h-screen ">
            <Hero />
            <ProductDetail />
        </div>
        <Footer />
        </div>;
        
};

export default DetailProductPage;