import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import { baseApi } from "./api/baseApi";
import {
 persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
 key: 'auth',
 storage
}

const persistedAuthReducer = persistReducer(persistConfig, authReducer)

export const reduxStore = configureStore({
 reducer: {
  [baseApi.reducerPath]: baseApi.reducer,
  auth: persistedAuthReducer
 },
 middleware: (getDefaultMiddlewares) => getDefaultMiddlewares({
  serializableCheck: {
   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
 }).concat(baseApi.middleware)
})

export const persistor = persistStore(reduxStore)
export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch
