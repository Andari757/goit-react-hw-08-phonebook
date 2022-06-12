import { useDispatch } from "react-redux";
import { logout } from "redux/auth/auth-operations";
import { getUser } from "redux/auth/auth-selectors";
import { useSelector } from "react-redux";
export default function UserMenu() {
    const dispatch = useDispatch()
    const user = useSelector(getUser)
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    };

    return (
        <>
            <span>{user.email}</span>
            <button onClick={handleLogout}>
                Logout
            </button>
        </>)
}