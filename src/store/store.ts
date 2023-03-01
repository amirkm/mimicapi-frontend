import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '@store/rootReducer'
import Thunk from 'redux-thunk'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Thunk),
  preloadedState: {},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
