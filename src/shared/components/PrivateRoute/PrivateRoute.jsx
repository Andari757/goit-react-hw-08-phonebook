
import { Navigate, Outlet } from "react-router-dom";
import useLogin from "shared/hooks/useLogin";
const PrivateRoute = () => {
    const isLoggedIn = useLogin();
    if (!isLoggedIn) {
        return <Navigate to="/login" />
    }

    return <Outlet />;
}

export default PrivateRoute;