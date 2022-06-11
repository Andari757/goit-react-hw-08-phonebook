import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { contactsSlice } from 'redux/contacts/contacts-slice';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from "components/Filter/Filter";
import { logout as logoutAction } from "redux/auth/auth-operations";
import { getContacts, getLoading, getError } from 'redux/contacts/contacts-selectors';
import {
    fetchContacts,
    removeContact as removeContactAction,
    addContact as addContactAction,
} from "redux/contacts/contacts-operations";
import { getToken } from "redux/auth/auth-selectors"
import { useEffect } from 'react';
export default function ContactsPage() {
    const [filter, setFilter] = useState("");

    const dispatch = useDispatch();

    const token = useSelector(getToken);

    useEffect(() => {
        dispatch(fetchContacts(token))
    }, [])
    const contacts = useSelector(getContacts);
    console.log(contacts)
    const addContact = (data) => {
        if (contacts.find(contact => contact.name === data.name)) {
            alert(`${data.name} already exists`)
            return;
        }
        dispatch(addContactAction([data, token]));
    }

    function getFilteredContacts() {
        if (!filter) {
            return contacts;
        }
        return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
    }

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logoutAction());
    };



    const handleFilter = (e) => {
        setFilter(e.target.value)
    };

    // const remove = (data) => {
    //     const action = actions.removeContact(data);
    //     dispatch(action);
    // }

    const data = getFilteredContacts()
    return (
        <div className="app">
            <div className="phone-book">
                <h1>Phonebook</h1>
                <ContactForm
                    onSubmit={addContact}
                />
                <h2>Contacts</h2>
                <Filter
                    onChange={handleFilter}
                    value={filter} />
                <ContactList
                    contacts={data}
                    onClick={() => alert('remove')}
                />
            </div>
            <br />
            <a href="#" onClick={handleLogout}>
                Logout
            </a>
            <br />
            <br />
        </div >
    );

}