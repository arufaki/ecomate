import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import AboutUsLanding from "../components/AboutUs-Landing";
import ChallangeLanding from "../components/Challange";
const LandingPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Hero   text="Jadilah Bagian dari Perubahan, Mulai Gaya Hidup Ramah Lingkungan Bersama Ecomate!" 
                    button="Yuk Bantu Selamatkan Bumi !"
                    image="src/assets/bg-hero.jpg"/>
            <Carousel />
            <AboutUsLanding />
            <ChallangeLanding />
        </div>
        );
};

export default LandingPage;
