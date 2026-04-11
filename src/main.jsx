import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./globals.css";
import App from "./App.jsx";
import Headers from "./layout/Header.jsx";
import Counter from "./page/Counter.jsx";
import Product from "./page/Product.jsx";
import Pokemon from "./page/Pokemon.jsx";
import CharList from "./page/CharList.jsx";
import CharDetail from "./Page/CharDetail.jsx";
import UserProvider from "./context/user/Provider.jsx";
import Login from "./page/Login.jsx";
import Profile from "./page/Profile.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <UserProvider>
            {" "}
            {/* Wrap the whole app if Header needs user data everywhere */}
            <BrowserRouter>
                <Headers />{" "}
                {/* Headers stays outside Routes if it appears on every page */}
                <Routes>
                    {/* User Routes */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<Profile />} />

                    {/* Public Routes */}
                    <Route path="/" element={<App />} />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/pokemon" element={<Pokemon />} />

                    {/* Nested Character Routes */}
                    <Route path="/characters">
                        <Route index element={<CharList />} />
                        <Route path=":id/:slug" element={<CharDetail />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </UserProvider>
    </StrictMode>,
);
