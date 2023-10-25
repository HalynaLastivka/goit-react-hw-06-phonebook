import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  contacts: [
    { name: 'Rosie Simpson111', number: '459-12-56', id: 'id-1' },
    { name: 'Hermione Kline', number: '443-89-12', id: 'id-2' },
    { name: 'Eden Clements', number: '645-17-79', id: 'id-3' },
    { name: 'Annie Copelan', number: '227-91-26', id: 'id-4' },
  ],
  filter: '',
};

const contactSlice = createSlice({
  // Ім'я слайсу
  name: 'contactSlice',
  initialState: INITIAL_STATE,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setContacts(state, action) {
      state.contacts = action.payload;
    },

    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

// Генератори екшенів
export const { setFilter, setContacts, addContact, deleteContact } =
  contactSlice.actions;
// Редюсер слайсу
export const contactReducer = contactSlice.reducer;
