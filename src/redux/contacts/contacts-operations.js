import { createAsyncThunk } from '@reduxjs/toolkit';

import { getContacts, pushContact, deleteContact } from 'shared/contactsApi/contactsApi';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (token, { rejectWithValue }) => {
        try {
            const data = await getContacts(token);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (data, { rejectWithValue }) => {
        try {
            const contact = await pushContact(data);
            return contact;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },

);

export const removeContact = createAsyncThunk(
    'contacts/removeContact',
    async (data, { rejectWithValue }) => {
        try {
            const contact = await deleteContact(data);
            return contact;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);