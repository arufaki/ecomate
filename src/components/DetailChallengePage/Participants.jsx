import React from "react";

const Participants = () => {
    return (
        <div>
            <h1 className="text-3xl md:text-5xl font-bold w-full max-w-[1328px] text-center mx-auto text-neutral-800 py-10">
                Plastic-Free Week Participants
            </h1>
            <div className="bg-primary w-[375px] md:w-[1280px] md:h-[279px] mx-auto rounded-[40px] my-10 flex md:flex-row flex-col text-white">
                <div className="flex-col p-20">
                    <h1 className="text-5xl font-bold text-center ">45,783</h1>
                    <p className="text-3xl semo-bold text-center mt-8">Actions</p>
                </div>
                <hr className="w-[50%] bg-white flex md:hidden mx-auto"/>
                <div className="h-[60%] w-[2px] bg-white mt-16 md:flex hidden"></div>
                <div className="flex-col p-20">
                <h1 className="text-5xl font-bold text-center">23,476</h1>
                    <p className="text-3xl semo-bold text-center mt-8">Participants</p>
                </div>
                <hr className="w-[50%] bg-white flex md:hidden mx-auto"/>
                <div className="h-[60%] w-[2px] bg-white mt-16 md:flex hidden"></div>
                <div className="flex-col p-20">
                <h1 className="text-5xl font-bold text-center">11,492</h1>
                    <p className="text-3xl semo-bold text-center mt-8">Educational Impact</p>
                </div>
                <hr className="w-[50%] bg-white flex md:hidden mx-auto"/>
                <div className="h-[60%] w-[2px] bg-white mt-16 md:flex hidden"></div>
                <div className="flex-col p-20">
                <h1 className="text-5xl font-bold text-center">85,666</h1>
                    <p className="text-3xl semo-bold text-center mt-8">Plastic Reduced</p>
                </div>
            </div>
        </div>
    );  
};

export default Participants