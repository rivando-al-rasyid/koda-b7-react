import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./globals.css";
import App from "./App.jsx";
import Nav from "./layout/Nav.jsx";
import Footer from "./layout/Footer.jsx";
import Counter from "./Page/Counter.jsx";
import Product from "./Page/Product.jsx";
import Pokemon from "./Page/Pokemon.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/product" element={<Product />} />
                <Route path="/pokemon" element={<Pokemon />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </StrictMode>,
);
