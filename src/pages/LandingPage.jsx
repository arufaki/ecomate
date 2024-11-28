import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import AboutUsLanding from "../components/AboutUs-Landing";
import ChallangeLanding from "../components/Challange";
import Faq from "../components/Faq";
import Testimoni from "../components/Testimoni";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
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
            <Faq />
            <Testimoni />
            <ContactUs />
            <Footer />
        </div>
        );
};

export default LandingPage;
