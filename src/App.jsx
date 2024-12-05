import { BrowserRouter as Router, Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import ListChallengePage from "./pages/ListChallengePage";
import CatalogProductPage from "./pages/CatalogProductPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import GuestRoute from "./routes/GuestRoute";
import LoginPage from "./pages/LoginPage";
import DetailProductPage from "./pages/DetailProductPage";
import CartPage from "./pages/CartPage";
import DetailChallengePage from "./pages/DetailChallengePage";
import Chatbot from "./pages/Chatbot";
import AdminLoginPage from "./pages/AdminPages/AdminLoginPage";
import AddProductPage from "./pages/AdminPages/AddProductPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import PaymentPage from "./pages/PaymentPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/tantangan" element={<ListChallengePage />} />
                <Route path="/belanja" element={<CatalogProductPage />} />
                <Route path="/detail-produk/:id" element={<DetailProductPage />} />
                <Route path="/detail-tantangan" element={<DetailChallengePage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />

                {/* Guest routes (untuk login dan register, hanya bisa diakses oleh user yang belum login) */}
                <Route element={<GuestRoute />}>
                    {/* End User Route */}
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />

                    {/* Admin Route protected */}
                    <Route path="/login-admin" element={<AdminLoginPage />} />
                </Route>

                {/* Route yang diproteksi dan harus login dlu  */}
                <Route element={<ProtectedRoute />}>
                    {/* End User Route */}
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/chat" element={<Chatbot />} />
                    <Route path="/payment/:id" element={<PaymentPage />} />

                    {/* Admin Route */}
                    {/* email admin: admin2@ecomate.store pass : admin2 */}
                    <Route path="/add-product" element={<AddProductPage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
