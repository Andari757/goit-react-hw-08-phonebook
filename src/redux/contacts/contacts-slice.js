import { createSlice } from '@reduxjs/toolkit';

import {
    fetchContacts,
    addContact,
    removeContact,
} from './contacts-operations';

const initialState = {
    items: [],
    loading: false,
    error: null,
};


const contactsSlice = createSlice({
    name: 'contacts',
    initialState,

    extraReducers: {
        [fetchContacts.pending]: state => ({
            ...state,
            loading: true,
            error: null,
        }),
        [fetchContacts.fulfilled]: (state, { payload }) => ({
            ...state,
            items: payload,
            loading: false,
        }),
        [fetchContacts.rejected]: (state, { payload }) => ({
            ...state,
            loading: false,
            error: payload,
        }),

        [addContact.pending]: state => ({
            ...state,
            loading: true,
            error: null,
        }),
        [addContact.fulfilled]: (state, { payload }) => ({
            ...state,
            items: [...state.items, payload],
            loading: false,
        }),
        [addContact.rejected]: (state, { payload }) => ({
            ...state,
            loading: false,
            error: payload,
        }),

        [removeContact.pending]: state => ({
            ...state,
            loading: true,
            error: null,
        }),
        [removeContact.fulfilled]: (state, { payload }) => ({
            ...state,
            items: state.items.filter(item => item.id !== payload),
            loading: false,
        }),
        [removeContact.rejected]: (state, { payload }) => ({
            ...state,
            loading: false,
            error: payload,
        }),
    },
});


export { contactsSlice };
export const { actions } = contactsSlice;
export default contactsSlice.reducer;