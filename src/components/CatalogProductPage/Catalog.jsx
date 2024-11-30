import { useState } from "react";
import Card from "../Card";
import Pagination from "../Pagination";
const Catalog = () => {
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
        const itemsPerPage = 9;

        // Hitung total halaman
       
        const indexOfLastProduct = currentPage * itemsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
        const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
        const totalProduct = products.length
        const totalProductCurrentPage = currentProducts.length
    return (
        <div className="w-full mx-auto">
            <p className="text-xl py-10">Menampilkan {totalProductCurrentPage} dari {totalProduct} hasil</p>
            <div className="flex flex-wrap -mx-2 sm:mx-0">
                {currentProducts.map((product) => (
                <div 
                    key={product.id} 
                    className="w-1/2 sm:w-1/3 px-2 sm:px-5 mb-5"
                >
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
            <Pagination 
                currentPage={currentPage}
                totalItems={products.length}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default Catalog;