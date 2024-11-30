import React from 'react';
import Card from '../Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Mousewheel } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
        <div className=' bg-secondary'>
            <div className="py-14">
                <p className="text-[18px] text-sm text-neutral-800 text-center justify-center font-semibold">Pilihan Anda Membuat Perbedaan</p>
                <h1 className="md:text-5xl text-xl text-neutral-800 text-center justify-center font-bold">Pilihan Anda Membuat Perbedaan</h1>
            </div>
            {/* Slider */}
            <div className="relative w-[80%] md:w-[80%] mx-auto ">
            <Swiper
                modules={[ Mousewheel]}
                spaceBetween={20}
                slidesPerView={1}
                mousewheel={true}
                breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3.5,
                    spaceBetween: 30,
                },
                }}
                grabCursor={true}
                className="pb-12 md:h-[500px] h-[350px]"
            >
                {products.map((product) => (
                <SwiperSlide key={product.id} className="px-4">
                    <Card
                    image={product.image}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    rating={product.rating}
                    />
                </SwiperSlide>
                ))}
            </Swiper>
        

    </div>

            {/* End Slider */}
            </div>

    );
};

export default ProductCarousel;