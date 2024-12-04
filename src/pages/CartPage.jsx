import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBanner from "../components/CartPage/HeroBanner";
import CartHeader from "../components/CartPage/CartHeader";
import CardProducts from "../components/CartPage/CardProducts";
import CartFooter from "../components/CartPage/CartFooter";
import useCart from "../hooks/useCart";
import { useEffect, useState } from "react";
import api from "../services/api";
import useAuthStore from "../stores/useAuthStore";

const CartPage = () => {
    const [initialProducts, setInitialProducts] = useState([]);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await api.get("/cart");
                setInitialProducts(response.data.data.items);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCart();
    }, []);

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
