import React from "react";

const Leaderboard = () => {
    const Participants = [
        {
            rank: 1,
            participants: "Amelia Yusana",
            state: "Indonesia",
            totalPoint: 536,
            status: "Complete"
        },
        {
            rank: 2,
            participants: "Amelia Yusana",
            state: "Indonesia",
            totalPoint: 536,
            status: "Complete"
        },
        {
            rank: 3,
            participants: "Amelia Yusana",
            state: "Indonesia",
            totalPoint: 536,
            status: "Complete"
        },
        {
            rank: 4,
            participants: "Amelia Yusana",
            state: "Indonesia",
            totalPoint: 536,
            status: "Complete"
        },
        {
            rank: 5,
            participants: "Amelia Yusana",
            state: "Indonesia",
            totalPoint: 536,
            status: "Complete"
        },
        {
            rank: 6,
            participants: "Amelia Yusana",
            state: "Indonesia",
            totalPoint: 536,
            status: "Complete"
        },
        {
            rank: 7,
            participants: "Amelia Yusana",
            state: "Indonesia",
            totalPoint: 536,
            status: "Complete"
        },
        {
            rank: 8,
            participants: "Amelia Yusana",
            state: "Indonesia",
            totalPoint: 536,
            status: "Complete"
        },
        {
            rank: 9,
            participants: "Amelia Yusana",
            state: "Indonesia",
            totalPoint: 536,
            status: "Complete"
        },
        {
            rank: 10,
            participants: "Amelia Yusana",
            state: "Indonesia",
            totalPoint: 536,
            status: "Complete"
        },
    ]
    return (
        <div>
            <h1 className="text-5xl font-bold w-full max-w-[1328px] text-center mx-auto text-neutral-800 py-10">Leaderboard</h1>
            <div className="bg-primary text-white md:max-w-[1328px] mx-auto rounded-[50px] my-20 p-5 md:p-20">
            <table className=" divide-y divide-gray-200 mx-auto w-full">
                <thead >
                    <tr className=""> 
                        <th className="md:pt-10 text-center text-base md:text-2xl font-bold text-white uppercase tracking-wider ">Rank</th>
                        <th className="md:pt-10 text-center text-base md:text-2xl font-bold text-white uppercase tracking-wider">Participants</th>
                        <th className="pr-52 md:pt-10 hidden md:flex text-center text-base md:text-2xl font-bold text-white uppercase tracking-wider">State</th>
                        <th className="px-6 md:pt-10 text-center text-base md:text-2xl font-bold text-white uppercase tracking-wider">Total Point</th>
                        <th className="px-6 md:pt-10 text-center hidden md:flex text-base md:text-2xl font-bold text-white uppercase tracking-wider">Status</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {Participants.map((participant, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-white text-lg text-center">{participant.rank}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-white text-lg text-center">{participant.participants}</td>
                            <td className="pr-56 px-6 py-4 hidden md:flex whitespace-nowrap text-white text-lg text-center">{participant.state}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-white text-lg text-center">{participant.totalPoint}</td>
                            <td className="px-6 py-4 whitespace-nowrap hidden md:flex text-white text-lg text-center">{participant.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default Leaderboard;