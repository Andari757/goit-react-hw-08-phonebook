import instance from "shared/authApi/authApi";
import { addToken } from "../authApi/authApi"
export const getContacts = async () => {
    const { data } = await instance.get('/contacts');
    return data;
};

export const pushContact = async (contact, token) => {
    console.log("whu", await token)
    addToken(token);
    const { data } = await instance.post('/contacts', contact);
    return data;
};
export const deleteContact = async id => {
    await instance.delete(`/contacts/${id}`);
    return id;
};