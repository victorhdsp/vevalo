import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import { rootReducer } from './root-reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
        'companyReducer', 
        'historyReducer'
    ]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});

export const persistor = persistStore(store);