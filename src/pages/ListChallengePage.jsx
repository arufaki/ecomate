import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroChallenge from "../components/ListChallengePage/HeroChallenge";
import ListChallenge from "../components/ListChallengePage/ListChallenge";
import MyChallenge from "../components/ListChallengePage/MyChallenge";
const ListChallengePage = () => {
    return <div className="bg-[#F9F9EB] ">
        <div > 
        <Navbar active="challenge"/>
        </div>
        <HeroChallenge />
        <MyChallenge/>
        <ListChallenge/>
        <Footer />
        </div>;
        
};

export default ListChallengePage;