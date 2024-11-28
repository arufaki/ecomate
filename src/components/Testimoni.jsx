import React from "react";
import User from "../assets/user.jpg";

const Testimoni = () => {
    const originalItems = [
      { name: "Rizki Andini", date: "06 September 2024", message: "isi testimoni " },
      { name: "Farhan Alfiansyah", date: "06 September 2024", message: "isi testimoni " },
      { name: "Rizki Andini", date: "06 September 2024", message: "isi testimoni " },
      { name: "Farhan Alfiansyah", date: "06 September 2024", message: "isi testimoni " },
      { name: "Rizki Andini", date: "06 September 2024", message: "isi testimoni " },
      { name: "Farhan Alfiansyah", date: "06 September 2024", message: "isi testimoni " },
    ];

  return (
    <div className="h-auto w-full flex flex-col items-center justify-center bg-[#2E7D32]">
      <div className="text-center pb-[92px] pt-[24px] sm:pt-[48px] sm:pb-[80] ">
        <p className="text-[14px] sm:text-[18px] font-semibold text-white">Testimoni</p>
        <h1 className="text-[20px] sm:text-[48px] font-bold text-white leading-[1.2]">
          Pengalaman Nyata dengan <br />
          Produk Ramah Lingkungan Kami
        </h1>
      </div>

      {/* Carousel */}
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
                    {originalItems.map((item, index) => (
                      <div
                        key={index}
                        className="relative flex-none w-[198px] h-[243px] sm:w-[397px] sm:h-[487px] bg-white rounded-[40px] p-6 flex flex-col items-center justify-between shadow-lg overflow-visible shrink-0"
                      >
                        <img
                          src={User}
                          alt={`Avatar ${item.name}`}
                          className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-[50px] h-[50px] sm:h-[100px] sm:w-[100px] rounded-full object-cover shadow-md"
                        />
                        <div className="flex items-center justify-center text-center h-full">
                          <p className="text-black text-[9px] sm:text-[16px]">{item.message}</p>
                        </div>

                        <div className="text-center">
                          <p className="font-semibold text-black text-[12px] sm:text-[24px] ">{item.name}</p>
                          <p className="text-sm text-gray-500 text-[9px] sm:text-[18px] ">{item.date}</p>
                        </div>
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
    </div>
  );
};

export default Testimoni;
