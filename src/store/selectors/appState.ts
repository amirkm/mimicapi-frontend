import { RootState } from '@store/rootReducer'

export const appStateSelector = (state: RootState) => state.appState

export const selectedSelectedProject = ({ project, appState }: RootState) => {
  const { selectedProjectId } = appState
  return project.projects.find((project) => project._id === selectedProjectId)
}
