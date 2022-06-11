import axios from "axios";


const instance = axios.create({
    baseURL: "https://auth-backend-lesson.herokuapp.com/api"
});

export const addToken = (token) => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    console.log("baba", instance.defaults.headers.common.Authorization);
}

const removeToken = () => {
    instance.defaults.headers.common.Authorization = "";
}

export const signup = async (body) => {
    const { data } = await instance.post("/users/signup", body);
    addToken(data.token);
    return data;
}

export const login = async (body) => {
    const { data } = await instance.post("/users/login", body);
    addToken(data.token);
    return data;
}

export const getCurrent = async (token) => {
    addToken(token);
    try {
        const { data } = await instance.get("/users/current");
        return data;
    } catch (error) {
        removeToken();
        throw error;
    }
}

export const logout = async (token) => {
    console.log(token);
    addToken(token);
    //console.log(instance.defaults.headers.common.Authorization);
    const { data } = await instance.post("/users/logout");
    removeToken();
    return data;
}

export default instance;