import { BrowserRouter as Router, Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";

const App = () => {
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage />} />
        </Routes>
    </Router>;
};

export default App;