import React from "react";

const Participants = () => {
    return (
        <div>
            <div className="bg-primary w-[375px] md:w-[1280px] md:h-[279px] mx-auto rounded-[40px] my-32 flex md:flex-row flex-col text-white">
                <div className="flex-col p-20">
                    <h1 className="text-5xl font-bold text-center ">11,492</h1>
                    <p className="text-3xl semo-bold text-center mt-8">Aksi</p>
                </div>
                <hr className="w-[50%] bg-white flex md:hidden mx-auto"/>
                <div className="h-[60%] w-[2px] bg-white mt-16 md:flex hidden"></div>
                <div className="flex-col p-20">
                <h1 className="text-5xl font-bold text-center">23,476</h1>
                    <p className="text-3xl semo-bold text-center mt-8">Partisipan</p>
                </div>
                <hr className="w-[50%] bg-white flex md:hidden mx-auto"/>
                <div className="h-[60%] w-[2px] bg-white mt-16 md:flex hidden"></div>
                <div className="flex-col p-20">
                <h1 className="text-5xl font-bold text-center">100</h1>
                    <p className="text-3xl semo-bold text-center mt-8">Total Koin</p>
                </div>
                <hr className="w-[50%] bg-white flex md:hidden mx-auto"/>
                <div className="h-[60%] w-[2px] bg-white mt-16 md:flex hidden"></div>
                <div className="flex-col p-20">
                <h1 className="text-5xl font-bold text-center">200</h1>
                    <p className="text-3xl semo-bold text-center mt-8">Exp</p>
                </div>
            </div>
        </div>
    );  
};

export default Participants