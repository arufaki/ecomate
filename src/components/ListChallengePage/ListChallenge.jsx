import React, { useState } from "react";
import "preline";

const ListChallenge = () => {
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 6; //maks card
  
  const sampleChallenges = [
    {
      id: 1,
      image: "assets/png/Totebag.png",
      title: "Challenge Hemat Energi",
      description: "Matikan lampu dan perangkat elektronik saat tidak digunakan.",
       
    },
    {
      id: 2,
      image: "assets/png/Totebag.png",
      title: "Challenge Daur Ulang",
      description: "Pisahkan sampah organik dan non-organik untuk didaur ulang.",
       
    },
    {
      id: 3,
      image: "assets/png/Totebag.png",
      title: "Challenge Kurangi Plastik",
      description: "Gunakan tas kain saat berbelanja untuk mengurangi penggunaan plastik.",
       
    },
    {
      id: 4,
      image: "assets/png/Totebag.png",
      title: "Challenge Tanam Pohon",
      description: "Tanam setidaknya satu pohon untuk membantu penghijauan.",
       
    },
    {
      id: 5,
      image: "assets/png/Totebag.png",
      title: "Challenge Hemat Air",
      description: "Kurangi konsumsi air dengan menutup keran saat menyikat gigi.",
       
    },
    {
      id: 6,
      image: "assets/png/Totebag.png",
      title: "Challenge Kurangi Emisi",
      description: "Gunakan transportasi umum atau sepeda untuk mengurangi emisi karbon.",
       
    },
    {
      id: 7,
      image: "assets/png/Totebag.png",
      title: "Challenge Kompos",
      description: "Ubah sampah organik menjadi kompos untuk pemupukan alami.",
       
    },
    {
      id: 8,
      image: "assets/png/Totebag.png",
      title: "Challenge Bersih Lingkungan",
      description: "Lakukan kegiatan bersih-bersih di lingkungan sekitar setiap minggu.",
       
    },
  ];

  const indexOfLastChallenge = currentPage * itemsPerPage;
  const indexOfFirstChallenge = indexOfLastChallenge - itemsPerPage;
  const currentChallenges = sampleChallenges.slice(indexOfFirstChallenge, indexOfLastChallenge);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="max-w-screen-xl mx-auto mb-[117px] ">


      <div className="py-[40px]">
        <p className="text-[36px] font-bold text-4xl "> Semua tantangan ( {sampleChallenges.length} )</p>
        <div className="grid grid-min-rows-3 grid-cols-2 gap-[32px] pt-[24px]">
          {currentChallenges.map((challenge) => (
            <div
              key={challenge.id}
              className="flex flex-col justify-between w-[624px] h-[584px] p-10 items-start rounded-2xl border border-[#E5E7EB] bg-[#FAFAFA]"
            >
              <div>
                <div className="w-[544px] h-[251px] bg-lightgray bg-cover bg-center overflow-hidden rounded-lg">
                  <img
                    className="w-full h-full object-cover"
                    src={challenge.image}
                    alt={challenge.title}
                  />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800 pt-[16px]">
                    {challenge.title}
                  </h3>
                  <p className="mt-1 text-gray-500">{challenge.description}</p>
                </div>
              </div>

              <button className="w-[544px] h-[48px] py-2 px-3 inline-flex justify-center items-center gap-x-2 text-[16px] font-normal rounded-lg border border-transparent bg-[#2E7D32] text-white hover:bg-[#1B4B1E] focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                selengkapnya
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-[1280px] p-[24px] h-[86px] items-center justify-between gap-[10px] rounded-[12px] border border-[#E5E7EB] bg-[#FAFAFA]">
        <button
          type="button"
          className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center text-white bg-green-700 hover:bg-[#1B4B1E] rounded-full focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
          aria-label="Previous"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          
        >
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M15 18L9 12l6-6" />
          </svg>
        </button>

        {/* nomor page */}
        <div className="flex items-center gap-x-2">
          {[...Array(Math.ceil(sampleChallenges.length / itemsPerPage))].map((_, index) => (
            <button
              key={index}
              type="button"
              className={`min-h-[38px] min-w-[38px] flex justify-center items-center rounded-full focus:outline-none ${
                currentPage === index + 1
                  ? 'bg-green-700 text-white !important'
                  : 'bg-none text-black hover:text-white hover:bg-green-700'
              }`}                            
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center text-white bg-green-700 hover:bg-[#1B4B1E] rounded-full focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
          aria-label="Next"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(sampleChallenges.length / itemsPerPage)}
        >
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ListChallenge;
