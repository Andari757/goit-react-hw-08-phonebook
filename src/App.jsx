import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { actions } from 'redux/contacts/contacts-slice';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from "components/Filter/Filter"
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
export function App() {
  let navigate = useNavigate();
  useEffect(() => {
    navigate("/contacts")
  }, [])

  return (
    <Routes>
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
    </Routes>
  )

}
