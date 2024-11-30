import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FIlterBar from "../components/CatalogProductPage/FilterBar";
import Card from "../components/Card";
const CatalogProductPage = () => {
    const products = [
        {
            id: 1,
            name: "Sepatu Pria",
            description: "Terbuat dari limbah bulu ayam, Dirancang dengan teknologi modern, dan memiliki sifat antibakteri alam",
            price: "110.000",
            image: "assets/png/Sepatu.png",
            rating: 4
        },
        {
            id: 2,
            name: "Baju Ramah Lingkungang",
            description: "Baju stylish berbahan dasar limbah tekstil daur ulang, mengedepankan keberlanjutan tanpa mengorbankan kualitas.",
            price: "49.999",
            image: "assets/png/Baju.png",
            rating: 4
        },
        {
            id: 3,
            name: "Sandal",
            description: "Sandal stylish dari limbah plastik daur ulang, ringan, tahan lama, dan nyaman, Pilihan tepat untuk langkah berkelanjutan.",
            price: "10.000",
            image: "assets/png/Sendal.png",
            rating: 4.5
        },
        {
            id: 4,
            name: "Tote bag",
            description: "Totebag unik berbahan limbah tekstil daur ulang, kuat, stylish, dan ramah lingkungan. Pilihan sempurna untuk gaya sehari-hari",
            price: "19.900",
            image: "assets/png/Totebag.png",
            rating: 4
        },
        {
            id: 5,
            name: "Piring",
            description: "Piring unik berbahan limbah plastik daur ulang, kuat, stylish, dan ramah lingkungan. Pilihan sempurna untuk gaya sehari-hari",
            price: "10.000",
            image: "assets/png/Piring.png",
            rating: 4
        },
        {
            id: 6,
            name: "Sepatu Pria",
            description: "Terbuat dari limbah bulu ayam, Dirancang dengan teknologi modern, dan memiliki sifat antibakteri alam",
            price: "110.000",
            image: "assets/png/Sepatu.png",
            rating: 4
        },
        {
            id: 7,
            name: "Baju Ramah Lingkungang",
            description: "Baju stylish berbahan dasar limbah tekstil daur ulang, mengedepankan keberlanjutan tanpa mengorbankan kualitas.",
            price: "49.999",
            image: "assets/png/Baju.png",
            rating: 4
        },
        {
            id: 8,
            name: "Sandal",
            description: "Sandal stylish dari limbah plastik daur ulang, ringan, tahan lama, dan nyaman, Pilihan tepat untuk langkah berkelanjutan.",
            price: "10.000",
            image: "assets/png/Sendal.png",
            rating: 4.5
        },
        {
            id: 9,
            name: "Tote bag",
            description: "Totebag unik berbahan limbah tekstil daur ulang, kuat, stylish, dan ramah lingkungan. Pilihan sempurna untuk gaya sehari-hari",
            price: "19.900",
            image: "assets/png/Totebag.png",
            rating: 4
        },
        {
            id: 10,
            name: "Piring",
            description: "Piring unik berbahan limbah plastik daur ulang, kuat, stylish, dan ramah lingkungan. Pilihan sempurna untuk gaya sehari-hari",
            price: "10.000",
            image: "assets/png/Piring.png",
            rating: 4
        }
        ];
        const [currentPage, setCurrentPage] = useState(1);
        const cardsPerPage = 9;

        // Hitung total halaman
        const totalPages = Math.ceil(products.length / cardsPerPage);
        const totalProduct = products.length
        const totalProductCurrentPage = products.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage).length
        // Hitung indeks awal dan akhir
        const startIndex = (currentPage - 1) * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;

        // Filter produk untuk halaman saat ini
        const currentProducts = products.slice(startIndex, endIndex);
          // Fungsi untuk navigasi
        const goToPreviousPage = () => {
            if (currentPage > 1) setCurrentPage(currentPage - 1);
        };

        const goToNextPage = () => {
            if (currentPage < totalPages) setCurrentPage(currentPage + 1);
        };
    return <div className="bg-secondary ">
        <Navbar active="Shopping"/>
        <div className="min-h-screen">
            <div className="flex flex-col justify-center items-center pt-40 ">
                <h1 className="text-5xl font-bold">Belanja</h1>
                <p className="text-xl my-5">Belanja dengan Bijak, Selamatkan Bumi Bersama Kami!</p>
                <p className="text-base"><a href="/">Beranda</a><img src="/assets/svg/arrow-right.svg" alt="Arrow Right" className="inline-block w-3 h-3 mx-2" /> Belanja</p>
            </div>
            <FIlterBar />
            <div className="w-[1222px] mx-auto">
                <p className="text-xl py-10  ">Menampilkan {totalProductCurrentPage} dari {totalProduct} hasil</p>
                <div className="flex flex-wrap -mx-5">
                    {currentProducts.map((product) => (
                    <div key={product.id} className="w-full md:w-1/3 px-5 mb-5">
                        <Card
                        image={product.image}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        rating={product.rating}
                        />
                    </div>
                    ))}
                </div>
                <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 w-[1222px] h-[86px] mx-auto my-20">
                {/* Pagination */}
                <div className="flex justify-between items-center ">
                    {/* Tombol Previous */}
                    <button
                        onClick={goToPreviousPage}
                        disabled={currentPage === 1}
                        className={`px-3 py-2 rounded-full ${
                            currentPage === 1
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-primary text-white"
                        }`}
                    >
                        &larr; 
                    </button>

                    {/* Nomor Halaman */}
                    <div className="flex space-x-2">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentPage(index + 1)}
                                className={`px-4 py-2 rounded-full ${
                                    currentPage === index + 1
                                        ? "bg-primary text-white"
                                        : "text-gray-700 hover:bg-primary hover:text-white transition-all duration-300"
                                }`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>

                    {/* Tombol Next */}
                    <button
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages}
                        className={`px-3 py-2 rounded-full ${
                            currentPage === totalPages
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-primary text-white"
                        }`}
                    >
                        &rarr;
                    </button>
                </div>

                </div>
            </div>
        </div>
        <Footer />
        </div>;
        
};

export default CatalogProductPage;