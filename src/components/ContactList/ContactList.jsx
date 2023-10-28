import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactReducer';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

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

  const contFilter = getFilteredContacts();

  return (
    <ul>
      {contFilter.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button
            onClick={() => handleDelete(contact.id)}
            type="button"
            className={css.btndelete}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
