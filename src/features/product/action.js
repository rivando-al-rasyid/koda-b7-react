import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    "product/fetchProducts",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch("https://dummyjson.com/products");
            if (!response.ok) throw new Error("Failed to fetch products");
            const data = await response.json();
            return data.products;
        } catch (error) {
            return rejectWithValue(error.message || "Failed to fetch products");
        }
    },
);
