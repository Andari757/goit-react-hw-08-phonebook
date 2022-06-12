import { useSelector, shallowEqual } from "react-redux";

import { isUserLoggedIn } from 'redux/auth/auth-selectors';

const useLogin = () => {
    const isLogin = useSelector(isUserLoggedIn, shallowEqual);
    return isLogin;
}

export default useLogin;