import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


import { isUserLoggedIn } from 'redux/auth/auth-selectors';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import LoginPage from 'pages/LoginPage/LoginPage';


export function App() {
  // const location = useLocation();
  const isLoggedIn = useSelector(isUserLoggedIn);
  // const navigate = useNavigate();

  // useEffect(() => {


  //   if (!isLoggedIn && !(location.pathname.startsWith('/login') || location.pathname.startsWith('/register'))) {
  //     navigate("/login");
  //   }
  //   if (isLoggedIn && (location.pathname.startsWith('/login') || location.pathname.startsWith('/register'))) {
  //     navigate("/contacts");
  //   }
  // }, [isLoggedIn, location.pathname, navigate]);

  const defaultRoute = (
    isLoggedIn ? 'contacts' : 'login'
  );

  return (

    <Routes>
      {isLoggedIn && <Route path="/contacts" element={<ContactsPage />} />}
      {!isLoggedIn && <Route path="/register" element={<RegisterPage />} />}
      {!isLoggedIn && <Route path="/login" element={<LoginPage />} />}
      <Route path="*" element={<Navigate to={defaultRoute} />} />
    </Routes>
  )

}
