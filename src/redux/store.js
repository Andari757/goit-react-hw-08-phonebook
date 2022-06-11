import { configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import contactsReducer from './contacts/contacts-slice';
import authReducer from './auth/auth-slice';

const authPersistConfig = {
    key: 'auth',
    storage,
    whiteList: ['token'],
};

const persistedReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        auth: persistedReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);