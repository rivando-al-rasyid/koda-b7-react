import { createSlice } from '@reduxjs/toolkit'

export /**
 * Description placeholder
 *
 * @type {array}
 */
const surveiSlice = createSlice({
  name: 'survei',
  initialState: {
    items: []
  },
  reducers: {
    addSurvei: (state, action) => {
      state.items.push(action.payload);
    },
  },
})

export const { addSurvei } = surveiSlice.actions
export default surveiSlice.reducer