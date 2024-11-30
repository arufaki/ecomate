import React from "react";
import InputForm from "../Login/InputForm";
const FilterBar = () => {
    return (
        <div>
            <div className=" bg-[#FAFAFA] border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 md:w-[1222px] w-[390px] ml-3  md:mx-auto mt-20">
            <form action="" className="flex md:flex-row flex-col">
            <div className=" w-[353px] ">
                
                <InputForm
                    id="search"
                    label="Cari"
                    ps="ps-11"
                    type="text"
                    placeholder="Cari Produk"
                    iconStart="/assets/svg/search.svg"
                />
                
            </div>
            <div className="w-[353px] mx-0 md:mx-5 my-5 md:my-0">
                <label
                    htmlFor="hs-select-label"
                    className="block text-base font-bold mb-2 "
                >
                    Kategori
                </label>
                <select
                    id="hs-select-label"
                    className="py-3 px-4 pe-1 block w-full rounded-lg text-sm border outline-none placeholder:text-[#6B7280] placeholder:font-semibold placeholder:text-sm border-gray-200  focus:border-blue-500 focus:ring-blue-500 focus:outline-blue-500"
                >
                    <option >Pilih Kategori</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>                                                                                       
            </div>
            <div className="w-[353px]">
                <label
                    htmlFor="hs-select-label"
                    className="block text-base font-bold mb-2 "
                >
                    Urutkan
                </label>
                <select
                    id="hs-select-label"
                    className="py-3 px-4 pe-1 block w-full rounded-lg text-sm border outline-none placeholder:text-[#6B7280] placeholder:font-semibold placeholder:text-sm border-gray-200  focus:border-blue-500 focus:ring-blue-500 focus:outline-blue-500"
                >
                    <option >Urutkan Berdasarkan</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>                                                                                       
            </div>
            <button className="md:w-[45px] md:h-[45px] w-[353px] h-[52px] bg-[#2E7D32] rounded-lg flex items-center justify-center mt-8 mx-0 md:mx-5">
                <img src="/assets/svg/search-button.svg" alt="filter"  />
            </button>
            </form>
        </div>
        </div>
    );
};

export default FilterBar;