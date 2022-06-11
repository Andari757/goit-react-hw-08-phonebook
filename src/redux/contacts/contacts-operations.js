import { createAsyncThunk } from '@reduxjs/toolkit';

import { getContacts, pushContact, deleteContact } from 'shared/contactsApi/contactsApi';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, { rejectWithValue }) => {
        try {
            const data = await getContacts();
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
    {
        condition: (data, { getState }) => {
            const isDuplicated = getState().contacts.items.find(
                item => item.name === data.name
            );
            if (isDuplicated) {
                alert(`${data.name} already exists`)
                return null;
            }
        },
    }
);

export const removeContact = createAsyncThunk(
    'contacts/removeContact',
    async (id, { rejectWithValue }) => {
        try {
            const data = await deleteContact(id);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);