import React, { useState } from "react";
import "preline";

const MyChallenge = () => {
    const myChallenges = [
        {
          id: 1,
          image: "assets/png/Totebag.png",
          title: "Challenge Hemat Energi",
          description: "Matikan lampu dan perangkat elektronik saat tidak digunakan .",
           
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

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredChallenges, setFilteredChallenges] = useState(myChallenges);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    if (searchQuery === "") {
      setFilteredChallenges(myChallenges);
    } else {
      const filtered = myChallenges.filter((challenge) =>
        challenge.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredChallenges(filtered);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto mb-[117px] px-[25px] ">
      <div className="flex flex-col sm:flex-row py-[32px] px-[24px] mb-[24px] justify-between sm:items-center gap-[22px] rounded-[12px] border border-gray-300 bg-zinc-50">
        <p className="text-[24px] sm:text-[36px] font-bold text-center sm:text-left">Temukan tantangan seru</p>
        <div className="flex flex sm:flex-row justify-end items-center gap-[16px] sm:gap-[24px]">
          <button className="w-full sm:w-[182px] h-[66px] rounded-[8px] bg-[#2E7D32] text-white hover:bg-[#1B4B1E]">Tantangan</button>
          <button className="w-full sm:w-[182px] h-[66px] bg-transparent border-[2px] border-[#2E7D32] rounded-[8px] hover:bg-[#2E7D32] text-[#2E7D32] hover:text-white">Leaderboard</button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row  w-full p-6 justify-center items-end gap-[22px] rounded-[12px] border border-gray-300 bg-zinc-50">
        <div className="flex h-[86px] w-full flex-col items-start gap-[10px] flex-[1_0_0]">
          <p className="text-[#262626] text-[16px] font-bold leading-[24px] tracking-[0.08px]">
            Cari
          </p>
          <div
              className="relative w-full"
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
                    className="py-3 ps-10 pe-4 block w-full h-[52px] border border-[#E5E7EB] rounded-[8px] text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    type="text"
                    placeholder="Cari tantangan"
                    value={searchQuery} 
                    onChange={handleSearchChange} 
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                        handleSearchClick(); 
                        }
                    }}
                    />
              </div>
            </div>
        </div>

        <div className="flex h-[86px] w-full flex-col items-start gap-[10px] flex-[1_0_0]">
          <p className="text-[#262626] text-[16px] font-bold leading-[24px] tracking-[0.08px]">
            Tingkat Kesulitan
          </p>
          <div className="relative w-full">
            <select className="py-3 ps-4 pe-10 w-full h-[52px] border border-gray-300 rounded-[8px] text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 appearance-none">
              <option value="" disabled selected>
                Pilih tingkat kesulitan
              </option>
              <option value="1">Mudah</option>
              <option value="2">Sedang</option>
              <option value="3">Sulit</option>
            </select>
            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.646l3.71-3.414a.75.75 0 111.06 1.06l-4 3.7a.75.75 0 01-1.06 0l-4-3.7a.75.75 0 01-.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <button
          className="bg-[#2E7D32] hover:bg-[#1B4B1E] h-[52px] min-w-[52px] rounded-[8px] flex items-center justify-center"
          onClick={handleSearchClick}
        >
          <img src="assets/png/search.png" alt="search" className="h-[20px] w-[20px]" />
        </button>
        
      </div>

      <div className="py-[40px]">
        <p className="text-[36px] font-bold text-4xl "> Tantangan saya ( {filteredChallenges.length} )</p>
        <div
          data-hs-carousel='{
            "loadingClasses": "opacity-0",
            "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer",
            "slidesQty": {
              "xs": 1,
              "lg": 3
            },
            "isCentered": true,
            "isSnap": true
          }'
          className="relative"
        >
          <div className="hs-carousel w-full flex snap-x snap-mandatory overflow-x-auto bg-transparent rounded-lg">
            <div className="hs-carousel-body min-h-72 flex flex-nowrap  gap-2 transition-transform duration-700">
              {filteredChallenges.map((challenge) => (
                <div
                  key={challenge.id}
                  className="flex flex-col justify-between w-[624px] min-h-[584px] p-10 mr-[32px] items-start rounded-2xl border border-[#E5E7EB] bg-[#FAFAFA]"
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

                  {/* Progress */}
                  <div className="w-full mt-auto py-[32px]">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-sm text-gray-500">Progress</p>
                      <p className="text-sm text-gray-500">{`${25}%`}</p>
                    </div>

                    <div
                      className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden"
                      role="progressbar"
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="flex flex-col justify-center rounded-full overflow-hidden bg-[#57C15D] text-xs text-white text-center whitespace-nowrap transition duration-500"
                        style={{ width: "25%" }}
                      />
                    </div>
                  </div>
                  {/* End Progress */}

                  <button className="w-[544px] h-[48px] py-2 px-3 inline-flex justify-center items-center gap-x-2 text-[16px] font-normal rounded-lg border border-transparent bg-[#2E7D32] text-white hover:bg-[#1B4B1E] focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                    selengkapnya
                  </button>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MyChallenge;
