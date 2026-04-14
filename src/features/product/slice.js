import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./action";

const productSlice = createSlice({
    name: "product",
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {
        addProduct: (state, action) => {
            state.items.push(action.payload);
        },
        editProduct: (state, action) => {
            const index = state.items.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) state.items[index] = action.payload;
        },
        removeProduct: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            });
    },
});

export const { addProduct, editProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
