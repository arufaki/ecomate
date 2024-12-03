import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Description from "../components/DetailChallengePage/Description";
import Participants from "../components/DetailChallengePage/Participants";
import ParticipantsFeeds from "../components/DetailChallengePage/ParticipantsFeeds";
import Leaderboard from "../components/DetailChallengePage/LeaderBoard";
const DetailChallengePage = () => {
    
    return <div className="bg-secondary ">
        <Navbar active="challenge"/>
        <div className="min-h-screen">
        <Hero       text="Plastic-Free Week Challange" 
                    button="Gabung sekarang"
                    image="assets/png/bg-challenge.png"/>
                    <Description />
                    <Participants />
                    <ParticipantsFeeds />
                    <Leaderboard />    
        </div>
        
        <Footer />
        </div>;
        
};

export default DetailChallengePage;