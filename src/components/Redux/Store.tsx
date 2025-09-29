import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import userSliceReducer from "../Redux/UserSlice"; //  apna slice ka path sahi karo
 
// 🔹 Redux Persist config
const persistConfig = {
  key: "root",
  storage,
};
 
// 🔹 Persisted reducer
const persistedReducer = persistReducer(persistConfig, userSliceReducer);
 
export const store = configureStore({
  reducer: {
    authState: persistedReducer, // 👈 yaha slice ka naam
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Redux Persist ke liye zaroori
    }),
});
 
// 🔹 Persistor
export const persistor = persistStore(store);
 
// 🔹 Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
 