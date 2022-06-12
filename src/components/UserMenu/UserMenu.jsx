import { shallowEqual, useDispatch } from "react-redux";
import { logout } from "redux/auth/auth-operations";
import { getUser } from "redux/auth/auth-selectors";
import { useSelector } from "react-redux";
import s from "./style.module.css"
export default function UserMenu() {
    const dispatch = useDispatch()
    const user = useSelector(getUser, shallowEqual)
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    };

    return (
        <div className={s.menu}>
            <span>{user?.email}</span>
            <button className={s.button} onClick={handleLogout}>
                Logout
            </button>
        </div>)
}