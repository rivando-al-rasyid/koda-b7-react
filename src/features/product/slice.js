import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        items: [],
    },
    reducers: {
        addProduct: (state, action) => {
            state.items.push(action.payload);
        },
        editProduct: (state, action) => {
            const item = state.items.find(
                (item) => item.id === action.payload.id,
            );
            if (item) {
                Object.assign(item, action.payload);
            }
        },
        removeProduct: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload,
            );
        },
    },
});

export const { addProduct, removeProduct, editProduct } = productSlice.actions;

export default productSlice.reducer;
