import React from "react";
import Image from "../../assets/png/bg-mission.png";
import Crown from "../../assets/png/crown.png";
import User from "../../assets/jpg/user.jpg";
import Second from "../../assets/png/second.png";
import Third from "../../assets/png/third.png";
import { Trophy } from "lucide-react";
import { m } from "motion/react";

const LeaderBoard = () => {
    const Leaderboard = [
        {
            name: "John Doe",
            exp: 4000,
            totalChallenge: 100
        },
        {
            name: "Jane Smith",
            exp: 3000,
            totalChallenge: 100
        },
        {
            name: "Mike Johnson",
            exp: 102,
            totalChallenge: 100
        },
        {
            name: "John Doe",
            exp: 8000,
            totalChallenge: 100
        },
        {
            name: "Jane Smith",
            exp: 321,
            totalChallenge: 100
        },
        {
            name: "Mike Johnson",
            exp: 100,
            totalChallenge: 100
        },
        {
            name: "John Doe",
            exp: 4000,
            totalChallenge: 100
        },
        {
            name: "Jane Smith",
            exp: 3000,
            totalChallenge: 100
        },
        {
            name: "Mike Johnson",
            exp: 1000,
            totalChallenge: 100
        },
    ];

    // Sort leaderboard by experience in descending order
    const sortedLeaderboard = [...Leaderboard].sort((a, b) => b.exp - a.exp);

    return (
        <div className="relative h-fit bg-[#37953C] mb-20 md:w-[1280px] py-10 w-[375px] items-center justify-center mx-auto rounded-[48px] overflow-hidden">
            {/* Background Image Overlay */}
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-30 z-0" 
                style={{ 
                    backgroundImage: `url(${Image})`,
                }}
            ></div>

            {/* Content - needs relative positioning to be above the background */}
            <div className="relative z-10">
                <div className="mx-auto rounded-[40px] md:w-[1184px] w-[335px] flex flex-col justify-center items-center">
                    <h1 className="md:text-5xl text-xl font-bold text-white my-10">LeaderBoard</h1>
                    <div className="flex flex-row gap-10 bg-[#1B4B1E] text-white w-[694px] p-5 rounded-[100px]">
                        <a className="w-[194px] bg-secondary text-black text-center rounded-[100px] py-3 text-2xl">Hari ini </a>
                        <a className="w-[194px] text-center rounded-[100px] py-3 text-2xl">Bulan ini</a>
                        <a className="w-[194px] text-center rounded-[100px] py-3 text-2xl">Semua</a>
                    </div>
                </div>

                {/* Leaderboard Ranking Layout */}
                <div className="flex justify-center items-center mt-10 space-x-10">
                    {/* Second Place - Left */}
                    <div className="flex flex-col items-center transform scale-90">
                        <div className="bg-primary rounded-[48px] p-6 w-[250px] h-[424px] text-center">
                        <div className="flex flex-col justify-center text-center items-center mb-4">
                                <img src={Second} className="w-[80px] h-[80px] my-5"/>
                                <img src={User} className="w-[150px] h-[150px] object-cover object-top rounded-full"/>
                            </div>
                            <h2 className="text-white text-4xl font-bold">{sortedLeaderboard[1].exp} EXP</h2>
                            <p className="text-white/80 text-2xl">{sortedLeaderboard[1].name}</p>
                        </div>
                        
                    </div>

                    {/* First Place - Center */}
                    <div className="flex flex-col items-center">
                        <div className="bg-[#F4F4D7] rounded-[48px] p-8 w-[300px] h-[538px] text-center">
                            <div className="flex flex-col justify-center text-center items-center mb-4">
                                <img src={Crown} className="w-[80px] h-[80px] my-5"/>
                                <img src={User} className="w-[200px] h-[200px] object-cover object-top rounded-full"/>
                            </div>
                            <h2 className="text-primary text-5xl font-bold my-5">{sortedLeaderboard[0].exp} EXP</h2>
                            <p className="text-primary text-3xl">{sortedLeaderboard[0].name}</p>
                        </div>
                    </div>

                    {/* Third Place - Right */}
                    <div className="flex flex-col items-center transform scale-90">
                        <div className="bg-primary rounded-3xl p-6 w-[250px] h-[424px] text-center">
                        <div className="flex flex-col justify-center text-center items-center mb-4">
                                <img src={Third} className="w-[80px] h-[80px] my-5"/>
                                <img src={User} className="w-[150px] h-[150px] object-cover object-top rounded-full"/>
                            </div>
                            <h2 className="text-white text-4xl font-bold">{sortedLeaderboard[2].exp} EXP</h2>
                            <p className="text-white/80 text-2xl"> {sortedLeaderboard[2].name}</p>
                        </div>
                        
                    </div>
                </div>
                <div className="bg-neutral-50 w-[1184px] justify-center items-center mx-auto rounded-[40px] p-10 my-10">
                    {sortedLeaderboard.slice(3).map((leader, index) => (
                        <div key={index} className="flex flex-row justify-between items-center p-5 w-[1088px] h-[136px] bg-secondary rounded-[24px] my-5">
                            <div className="flex flex-row items-center text-primary text-3xl font-bold">
                                <h1 className="  mr-20 ">{index + 4}</h1>
                                <img src={User} className="w-[88px] h-[88px] object-cover object-top rounded-full mx-10"/>
                                <h2 className="w-[350px]">{leader.name} </h2>
                                <h1 className="mx-10">{leader.totalChallenge} Challenge</h1>
                                <p className="">{leader.exp} EXP</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LeaderBoard;