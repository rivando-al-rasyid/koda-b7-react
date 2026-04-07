import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./globals.css";
import App from "./App.jsx";
import Headers from "./layout/Header.jsx";
import Counter from "./Page/Counter.jsx";
import Product from "./Page/Product.jsx";
import Pokemon from "./Page/Pokemon.jsx";
import CharList from "./Page/CharList.jsx";
import CharDetail from "./Page/ChartDetail.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Headers />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/product" element={<Product />} />
                <Route path="/pokemon" element={<Pokemon />} />
                <Route path="/ricknmorty">
                    <Route index element={<CharList />} />
                    <Route path=":id" element={<CharDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
