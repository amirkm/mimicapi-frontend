import LoadingState from '@enum/LoadingState'
import IProject from '@models/project'

export interface IProjectState {
  projects: IProject[]
  loading: LoadingState
  error: string | null
}

export const getProjectInitialState = (): IProjectState => {
  return {
    projects: [],
    loading: LoadingState.Idle,
    error: null,
  }
}

export default getProjectInitialState
