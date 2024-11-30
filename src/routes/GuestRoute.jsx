import { Navigate } from "react-router";
import useAuthStore from "../stores/useAuthStore";

const GuestRoute = ({ children }) => {
    const { token } = useAuthStore();

    if (token) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default GuestRoute;
