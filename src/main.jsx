import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./globals.css";
import { store, persistor } from "./store/store.js";
import App from "./App.jsx";
import Headers from "./layout/Header.jsx";
import Counter from "./page/Counter.jsx";
import Product from "./page/Product.jsx";
import Pokemon from "./page/Pokemon.jsx";
import CharList from "./page/CharList.jsx";
import CharDetail from "./page/CharDetail.jsx";
import UserProvider from "./context/user/Provider.jsx";
import Login from "./page/Login.jsx";
import Profile from "./page/Profile.jsx";
import Survei from "./page/SurveiPerokok.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            {/* PersistGate menahan render sampai state dari localStorage selesai di-load */}
            <PersistGate loading={null} persistor={persistor}>
                <UserProvider>
                    <BrowserRouter>
                        <Headers />
                        <Routes>
                            {/* User Routes */}
                            <Route path="/login" element={<Login />} />
                            <Route path="/profile" element={<Profile />} />

                            {/* Public Routes */}
                            <Route path="/" element={<App />} />
                            <Route path="/counter" element={<Counter />} />
                            <Route path="/product" element={<Product />} />
                            <Route path="/pokemon" element={<Pokemon />} />
                            <Route path="/survei" element={<Survei />} />

                            {/* Nested Character Routes */}
                            <Route path="/characters">
                                <Route index element={<CharList />} />
                                <Route path=":id/:slug" element={<CharDetail />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </UserProvider>
            </PersistGate>
        </Provider>
    </StrictMode>,
);
