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

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Headers />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/product" element={<Product />} />
                <Route path="/pokemon" element={<Pokemon />} />
                <Route path="/characters">
                    <Route index element={<CharList />} />
                    <Route path=":id/:slug" element={<CharDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
