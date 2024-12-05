import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/DayChallengePage/Hero";
import UploadMission from "../components/DayChallengePage/UploadMission";
const DayChallengePage = () => {
    return (
        <div className="bg-secondary">
            <Navbar active="challenge" />
            <div className="min-h-screen">
                <Hero />'
                <UploadMission />
            </div>
            <Footer />
        </div>
    );
};

export default DayChallengePage;