
import { Routes, Route, Navigate } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


import ContactsPage from 'pages/ContactsPage/ContactsPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import PublicRoute from 'shared/components/PublicRoute/PublicRoute';
import PrivateRoute from 'shared/components/PrivateRoute/PrivateRoute';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCurrentUser } from "redux/auth/auth-operations";
import RegisterPage from "pages/RegisterPage/RegisterPage";
export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  // const location = useLocation();

  // const navigate = useNavigate();

  // useEffect(() => {


  //   if (!isLoggedIn && !(location.pathname.startsWith('/login') || location.pathname.startsWith('/register'))) {
  //     navigate("/login");
  //   }
  //   if (isLoggedIn && (location.pathname.startsWith('/login') || location.pathname.startsWith('/register'))) {
  //     navigate("/contacts");
  //   }
  // }, [isLoggedIn, location.pathname, navigate]);



  return (

    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>








    // <Routes>
    //   {isLoggedIn && <Route path="/contacts" element={<ContactsPage />} />}
    //   {!isLoggedIn && <Route path="/register" element={<RegisterPage />} />}
    //   {!isLoggedIn && <Route path="/login" element={<LoginPage />} />}
    //   <Route path="*" element={<Navigate to={defaultRoute} />} />
    // </Routes>
  )

}
