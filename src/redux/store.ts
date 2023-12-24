import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './features/apiSlice'
import userReducer from './features/userSlice'
import scoreReducer from './features/scoreSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath] : apiSlice.reducer,
    user: userReducer,
    score: scoreReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

