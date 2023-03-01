interface IAppState {
  selectedProjectId?: string | null
  selectedApiId?: string | null
  isShowingCreateProject: boolean
  isShowingUpdateProject: boolean
  isShowingCreateApi: boolean
  isShowingUpdateApi: boolean
  isShowingToken: boolean
  isShowingMember: boolean
}

export default IAppState
