import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { actions } from 'redux/slice';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from "components/Filter/Filter"
export function App() {
  const [filter, setFilter] = useState("");
  const items = useSelector(getContacts)
  const dispatch = useDispatch()


  const addContact = (data) => {
    if (items.find(contact => contact.name === data.name)) {
      alert(`${data.name} already exists`)
      return;
    }
    const action = actions.addContact(data);
    dispatch(action);
  }

  function getFilteredContacts() {
    if (!filter) {
      return items;
    }
    return items.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
  }

  const filterContacts = (e) => {
    setFilter(e.target.value)
  }

  const remove = (data) => {
    const action = actions.removeContact(data);
    dispatch(action);
  }

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
          onChange={filterContacts}
          value={filter} />
        <ContactList
          contacts={data}
          onClick={remove}
        />
      </div>
    </div >
  )

}
