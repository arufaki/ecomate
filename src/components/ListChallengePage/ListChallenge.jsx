import React, { useState } from "react";
import "preline";
import Pagination from "../Pagination";
import { Link } from "react-router";
import Totebag from "../../assets/png/Totebag.png";
const ListChallenge = () => {
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 6; //maks card
  
  const sampleChallenges = [
    {
      id: 2,
      image: Totebag,
      title: "Challenge Daur Ulang",
      description: "Pisahkan sampah organik dan non-organik untuk didaur ulang.",
      level: "Mudah",
    },
    {
      id: 3,
      image: Totebag,
      title: "Challenge Kurangi Plastik",
      description: "Gunakan tas kain saat berbelanja untuk mengurangi penggunaan plastik.",
      level: "Sulit",

    },
    {
      id: 4,
      image: Totebag,
      title: "Challenge Tanam Pohon",
      description: "Tanam setidaknya satu pohon untuk membantu penghijauan.",
      level: "Sedang",
    },
    {
      id: 5,
      image: Totebag,
      title: "Challenge Hemat Air",
      description: "Kurangi konsumsi air dengan menutup keran saat menyikat gigi.",
      level: "Sulit",
       
    },
    {
      id: 6,
      image: Totebag,
      title: "Challenge Kurangi Emisi",
      description: "Gunakan transportasi umum atau sepeda untuk mengurangi emisi karbon.",
      level: "Sulit",
       
    },
    {
      id: 7,
      image: Totebag,
      title: "Challenge Kompos",
      description: "Ubah sampah organik menjadi kompos untuk pemupukan alami.",
      level: "Sulit",
       
    },
    {
      id: 8,
      image: Totebag,
      title: "Challenge Bersih Lingkungan",
      description: "Lakukan kegiatan bersih-bersih di lingkungan sekitar setiap minggu.",
      level: "Sulit",
       
    },
  ];

  const indexOfLastChallenge = currentPage * itemsPerPage;
  const indexOfFirstChallenge = indexOfLastChallenge - itemsPerPage;
  const currentChallenges = sampleChallenges.slice(indexOfFirstChallenge, indexOfLastChallenge);


  return (
    <div className="max-w-screen-xl mx-auto px-[25px] mb-[117px] ">
      <div className="py-[40px]">
        <p className="text-[36px] font-bold text-xl sm:text-4xl mb-[13px] "> Semua tantangan ( {sampleChallenges.length} )</p>
        <div className="grid grid-min-rows-3 grid-cols-1 sm:grid-cols-2 gap-[32px] pt-[24px]">
          {currentChallenges.map((challenge) => (
            <div
              key={challenge.id}
              className="flex flex-col justify-between w-[382px] sm:w-[624px] min-h-[584px] p-10 mr-[32px]  rounded-2xl border border-[#E5E7EB] bg-[#FAFAFA]"
            >
              <div>
                <div className="w-full h-[251px] bg-lightgray bg-cover bg-center overflow-hidden rounded-lg">
                  <img
                    className="w-full h-full object-cover"
                    src={challenge.image}
                    alt={challenge.title}
                  />
                </div>

                <div>
                <h3 className="text-neutral-800 text-xl font-bold font-['Nunito'] tracking-tight pt-[16px]">
                  {challenge.title}
                  </h3>
                  <p className=" text-justify text-neutral-800 text-base font-normal leading-normal tracking-tight">{challenge.description}</p>
                  </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4 mt-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center px-4 py-2 bg-[#F0FDF4] border-[1px] border-[#166534] text-[#115E59] rounded-full text-[15px] font-semibold ">
                          {challenge.level}
                        </div>
                        <div className="flex items-center justify-center px-4 py-2 bg-[#F0FDF4] border-[1px] border-[#166534] text-[#115E59] rounded-full text-[15px] font-semibold">
                          7 hari
                        </div>
                        <div className="flex items-center justify-center px-4 py-2 bg-[#F0FDF4] border-[1px] border-[#166534] text-[#115E59] rounded-full text-[15px] font-semibold">
                          100 koin
                        </div>
                      </div>
                      <Link to="/detail-tantangan"className="w-full sm:w-auto h-[50px] py-[13px] px-7 inline-flex justify-center sm:justify-end items-center gap-x-2 text-[16px] font-normal rounded-xl border border-transparent bg-[#2E7D32] text-white hover:bg-[#1B4B1E] focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                        Selengkapnya
                      </Link>
                    </div>
            </div>
          ))}
        </div>
      </div>

      {!isLoading && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />}
    </div>
  );
};

export default ListChallenge;
