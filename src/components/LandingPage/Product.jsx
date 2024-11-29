import React from 'react';
import Card from '../Card';

// Sample product data
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
        name: "Tas Laptop",
        description: "Tas multifungsi dengan ruang laptop yang luas",
        price: 250000,
        image: "/api/placeholder/300/200",
        rating: 4
    }
    ];

    const ProductCarousel = () => {
    return (
        <div className=' bg-[#F9F9EB]'>
            <div className="py-14">
                <p className="text-[18px] text-sm text-neutral-800 text-center justify-center font-semibold">Pilihan Anda Membuat Perbedaan</p>
                <h1 className="md:text-5xl text-xl text-neutral-800 text-center justify-center font-bold">Pilihan Anda Membuat Perbedaan</h1>
            </div>
            {/* Slider */}
            <div
                data-hs-carousel='{
                    "loadingClasses": "opacity-0",
                    "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500",
                    "slidesQty": {
                    "xs": 1,
                    "lg": 3
                    },
                    "isDraggable": true
                    
                }'
                className="relative h-fit bg-[#F9F9EB]"
                >

                <div className="hs-carousel md:w-[75%] w-full justify-center mx-auto overflow-hidden bg-[#F9F9EB] rounded-xl">

                    <div className="relative min-h-[500px]  -mx-1"> {/* Tambahkan padding kanan untuk potong card */}
                    <div className="hs-carousel-body absolute top-0 bottom-0 start-[0] md:start-[-170px] flex flex-nowrap opacity-0 cursor-grab transition-transform duration-700 hs-carousel-dragging:transition-none hs-carousel-dragging:cursor-grabbing h-[480px] px-0 md:px-48">
                        {products.map((product) => (
                        <div
                            key={product.id}
                            className="hs-carousel-slide md:px-5 px-10 right-10"
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
                    </div>
                </div>

                <button
                    type="button"
                    className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                >
                    <span className="text-2xl" aria-hidden="true">
                    <svg
                        className="shrink-0 size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m15 18-6-6 6-6" />
                    </svg>
                    </span>
                    <span className="sr-only">Previous</span>
                </button>
                <button
                    type="button"
                    className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                >
                    <span className="sr-only">Next</span>
                    <span className="text-2xl" aria-hidden="true">
                    <svg
                        className="shrink-0 size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                    </span>
                </button>
                <div className="hs-carousel-pagination  justify-center absolute bottom-3 start-0 end-0 space-x-2 hidden" />
                </div>

            {/* End Slider */}
            </div>

    );
};

export default ProductCarousel;