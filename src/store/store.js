import { configureStore } from '@reduxjs/toolkit'
import surveiReducer from "../features/survei/slice"

export default configureStore({
  reducer: {
    survei: surveiReducer,
  },
})