
import instance from "shared/authApi/authApi";
import { addToken } from "shared/authApi/authApi"
export const getContacts = async (token) => {
    addToken(token)
    const { data } = await instance.get('/contacts');
    return data;
};
export const pushContact = async (contact) => {

    const { data } = await instance.post('/contacts', contact);
    return data;
};
export const deleteContact = async (id) => {
    await instance.delete(`/contacts/${id}`);
    return id;
};