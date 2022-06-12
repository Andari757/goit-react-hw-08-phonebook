
import axios from "axios";
const instance = axios.create({
    baseURL: "https://connections-api.herokuapp.com"
});
const addToken = (token) => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
}
export const getContacts = async (token) => {
    addToken(token)
    const { data } = await instance.get('/contacts');
    return data;
};
export const pushContact = async ([contact, token]) => {

    addToken(token);
    const { data } = await instance.post('/contacts', contact);
    return data;
};
export const deleteContact = async ([id, token]) => {
    addToken(token);
    await instance.delete(`/contacts/${id}`);
    return id;
};