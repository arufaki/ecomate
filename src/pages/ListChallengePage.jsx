import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/ListChallengePage/hero"
import ListChallenge from "../components/ListChallengePage/ListChallenge";
const ListChallengePage = () => {
    return <div className="bg-[#F9F9EB] ">
        <div> 
        <Navbar active="challenge"/>
        <div className="min-h-screen"> 
          <Hero />
          <ListChallenge/>
        </div>
        <Footer />
        </div>;
        
};

export default ListChallengePage;