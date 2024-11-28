import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
const LandingPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Hero   text="Jadilah Bagian dari Perubahan, Mulai Gaya Hidup Ramah Lingkungan Bersama Ecomate!" 
                    button="Yuk Bantu Selamatkan Bumi !"
                    image="src/assets/bg-hero.jpg"/>
        </div>
        );
};

export default LandingPage;
