import { createAsyncThunk } from "@reduxjs/toolkit";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchProducts = createAsyncThunk(
    "product/fetchProducts",
    async (_, { rejectWithValue }) => {
        try {
            await delay(200);
            const response = await fetch("https://fakestoreapi.com/products");
            if (!response.ok) throw new Error("Failed to fetch products");
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message || "Failed to fetch products");
        }
    },
);
