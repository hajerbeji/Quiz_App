import { configureStore } from '@reduxjs/toolkit'
import FavoriSlice from './slices/FavoriSlice'

export const store = configureStore({
  reducer: {
    favorislice:FavoriSlice
  },
})