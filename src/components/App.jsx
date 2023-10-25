import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';

import { Filter } from './Filter/Filter';
import { FormPhone } from './FormPhone/FormPhone';
// import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addContact, deleteContact, setFilter } from 'redux/contactReducer';

export const App = () => {
  const filter = useSelector(state => state.contacts.filter);

  const contacts = useSelector(state => state.contacts.contacts);

  const dispatch = useDispatch();

  const handleContact = (name, number) => {
    console.log('helllo1111');
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts!`);
      return;
    }

    const newOneContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newOneContact));
  };

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const onhandleChangeFilter = event => {
    const { value } = event.target;
    if (value !== undefined) {
      dispatch(setFilter(value));
    }
  };

  const filteredContacts = getFilteredContacts();
  return (
    <div>
      <h1>Phonebook</h1>
      <FormPhone handleContact={handleContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} onChange={onhandleChangeFilter} />
      <ContactList listContact={filteredContacts} handleDelete={handleDelete} />
    </div>
  );
};
