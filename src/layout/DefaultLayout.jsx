import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const DefaultLayout = ({ children }) => (
        <div className="flex flex-col  bg-[#F9F9EB]">
            <div></div>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </div>
    );
    
export default DefaultLayout;