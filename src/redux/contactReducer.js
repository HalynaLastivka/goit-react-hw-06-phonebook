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
