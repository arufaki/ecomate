import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import AboutUsLanding from "../components/AboutUs-Landing";
const LandingPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Hero />
            <Carousel />
            <AboutUsLanding />
        </div>
        );
};

export default LandingPage;
