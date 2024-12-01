import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


    const ParticipantsFeeds = () => {
        const originalItems = [
            { id: 1, name: "Rizki Andini", date: "06 September 2024", message: '"Lorem ipsum dolor sit amet consectetur. Fames felis molestie risus egestas sollicitudin in. Sed risus amet erat porttitor fermentum metus sit dolor. Integer maecenas diam eget arcu id sit feugiat. Mus nunc volutpat enim elit."' },
            { id: 2, name: "Farhan Alfiansyah", date: "06 September 2024", message: '"Lorem ipsum dolor sit amet consectetur. Fames felis molestie risus egestas sollicitudin in. Sed risus amet erat porttitor fermentum metus sit dolor. Integer maecenas diam eget arcu id sit feugiat. Mus nunc volutpat enim elit."' },
            { id: 3, name: "Rizki Andini", date: "06 September 2024", message: '"Lorem ipsum dolor sit amet consectetur. Fames felis molestie risus egestas sollicitudin in. Sed risus amet erat porttitor fermentum metus sit dolor. Integer maecenas diam eget arcu id sit feugiat. Mus nunc volutpat enim elit."' },
            { id: 4, name: "Farhan Alfiansyah", date: "06 September 2024", message: '"Lorem ipsum dolor sit amet consectetur. Fames felis molestie risus egestas sollicitudin in. Sed risus amet erat porttitor fermentum metus sit dolor. Integer maecenas diam eget arcu id sit feugiat. Mus nunc volutpat enim elit."' },
            { id: 5, name: "Rizki Andini", date: "06 September 2024", message: '"Lorem ipsum dolor sit amet consectetur. Fames felis molestie risus egestas sollicitudin in. Sed risus amet erat porttitor fermentum metus sit dolor. Integer maecenas diam eget arcu id sit feugiat. Mus nunc volutpat enim elit."' },
            { id: 6, name: "Farhan Alfiansyah", date: "06 September 2024", message: '"Lorem ipsum dolor sit amet consectetur. Fames felis molestie risus egestas sollicitudin in. Sed risus amet erat porttitor fermentum metus sit dolor. Integer maecenas diam eget arcu id sit feugiat. Mus nunc volutpat enim elit."' },
        ];
    return (
        <div className='  h-fit pb-10'>
            <div className="pt-14">
                <h1 className="text-neutral-800 text-3xl md:text-[48px] max-w-full md:max-w-[764px] mx-auto text-center font-bold leading-tight">Participants Feeds</h1>
            </div>
            {/* Slider */}
            <div className="relative h-fit  w-full">
                <div className="md:w-[75%] w-full mx-auto  rounded-xl">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        speed={5000} // Kecepatan pergerakan slide
                        breakpoints={{
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            }
                        }}
                        autoplay={{
                            delay: 0, // Tidak ada jeda antar slide
                            disableOnInteraction: false,
                            reverseDirection: false // Arah pergerakan
                        }}
                        allowTouchMove={false} // Nonaktifkan interaksi sentuh
    
                    className="h-[700px]"
                    >
                    {originalItems.map((item) => (
                        <SwiperSlide key={item.id} className="px-5">
                        <div className="">
                            <img 
                            src="assets/jpg/user.jpg" 
                            className='w-[100px] h-[100px] mx-auto mb-4 rounded-full object-cover object-top relative top-14' 
                            alt={item.name} 
                            />
                            <div className="flex flex-col justify-center bg-white shadow-lg rounded-xl w-full text-neutral-800">
                            <div className="p-5 w-[397px] h-[487px] flex flex-col justify-between">
                                <div className='text-center pl-8  my-32 h-[150px] flex items-center justify-center'>
                                <h1>{item.message}</h1>
                                </div>
                                <div className='text-center'>
                                <h1 className='font-bold text-2xl'>{item.name}</h1>
                                <h1 className='text-sm text-[#999999]'>{item.date}</h1>
                                </div>
                            </div>
                            </div>
                        </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                </div>
                </div>

            {/* End Slider */}
            </div>

    );
};

export default ParticipantsFeeds;