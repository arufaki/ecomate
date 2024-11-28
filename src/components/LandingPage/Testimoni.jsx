import React from 'react';
// Sample product data


    const ProductCarousel = () => {
      const originalItems = [
        { id: 1, name: "Rizki Andini", date: "06 September 2024", message: '"Saya sangat terkesan dengan produk dari Ecomate! Tidak hanya berkualitas, tapi juga membantu saya menjalani gaya hidup yang lebih berkelanjutan. Sangat direkomendasikan!"' },
        { id: 2, name: "Farhan Alfiansyah", date: "06 September 2024", message: '"Saya sangat terkesan dengan produk dari Ecomate! Tidak hanya berkualitas, tapi juga membantu saya menjalani gaya hidup yang lebih berkelanjutan. Sangat direkomendasikan!"' },
        { id: 3, name: "Rizki Andini", date: "06 September 2024", message: '"Saya sangat terkesan dengan produk dari Ecomate! Tidak hanya berkualitas, tapi juga membantu saya menjalani gaya hidup yang lebih berkelanjutan. Sangat direkomendasikan!"' },
        { id: 4, name: "Farhan Alfiansyah", date: "06 September 2024", message: '"Saya sangat terkesan dengan produk dari Ecomate! Tidak hanya berkualitas, tapi juga membantu saya menjalani gaya hidup yang lebih berkelanjutan. Sangat direkomendasikan!"' },
        { id: 5, name: "Rizki Andini", date: "06 September 2024", message: '"Saya sangat terkesan dengan produk dari Ecomate! Tidak hanya berkualitas, tapi juga membantu saya menjalani gaya hidup yang lebih berkelanjutan. Sangat direkomendasikan!"' },
        { id: 6, name: "Farhan Alfiansyah", date: "06 September 2024", message: '"Saya sangat terkesan dengan produk dari Ecomate! Tidak hanya berkualitas, tapi juga membantu saya menjalani gaya hidup yang lebih berkelanjutan. Sangat direkomendasikan!"' },
      ];
    return (
        <div className=' bg-[#2E7D32] h-fit pb-10'>
            <div className="py-14">
                <p className="text-[18px] text-sm text-white text-center justify-center font-semibold">Testimoni</p>
                <h1 className="md:text-5xl text-xl text-white max-w-3xl text-center justify-center font-bold mx-auto">Pengalaman Nyata dengan Produk Ramah Lingkungan Kami</h1>
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
                    "isDraggable": true,
                


                    
                }'
                className="relative h-fit bg-[#2E7D32]"
                >

                <div className="hs-carousel md:w-[75%] w-full justify-center mx-auto overflow-hidden bg-[#2E7D32] rounded-xl">

                    <div className="relative min-h-[500px]  -mx-1"> {/* Tambahkan padding kanan untuk potong card */}
                    <div className="hs-carousel-body absolute top-[-50px] bottom-0 start-[0] md:start-[-170px] flex flex-nowrap opacity-0 cursor-grab transition-transform duration-700 hs-carousel-dragging:transition-none hs-carousel-dragging:cursor-grabbing h-[480px] px-0 md:px-48">
                        {originalItems.map((item) => (
                        <div
                            key={item.id}
                            className="hs-carousel-slide md:px-5 px-10 "
                        >
                            <img src="assets/jpg/user.jpg" className='w-[100px] h-[100px] mx-auto top-[50px] relative rounded-full  object-cover object-top' alt="" />
                            <div className="flex flex-col justify-center bg-white shadow-lg rounded-xl w-full ">
                              <div className="mt-4 h-[397px] p-5 pt-0">
                                <div className='mx-auto items-center justify-center text-center flex px-10 my-20 h-[150px]'>
                                <h1>{item.message}</h1>
                                </div>
                                <div className='mx-auto items-center justify-center text-center flex flex-col'>
                                <h1 className='font-bold text-2xl'>{item.name}</h1>
                                <h1 className='text-sm text-[#999999]'>{item.date}</h1>
                                </div>
                              </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>

                <div className="hs-carousel-pagination  justify-center absolute bottom-3 start-0 end-0 space-x-2 hidden" />
                </div>

            {/* End Slider */}
            </div>

    );
};

export default ProductCarousel;