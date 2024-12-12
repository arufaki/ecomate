import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroChallenge from "../components/ListChallengePage/HeroChallenge";
import ListChallenge from "../components/ListChallengePage/ListChallenge";
import MyChallenge from "../components/ListChallengePage/MyChallenge";
import LeaderBoard from "../components/ListChallengePage/LeaderBoard";
import Header from "../components/ListChallengePage/Header";
import StickyCtaButton from "../components/StickyCtaButton";
const ListChallengePage = () => {
    const [currentPage, setCurrentPage] = useState('challenge');
    const [searchParams, setSearchParams] = useState(null);
    const handleSearchSubmit = (searchData) => {
    
        setSearchParams(searchData);
    };
    const handleNavigation = (page) => {
        setCurrentPage(page);
        // Tambahan logika navigasi jika diperlukan
    };
    return  (<div className="bg-[#F9F9EB] ">

        <Navbar active="challenge"/>

        <HeroChallenge />
        <Header onClick={handleNavigation} active={currentPage} onSearchSubmit={handleSearchSubmit}/>
        {currentPage === 'challenge' ?
        (   
            <div>
                <ListChallenge searchParams={searchParams}/>
            </div>
        ):
        (
            <div>
                <LeaderBoard/>
            </div>
        )}
        <Footer />
        <StickyCtaButton />
        </div>);
        
};

export default ListChallengePage;