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
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/tantangan" element={<ListChallengePage />} />
                <Route path="/belanja" element={<CatalogProductPage />} />
                <Route path="/detail-produk" element={<DetailProductPage />} />
                <Route path="/detail-tantangan" element={<DetailChallengePage />} />
                <Route
                    path="/login"
                    element={
                        <GuestRoute>
                            <LoginPage />
                        </GuestRoute>
                    }
                />
                <Route
                    path="/register"
                    element={
                        <GuestRoute>
                            <RegisterPage />
                        </GuestRoute>
                    }
                />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </Router>
    );
};

export default App;
