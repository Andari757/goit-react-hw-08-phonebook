import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { actions } from 'redux/slice';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from "components/Filter/Filter"
import ContactsPage from 'pages/ContactsPage/ContactsPage';
export function App() {

  return (
    <ContactsPage />
  )

}
