
import Hero from "../components/Hero";
import Carousel from "../components/LandingPage/Product";
import AboutUsLanding from "../components/LandingPage/AboutUs-Landing";
import ChallangeLanding from "../components/LandingPage/Challange";
import Faq from "../components/LandingPage/Faq";
import Testimoni from "../components/LandingPage/Testimoni";
import ContactUs from "../components/LandingPage/ContactUs";
import DefaultLayout from "../layout/DefaultLayout";

const LandingPage = () => {
    return (
        <DefaultLayout>
            
            <Hero   text="Jadilah Bagian dari Perubahan, Mulai Gaya Hidup Ramah Lingkungan Bersama Ecomate!" 
                    button="Yuk Bantu Selamatkan Bumi !"
                    image="assets/jpg/bg-hero.jpg"/>
            <Carousel />
            <AboutUsLanding />
            <ChallangeLanding />
            <Faq />
            <Testimoni />
            <ContactUs />
            
        </DefaultLayout>
        );
};

export default LandingPage;
