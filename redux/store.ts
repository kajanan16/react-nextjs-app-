import rootReducers from './root-reducer';
import {configureStore} from "@reduxjs/toolkit";
export const store = configureStore({ reducer: rootReducers});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch