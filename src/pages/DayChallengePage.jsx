import React,{useEffect} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/DayChallengePage/Hero";
import UploadMission from "../components/DayChallengePage/UploadMission";
import StickyCtaButton from "../components/StickyCtaButton";
import api from "../services/api";
const DayChallengePage = () => {

    const getActiveChallengeDetails = async () => {
        try {
            const response = await api.get("/challenges/details?challengeLogID=be28bd0c-4de3-445f-91cf-af49a39c5830");
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching challenge details:", error);
        }
    }

    useEffect(() => {
        getActiveChallengeDetails();
    }, []);
    return (
        <div className="bg-secondary">
            <Navbar active="challenge" />
            <div className="min-h-screen">
                <Hero />'
                <UploadMission />
            </div>
            <Footer />
            <StickyCtaButton />
        </div>
    );
};

export default DayChallengePage;