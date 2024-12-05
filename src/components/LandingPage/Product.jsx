import React, { useState, useEffect } from 'react';
import Card from '../Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Mousewheel } from 'swiper/modules';
import api from "../../services/api";
import { truncateContent } from "../../hooks/useTruncates";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Sample product data


    const ProductCarousel = () => {
        const [products, setProducts] = useState([]);

        useEffect(() => {
            const fetchProducts = async () => {
                try {
                    const response = await api.get('/products');
                    setProducts(response.data.data);
                } catch (error) {
                    console.error('Error fetching products:', error);
                }
            };

            fetchProducts();
        }, []);
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
                loop={true}
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
                {products.slice(6, 12).map((product) => (
                <SwiperSlide key={product.product_id} className="px-4">

                            <Card
                                image={product.images[0]?.image_url || '/default-product.png'}
                                name={product.name}
                                description={truncateContent(product.description, 100)}
                                price={(product.price).toLocaleString("id-ID")}
                                link={`/detail-produk/${product.product_id}`}
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