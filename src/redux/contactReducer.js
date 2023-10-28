import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  contacts: [],
  filter: '',
};

const contactSlice = createSlice({
  // Ім'я слайсу
  name: 'contactSlice',
  initialState: INITIAL_STATE,
  reducers: {
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },

    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

// Генератори екшенів
export const { setContacts, addContact, deleteContact, setFilter } =
  contactSlice.actions;

export const contactReducer = contactSlice.reducer;
