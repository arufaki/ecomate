import React from "react";

const Header = ({ onClick, active }) => {
   
    return (
        <div className="max-w-screen-xl mx-auto px-[25px]">
        <div className="flex flex-col sm:flex-row py-[32px] px-[24px] mb-[24px] justify-between sm:items-center gap-[22px] rounded-[12px] border border-gray-300 bg-zinc-50">
            <p className="text-[24px] sm:text-[36px] font-bold text-center sm:text-left">Temukan tantangan seru</p>
            <div className="flex flex-col sm:flex-row justify-end items-center gap-[16px] sm:gap-[24px]">
            <button onClick={() => onClick('challenge')} 
            className={`w-full sm:w-[182px] h-[66px] rounded-[8px] border-[2px]
                ${active === 'challenge' ? 'bg-[#2E7D32] text-white hover:bg-[#1B4B1E]' : 'border-[#2E7D32]  hover:bg-[#2E7D32] hover:text-white bg-white'}`}
                >Tantangan
            </button>
            <button onClick={() => onClick('leaderboard')} className={`w-full sm:w-[182px] h-[66px]  border-[2px]  rounded-[8px] 
                ${active === 'leaderboard' ? 'bg-[#2E7D32] text-white hover:bg-[#1B4B1E]' : 'border-[#2E7D32]  hover:bg-[#2E7D32] hover:text-white bg-white'}`}
                >Leaderboard
                </button>
            </div>
        </div>
        </div>
    );
}    

export default Header