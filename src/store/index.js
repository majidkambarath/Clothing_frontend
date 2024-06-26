import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import AuthDetails from "./reducer/AuthDetails";
import CartStore from "./reducer/CartStore";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  AuthData:AuthDetails,
  cart:CartStore,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;