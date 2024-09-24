"use client";

import { configureStore } from "@reduxjs/toolkit";
import { loginApi } from "../Query/login";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [loginApi.reducerPath]: loginApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([loginApi.middleware]),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
