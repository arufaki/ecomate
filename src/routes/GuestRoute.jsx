import { Navigate, Outlet } from "react-router";
import useAuthStore from "../stores/useAuthStore";

const GuestRoute = () => {
    const { token } = useAuthStore();

    if (token) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default GuestRoute;
