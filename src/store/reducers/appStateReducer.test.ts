import IAppState from '@models/appState'
import appStateReducer, {
  clearSelectedApi,
  clearSelectedProject,
  hideCreateApi,
  hideCreateProject,
  hideMember,
  hideToken,
  hideUpdateApi,
  hideUpdateProject,
  selectApi,
  selectProject,
  showCreateApi,
  showCreateProject,
  showMember,
  showToken,
  showUpdateApi,
  showUpdateProject,
} from '@store/reducers/appStateReducer'

describe('appStateReducer', () => {
  let initialState: IAppState

  beforeEach(() => {
    initialState = {
      selectedProjectId: null,
      selectedApiId: null,
      isShowingCreateProject: false,
      isShowingUpdateProject: false,
      isShowingCreateApi: false,
      isShowingUpdateApi: false,
      isShowingToken: false,
      isShowingMember: false,
    }
  })

  it('should return the initial state', () => {
    const nextState = appStateReducer(undefined, {
      type: undefined,
    })
    expect(nextState).toEqual(initialState)
  })

  it('should select a project', () => {
    const projectId = '123'
    const nextState = appStateReducer(initialState, selectProject(projectId))
    expect(nextState.selectedProjectId).toEqual(projectId)
  })

  it('should select an api', () => {
    const apiId = '456'
    const nextState = appStateReducer(initialState, selectApi(apiId))
    expect(nextState.selectedApiId).toEqual(apiId)
  })

  it('should clear selected project', () => {
    const nextState = appStateReducer(initialState, clearSelectedProject())
    expect(nextState.selectedProjectId).toBeNull()
  })

  it('should clear selected api', () => {
    const nextState = appStateReducer(initialState, clearSelectedApi())
    expect(nextState.selectedApiId).toBeNull()
  })

  it('should show create project', () => {
    const nextState = appStateReducer(initialState, showCreateProject())
    expect(nextState.isShowingCreateProject).toBe(true)
  })

  it('should show update project', () => {
    const nextState = appStateReducer(initialState, showUpdateProject())
    expect(nextState.isShowingUpdateProject).toBe(true)
  })

  it('should hide create project', () => {
    const nextState = appStateReducer(initialState, hideCreateProject())
    expect(nextState.isShowingCreateProject).toBe(false)
  })

  it('should hide update project', () => {
    const nextState = appStateReducer(initialState, hideUpdateProject())
    expect(nextState.isShowingUpdateProject).toBe(false)
  })

  it('should show create api', () => {
    const nextState = appStateReducer(initialState, showCreateApi())
    expect(nextState.isShowingCreateApi).toBe(true)
  })

  it('should show update api', () => {
    const nextState = appStateReducer(initialState, showUpdateApi())
    expect(nextState.isShowingUpdateApi).toBe(true)
  })

  it('should hide create api', () => {
    const nextState = appStateReducer(initialState, hideCreateApi())
    expect(nextState.isShowingCreateApi).toBe(false)
  })

  it('should hide update api', () => {
    const nextState = appStateReducer(initialState, hideUpdateApi())
    expect(nextState.isShowingUpdateApi).toBe(false)
  })

  it('should show token', () => {
    const nextState = appStateReducer(initialState, showToken())
    expect(nextState.isShowingToken).toBe(true)
  })

  it('should hide token', () => {
    const nextState = appStateReducer(initialState, hideToken())
    expect(nextState.isShowingToken).toBe(false)
  })

  it('should show member', () => {
    const nextState = appStateReducer(initialState, showMember())
    expect(nextState.isShowingMember).toBe(true)
  })

  it('should hide member', () => {
    const nextState = appStateReducer(initialState, hideMember())
    expect(nextState.isShowingMember).toBe(false)
  })
})
