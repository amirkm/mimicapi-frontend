import { combineReducers } from '@reduxjs/toolkit'
import appStateReducer from '@store/reducers/appStateReducer'
import projectReducer from '@store/reducers/projectReducer'

const rootReducer = combineReducers({
  project: projectReducer,
  appState: appStateReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
