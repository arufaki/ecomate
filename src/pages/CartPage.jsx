import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBanner from "../components/CartPage/HeroBanner";
import CartHeader from "../components/CartPage/CartHeader";
import CardProducts from "../components/CartPage/CardProducts";
import CartFooter from "../components/CartPage/CartFooter";
import useCart from "../hooks/useCart";

const CartPage = () => {
    const initialProducts = [
        {
            id: 1,
            name: "Sendok Kertas",
            set: "Satu set",
            price: "10000",
        },
        {
            id: 2,
            name: "Garpu Plastik",
            set: "Satu set",
            price: "8000",
        },
        {
            id: 3,
            name: "Piring Kertas",
            set: "Satu set",
            price: "15000",
        },
        {
            id: 4,
            name: "Gelas Kertas",
            set: "Satu set",
            price: "12000",
        },
        {
            id: 5,
            name: "Sedotan Bambu",
            set: "Satu set",
            price: "20000",
        },
    ];

    const cart = useCart(initialProducts);

    return (
        <div className="flex flex-col min-h-screen bg-secondary">
            <Navbar />
            <HeroBanner />

            {/* Header Cart */}
            <div className="w-full max-w-[1328px] mx-auto">
                <CartHeader />
                <CardProducts products={cart.products} {...cart} />
                <CartFooter products={cart.products} {...cart} />
            </div>
            <Footer />
        </div>
    );
};

export default CartPage;
