import IAppState from '@models/appState'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: IAppState = {
  selectedProjectId: null,
  selectedApiId: null,
  isShowingCreateProject: false,
  isShowingUpdateProject: false,
  isShowingCreateApi: false,
  isShowingUpdateApi: false,
  isShowingToken: false,
  isShowingMember: false,
}

const appStateSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    selectProject: (state, action: PayloadAction<string>) => {
      state.selectedProjectId = action.payload
    },
    selectApi: (state, action) => {
      state.selectedApiId = action.payload
    },
    clearSelectedProject: (state) => {
      state.selectedProjectId = null
    },
    clearSelectedApi: (state) => {
      state.selectedApiId = null
    },
    showCreateProject: (state) => {
      state.isShowingCreateProject = true
      state.isShowingUpdateProject = false
    },
    showUpdateProject: (state) => {
      state.isShowingUpdateProject = true
      state.isShowingCreateProject = false
    },
    hideCreateProject: (state) => {
      state.isShowingCreateProject = false
    },
    hideUpdateProject: (state) => {
      state.isShowingUpdateProject = false
    },
    showCreateApi: (state) => {
      state.isShowingCreateApi = true
      state.isShowingUpdateApi = false
    },
    showUpdateApi: (state) => {
      state.isShowingUpdateApi = true
      state.isShowingCreateApi = false
    },
    hideCreateApi: (state) => {
      state.isShowingCreateApi = false
    },
    hideUpdateApi: (state) => {
      state.isShowingUpdateApi = false
    },
    showToken: (state) => {
      state.isShowingToken = true
    },
    hideToken: (state) => {
      state.isShowingToken = false
    },
    showMember: (state) => {
      state.isShowingMember = true
    },
    hideMember: (state) => {
      state.isShowingMember = false
    },
  },
})

export const {
  selectApi,
  selectProject,

  showCreateProject,
  showUpdateProject,
  showCreateApi,
  showUpdateApi,
  showMember,
  showToken,

  hideCreateProject,
  hideUpdateProject,
  hideCreateApi,
  hideUpdateApi,
  hideMember,
  hideToken,

  clearSelectedApi,
  clearSelectedProject,
} = appStateSlice.actions

export default appStateSlice.reducer
