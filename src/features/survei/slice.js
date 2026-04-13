import { createSlice } from "@reduxjs/toolkit";

export /**
 * Description placeholder
 *
 * @type {array}
 */
const surveiSlice = createSlice({
    name: "survei",
    initialState: {
        items: [],
    },
    reducers: {
        addSurvei: (state, action) => {
            state.items.push(action.payload);
        },
        removeSurvei: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload,
            );
        },
    },
});

export const { addSurvei, removeSurvei } = surveiSlice.actions;
export default surveiSlice.reducer;
