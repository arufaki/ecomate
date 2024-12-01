import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/DetailProductPage/hero-detail";
import ProductDetail from "../components/DetailProductPage/product-detail";
import useAuthStore from "../stores/useAuthStore";
import { useNavigate } from "react-router";

const DetailProductPage = () => {
    const navigate = useNavigate();
    const { token } = useAuthStore();

    useEffect(() => {
        if (!token) {
        navigate("/login");
        }
    }, [token, navigate]); // Tambahkan dependensi untuk memastikan `useEffect` berjalan dengan benar

    
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