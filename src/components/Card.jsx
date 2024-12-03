import React from "react";
import { Link } from "react-router";
const Card = ({image, name, description, price, rating, link}) => {
    return (
        <div className="flex flex-col justify-center bg-white shadow-lg rounded-xl w-full"> {/* Tinggi kartu */}
                            <div className="">
                                <img
                                src={image}
                                alt={name}
                                className="w-full h-[150px] md:h-[200px] object-cover rounded-t-xl"
                                />
                            </div>
                            <div className="mt-4 md:h-[243px] h-[180px]  p-5 pt-0">
                                <div className="flex justify-between items-center">
                                <h1 className="mt-1 text-sm font-bold text-[#1F2937] md:text-[18px] ">
                                    Rp. {price}
                                </h1>
                                <span className="text-base text-[#1F2937]">
                                    <span className="text-xl text-yellow-500 mr-2">★</span>{rating}/5
                                </span>
                                </div>
                                <p className="text-sm text-gray-600 font-semibold py-3 md:min-h-[40px] min-h-[64px]">
                                {name}
                                </p>
                                <p className="mt-1 hidden md:flex text-sm md:text-base min-h-[72px] text-gray-500 ">
                                {description}
                                </p>
                                <div className='flex-row flex '>
                                
                                <a href={link} className="text-white  bg-primary text-xs md:text-[15px] mt-5 w-[150px] md:w-[131px] h-[46px] rounded-xl font-bold hover:bg-[#1B4B1E]">
                                <p className="mt-3.5 ml-4">Beli Sekarang</p>
                                </a>
                                <Link to="/" className="text-primary text-sm md:text-[15px] mt-5 w-[110px] md:w-[131px] h-[46px] rounded-xl font-bold flex items-center justify-center hover:text-[#1B4B1E]">
                                <img src='../src/assets/svg/shopping-cart.svg' alt='beli' className="text-primary mr-2 hover:text-[#1B4B1E]" />
                                <p className="hidden md:flex">Keranjang</p>
                                </Link>
                                </div>
                            </div>
                            </div>
    );
};

export default Card;