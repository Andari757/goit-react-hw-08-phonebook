import { createSlice } from "@reduxjs/toolkit";

import { signup, login, getCurrentUser, logout } from "./auth-operations";

const initialState = {
    user: {},
    token: "",
    isLogin: false,
    loading: false,
    error: null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [signup.pending]: (store, _) => ({ ...store, loading: true, error: null }),
        [signup.fulfilled]: (store, { payload }) => ({ ...store, loading: false, isLogin: true, ...payload }),
        [signup.rejected]: (store, { payload }) => ({ ...store, loading: false, error: payload }),
        [login.pending]: (store, _) => {
            store.loading = true;
            store.error = null;
        },
        [login.fulfilled]: (store, { payload }) => {
            store.loading = false;
            store.isLogin = true;
            store.token = payload.token;
            store.user = payload.user;
        },
        [login.rejected]: (store, { payload }) => {

            store.loading = false;
            store.error = payload;
        },
        [getCurrentUser.pending]: (store, _) => {
            store.loading = true;
            store.error = null;
        },
        [getCurrentUser.fulfilled]: (store, { payload }) => {
            store.loading = false;
            store.isLogin = true;
            store.user = payload;
        },
        [getCurrentUser.rejected]: (store, { payload }) => {
            store.loading = false;
            store.error = payload;
            store.token = "";
        },
        [logout.pending]: (store, _) => {
            store.loading = true;
            store.error = null;
        },
        [logout.fulfilled]: (store) => {
            store.loading = false;
            store.isLogin = false;
            store.token = "";
            store.user = {};
        },
        [logout.rejected]: (store, { payload }) => {
            store.loading = false;
            store.error = payload;
        },
    }
});

export default authSlice.reducer;