import { createAsyncThunk } from "@reduxjs/toolkit";

import * as services from "../../shared/authApi/authApi";

export const signup = createAsyncThunk(
    "auth/signup",
    async (data, { rejectWithValue }) => {
        try {
            const user = await services.signup(data);
            return user;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const login = createAsyncThunk(
    "auth/login",
    async (data, { rejectWithValue }) => {
        try {
            const user = await services.login(data);
            return user;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const getCurrentUser = createAsyncThunk(
    "auth/current",
    async (_, { rejectWithValue, getState }) => {
        const { auth } = getState();
        const { token } = auth;
        if (!token) {
            return rejectWithValue();
        }
        try {

            const user = await services.getCurrent(token);
            return user;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const logout = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue, getState }) => {
        try {
            const { auth } = getState();
            const user = await services.logout(auth.token);
            return user;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)