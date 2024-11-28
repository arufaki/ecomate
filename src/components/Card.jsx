import React from "react";

const Card = ({image, name, description, price, rating}) => {
    return (
        <div className="flex flex-col justify-center bg-white shadow-lg rounded-xl md:w-[371px] w-full"> {/* Tinggi kartu */}
                            <div className="">
                                <img
                                src={image}
                                alt={name}
                                className="w-full h-[200px] object-cover rounded-t-xl"
                                />
                            </div>
                            <div className="mt-4 h-[243px] p-5 pt-0">
                                <div className="flex justify-between items-center">
                                <h1 className="mt-1 text-sm font-bold text-[#1F2937] md:text-[18px] ">
                                    Rp. {price}
                                </h1>
                                <span className="text-base text-[#1F2937]">
                                    <span className="text-xl text-yellow-500 mr-2">★</span>{rating}/5
                                </span>
                                </div>
                                <p className="text-sm text-gray-600 font-semibold py-3">
                                {name}
                                </p>
                                <p className="mt-1 text-sm md:text-base min-h-[72px] text-gray-500 ">
                                {description}
                                </p>
                                <div className='flex-row flex '>
                                <button className="text-white bg-[#2E7D32] text-xs md:text-[15px] mt-5 w-[110px] md:w-[131px] h-[46px] rounded-xl font-bold hover:bg-[#1B4B1E]">
                                Beli Sekarang
                                </button>
                                <button className="text-[#2E7D32] text-sm md:text-[15px] mt-5 w-[110px] md:w-[131px] h-[46px] rounded-xl font-bold flex items-center justify-center hover:text-[#1B4B1E]">
                                <img src='assets/svg/shopping-cart.svg' alt='beli' className="text-[#2E7D32] mr-2 hover:text-[#1B4B1E]" />
                                Keranjang
                                </button>
                                </div>
                            </div>
                            </div>
    );
};

export default Card;