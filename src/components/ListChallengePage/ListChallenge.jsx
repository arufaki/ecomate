import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import api from "../../services/api";
import MyChallenge from "./MyChallenge";
const ListChallenge = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [challenges, setChallenges] = useState([]);
  const [myChallenges, setMyChallenges] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const challengesPerPage = 4;

  const getChallenges = async () => {
    try {
      setIsLoading(true);
  
      // Fetch challenges yang belum diambil
      const unclaimedResponse = await api.get("/challenges/unclaimed");
      const unclaimedChallenges = unclaimedResponse.data.data;
    
      // Fetch challenges yang sudah diambil
      const activeResponse = await api.get("/challenges/active");
      const activeChallenges = activeResponse.data.data;
      

      // Update state untuk challenges yang sudah diambil
      setMyChallenges(activeChallenges);
      
      // Update state untuk challenges yang belum diambil
      setChallenges(unclaimedChallenges);
  
      // Hitung total pages untuk pagination (berdasarkan challenges yang belum diambil)
      const total = Math.ceil(unclaimedChallenges?.length / challengesPerPage);
      setTotalPages(total);
  
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };
  

  useEffect(() => {
    getChallenges();
  }, []);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Get challenges for current page
  const indexOfLastChallenge = currentPage * challengesPerPage;
  const indexOfFirstChallenge = indexOfLastChallenge - challengesPerPage;
  const currentChallenges = challenges.slice(
    indexOfFirstChallenge, 
    indexOfLastChallenge
  );

  // Render loading state
  if (isLoading) {
    return (
      <div className="max-w-screen-xl mx-auto px-[25px] mb-[117px]">
        <p>Loading challenges...</p>
      </div>
    );
  }

  return (
    <div>
      <MyChallenge myChallenges={myChallenges} />
      <div className="max-w-screen-xl mx-auto px-[25px] mb-[117px]">
        <div className="py-[40px]">
          <p className="text-[36px] font-bold text-xl sm:text-4xl mb-[13px]">
            Semua tantangan ({challenges?.length})
          </p>
          <div className="grid grid-min-rows-3 grid-cols-1 sm:grid-cols-2 pt-[24px] md:gap-2">
            {currentChallenges?.map((challenge) => (
              <div
                key={challenge.ID}
                className="flex flex-col justify-between min-h-[584px] p-4 w-full md:p-10 mr-[32px] mb-5 rounded-2xl border border-[#E5E7EB] bg-[#FAFAFA]"
              >
                <div>
                  <div className="w-full h-[251px] bg-lightgray bg-cover bg-center overflow-hidden rounded-lg">
                    <img
                      className="w-full h-full object-cover"
                      src={challenge.ChallengeImg}
                      alt={challenge.Title}
                    />
                  </div>
                  <div>
                    <h3 className="text-neutral-800 text-xl font-bold font-['Nunito'] tracking-tight pt-[16px]">
                      {challenge.Title}
                    </h3>
                    <p className="text-justify text-neutral-800 text-base font-normal leading-normal tracking-tight">
                      {challenge.Description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4 mt-4">
                  <div className="flex items-center md:gap-4 gap-2">
                    <div className="flex items-center justify-center px-4 py-2 bg-[#F0FDF4] border-[1px] border-[#166534] text-[#115E59] rounded-full text-[15px] font-semibold">
                      {challenge.Difficulty}
                    </div>
                    <div className="flex items-center justify-center px-4 py-2 bg-[#F0FDF4] border-[1px] border-[#166534] text-[#115E59] rounded-full text-[15px] font-semibold">
                      {challenge.DurationDays} hari
                    </div>
                    <div className="flex items-center justify-center px-4 py-2 bg-[#F0FDF4] border-[1px] border-[#166534] text-[#115E59] rounded-full text-[15px] font-semibold">
                      {challenge.Coin} koin
                    </div>
                  </div>
                  <Link 
                    to={`/detail-tantangan/${challenge.ID}`}
                    className="w-full sm:w-auto h-[50px] py-[13px] px-7 inline-flex justify-center sm:justify-end items-center gap-x-2 text-[16px] font-normal rounded-xl border border-transparent bg-[#2E7D32] text-white hover:bg-[#1B4B1E] focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Selengkapnya
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default ListChallenge;