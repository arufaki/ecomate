import React, { useRef, useEffect, useState } from "react";
import "preline";
import User from "../assets/user.jpg";

const Testimoni = () => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    window.PL?.initialize();
  }, []);

  const startDragging = (e) => {
    setIsDragging(true);
    setStartX(e.pageX || e.touches[0].pageX);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const handleDragging = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX) * 2; // Sesuaikan sensitivitas drag
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="h-auto w-full flex flex-col items-center justify-center bg-[#2E7D32]">
      {/* Header Section */}
      <div className="text-center pb-[92px] pt-[24px] sm:pt-[48px] sm:pb-[80] ">
      <p className="text-[14px] sm:text-[18px] font-semibold text-white">Testimoni</p>
      <h1 className="text-[20px] sm:text-[48px] font-bold text-white leading-[1.2]">
          Pengalaman Nyata dengan <br />
          Produk Ramah Lingkungan Kami
        </h1>
      </div>

      {/* Carousel */}
      <div
        className="relative w-full no-scrollbar"
        onMouseDown={startDragging}
        onMouseLeave={stopDragging}
        onMouseUp={stopDragging}
        onMouseMove={handleDragging}
        onTouchStart={startDragging}
        onTouchEnd={stopDragging}
        onTouchMove={handleDragging}
      >
        <div
          ref={carouselRef}
          className="flex gap-6 bg-[#2E7D32] cursor-grab overflow-x-scroll no-scrollbar p-12"

        >
          {[ 
            {
              name: "Rizki Andini",
              date: "06 September 2024",
              message: "isi testimoni ",
            },
            {
              name: "Farhan Alfiansyah",
              date: "06 September 2024",
              message: "isi testimoni ",
            },
            {
              name: "Rizki Andini",
              date: "06 September 2024",
              message: "isi testimoni ",
            },
            {
              name: "Farhan Alfiansyah",
              date: "06 September 2024",
              message: "isi testimoni ",
            },            {
              name: "Rizki Andini",
              date: "06 September 2024",
              message: "isi testimoni ",
            },
            {
              name: "Farhan Alfiansyah",
              date: "06 September 2024",
              message: "isi testimoni ",
            },
            // data lainnya
          ].map((item, index) => (
            <div
              key={index}
              className="relative flex-none w-[198px] h-[243px] sm:w-[397px] sm:h-[487px] bg-white rounded-[40px] p-6 flex flex-col items-center justify-between shadow-lg overflow-visible shrink-0"
              >
              {/* Avatar */}
              <img
                src={User}
                alt={`Avatar ${item.name}`}
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-[50px] h-[50px] sm:h-[100px] sm:w-[100px] rounded-full object-cover shadow-md"
              />
              <div className="flex items-center justify-center text-center h-full">
                <p className="text-black text-[9px] sm:text-[16px]">{item.message}</p>
              </div>

              <div className="text-center  ">
                <p className="font-semibold text-black text-[12px] sm:text-[24px] ">{item.name}</p>
                <p className="text-sm text-gray-500 text-[9px] sm:text-[18px] ">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
