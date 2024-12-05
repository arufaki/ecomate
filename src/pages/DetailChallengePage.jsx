import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Participants from "../components/DetailChallengePage/Participants";
import ListMission from "../components/DetailChallengePage/ListMission";
import Image from "../assets/png/bg-challenge.png";
const DetailChallengePage = () => {
    
    return <div className="bg-secondary ">
        <Navbar active="challenge"/>
        <div className="min-h-screen">
        <Hero       text="Plastic-Free Week Challange" 
                    button="Gabung sekarang"
                    page="challenge"
                    image={Image}
                    link="/tantangan"/>
                    
                    <Participants />
                    <ListMission />
        </div>
        
        <Footer />
        </div>;
        
};

export default DetailChallengePage;