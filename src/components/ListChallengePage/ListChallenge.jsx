import React, { useState } from "react";
import "preline";
import Pagination from "../Pagination";
const ListChallenge = () => {
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 6; //maks card
  
  const sampleChallenges = [
    {
      id: 1,
      image: "assets/png/Totebag.png",
      title: "Challenge Hemat Energi",
      description: "Matikan lampu dan perangkat elektronik saat tidak digunakan.",
      buttonText: "Ikuti Challenge",
    },
    {
      id: 2,
      image: "assets/png/Totebag.png",
      title: "Challenge Daur Ulang",
      description: "Pisahkan sampah organik dan non-organik untuk didaur ulang.",
      buttonText: "Ikuti Challenge",
    },
    {
      id: 3,
      image: "assets/png/Totebag.png",
      title: "Challenge Kurangi Plastik",
      description: "Gunakan tas kain saat berbelanja untuk mengurangi penggunaan plastik.",
      buttonText: "Ikuti Challenge",
    },
    {
      id: 4,
      image: "assets/png/Totebag.png",
      title: "Challenge Tanam Pohon",
      description: "Tanam setidaknya satu pohon untuk membantu penghijauan.",
      buttonText: "Ikuti Challenge",
    },
    {
      id: 5,
      image: "assets/png/Totebag.png",
      title: "Challenge Hemat Air",
      description: "Kurangi konsumsi air dengan menutup keran saat menyikat gigi.",
      buttonText: "Ikuti Challenge",
    },
    {
      id: 6,
      image: "assets/png/Totebag.png",
      title: "Challenge Kurangi Emisi",
      description: "Gunakan transportasi umum atau sepeda untuk mengurangi emisi karbon.",
      buttonText: "Ikuti Challenge",
    },
    {
      id: 7,
      image: "assets/png/Totebag.png",
      title: "Challenge Kompos",
      description: "Ubah sampah organik menjadi kompos untuk pemupukan alami.",
      buttonText: "Ikuti Challenge",
    },
    {
      id: 8,
      image: "assets/png/Totebag.png",
      title: "Challenge Bersih Lingkungan",
      description: "Lakukan kegiatan bersih-bersih di lingkungan sekitar setiap minggu.",
      buttonText: "Ikuti Challenge",
    },
    {
      id: 9,
      image: "assets/png/Totebag.png",
      title: "Challenge Hemat Kertas",
      description: "Kurangi penggunaan kertas dengan beralih ke dokumen digital.",
      buttonText: "Ikuti Challenge",
    },
    {
      id: 10,
      image: "assets/png/Totebag.png",
      title: "Challenge Makan Lokal",
      description: "Beli produk lokal untuk mendukung ekonomi lokal dan mengurangi jejak karbon.",
      buttonText: "Ikuti Challenge",
    },
  ];

  const indexOfLastChallenge = currentPage * itemsPerPage;
  const indexOfFirstChallenge = indexOfLastChallenge - itemsPerPage;
  const currentChallenges = sampleChallenges.slice(indexOfFirstChallenge, indexOfLastChallenge);


  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="flex w-[1280px] p-6 justify-center items-end gap-[22px] rounded-[12px] border border-gray-300 bg-zinc-50">
        <div className="flex h-[86px] flex-col items-start gap-[10px] flex-[1_0_0]">
          <p className="text-[#262626] text-[16px] font-bold leading-[24px] tracking-[0.08px]">
            Cari
          </p>
          <div className="max-w-sm">
            <div
              className="relative"
              data-hs-combo-box='{
                "groupingType": "default",
                "preventSelection": true,
                "isOpenOnFocus": true,
                "groupingTitleTemplate": "<div class=\"block text-xs text-gray-500 m-3 mb-1\"></div>"
              }'
            >
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                  <svg
                    className="shrink-0 size-4 text-gray-400"
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
                    <circle cx={11} cy={11} r={8} />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <input
                  className="py-3 ps-10 pe-4 block w-[1158px] h-[52px] border border-[#E5E7EB] rounded-[8px] text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  type="text"
                  role="combobox"
                  aria-expanded="false"
                  placeholder="Cari tantangan"
                  defaultValue=""
                  data-hs-combo-box-input=""
                />
              </div>
            </div>
          </div>
        </div>
        <button className="bg-[#2E7D32] hover:bg-[#1B4B1E] h-[52px] w-[52px] rounded-[8px] flex items-center justify-center">
          <img src="assets/png/search.png" alt="search" className="h-[20px] w-[20px]" />
        </button>
      </div>

      <div className="py-[40px]">
        <p>Menampilkan {currentChallenges.length} dari {sampleChallenges.length} hasil</p>
        <div className="grid grid-min-rows-3 grid-cols-2 gap-[32px]">
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

              <button className="w-[544px] h-[48px] py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#2E7D32] text-white hover:bg-[#1B4B1E] focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                {challenge.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
        {/* Pagination */}
        <Pagination 
        currentPage={currentPage}
        totalItems={sampleChallenges.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ListChallenge;
