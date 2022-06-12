import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";


import { isUserLoggedIn } from 'redux/auth/auth-selectors';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import LoginPage from 'pages/LoginPage/LoginPage';


export function App() {
  const location = useLocation();
  const isLoggedIn = useSelector(isUserLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn && !(location.pathname.startsWith('/login') || location.pathname.startsWith('/register'))) {
      navigate("/login");
    }
    if (isLoggedIn && (location.pathname.startsWith('/login') || location.pathname.startsWith('/register'))) {
      navigate("/contacts");
    }
  }, [isLoggedIn]);

  return (

    <Routes>
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )

}
