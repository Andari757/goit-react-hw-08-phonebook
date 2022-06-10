import { createSlice } from "@reduxjs/toolkit";

const init = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]
const slice = createSlice({
    name: "contacts",
    initialState: init,
    reducers: {
        addContact: {
            reducer(store, { payload }) {
                store.push(payload)
            },
            prepare(data) {
                const newContact = { ...data, };
                return {
                    payload: newContact
                }
            }
        },
        removeContact: (store, { payload }) => store.filter((e) => e.name !== payload),
    }
});

export const { actions } = slice;

export default slice.reducer;