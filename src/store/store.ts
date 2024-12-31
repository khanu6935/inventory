import { configureStore } from "@reduxjs/toolkit";
import HomePageReducer from "./home/HomeSlice";
import AuthPageReducer from "./Auth/AuthSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { persistStore } from "redux-persist";

const HomePageConfig = {
  key: "Home",
  storage,
};
const AuthPageConfig = {
  key: "Auth",
  storage,
};

const persistHomePage = persistReducer(HomePageConfig, HomePageReducer);
const persistAuthPage = persistReducer(AuthPageConfig, AuthPageReducer);

const store = configureStore({
  reducer: {
    HomePage: persistHomePage,
    AuthPage: persistAuthPage,
  },
});

export const persistor = persistStore(store);
export default store;
