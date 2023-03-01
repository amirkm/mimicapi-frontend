import LoadingState from '@enum/LoadingState'
import IProject from '@models/project'
import { IProjectState } from '@store/reducers/projectInitialState'
import reducer, { createProject, deleteProject, getProjects, updateProject } from '@store/reducers/projectReducer'

describe('project reducer', () => {
  const initialState: IProjectState = {
    projects: [],
    loading: LoadingState.Idle,
    error: null,
  }

  it('should handle getProjects.pending', () => {
    const nextState = reducer(initialState, getProjects.pending())
    expect(nextState.loading).toEqual('pending')
  })

  it('should handle getProjects.fulfilled', () => {
    const payload = [{ id: 1, title: 'Project 1' }]
    const nextState = reducer(initialState, getProjects.fulfilled(payload))
    expect(nextState.loading).toEqual('succeeded')
    expect(nextState.projects).toEqual(payload)
  })

  it('should handle getProjects.rejected', () => {
    const error = { message: 'Failed to fetch projects.' }
    const nextState = reducer(initialState, getProjects.rejected(error))
    expect(nextState.loading).toEqual('failed')
    expect(nextState.error).toEqual(error.message)
  })

  it('should handle createProject.pending', () => {
    const nextState = reducer(initialState, createProject.pending())
    expect(nextState.loading).toEqual('pending')
  })

  it('should handle createProject.fulfilled', () => {
    const payload = { id: 2, title: 'Project 2' }
    const nextState = reducer(initialState, createProject.fulfilled(payload))
    expect(nextState.loading).toEqual('succeeded')
    expect(nextState.projects).toContain(payload)
  })

  it('should handle createProject.rejected', () => {
    const error = { message: 'Failed to create project.' }
    const nextState = reducer(initialState, createProject.rejected(error))
    expect(nextState.loading).toEqual('failed')
    expect(nextState.error).toEqual(error.message)
  })

  it('should handle updateProject.pending', () => {
    const nextState = reducer(initialState, updateProject.pending())
    expect(nextState.loading).toEqual('pending')
  })

  it('should handle updateProject.fulfilled', () => {
    const payload = { id: 1, title: 'New Title' }
    const nextState = reducer({ ...initialState, projects: [payload] }, updateProject.fulfilled(payload))
    expect(nextState.loading).toEqual('succeeded')
    expect(nextState.projects[0].title).toEqual(payload.title)
  })

  it('should handle updateProject.rejected', () => {
    const error = { message: 'Failed to update project.' }
    const nextState = reducer(initialState, updateProject.rejected(error))
    expect(nextState.loading).toEqual('failed')
    expect(nextState.error).toEqual(error.message)
  })

  it('should handle deleteProject.pending', () => {
    const nextState = reducer(initialState, deleteProject.pending())
    expect(nextState.loading).toEqual('pending')
  })

  it('should handle deleteProject.fulfilled', () => {
    const payload = '1'
    const nextState = reducer({ ...initialState, projects: [{ _id: '1', title: 'Project 1' }] }, deleteProject.fulfilled(payload))
    expect(nextState.loading).toEqual('succeeded')
    expect(nextState.projects).toEqual([])
  })

  it('should handle deleteProject.rejected', () => {
    const error = { message: 'Failed to delete project.' }
    const nextState = reducer(initialState, deleteProject.rejected(error))
    expect(nextState.loading).toEqual('failed')
    expect(nextState.error).toEqual(error.message)
  })
})

describe('project reducer', () => {
  const initialState: IProjectState = {
    projects: [],
    loading: LoadingState.Idle,
    error: null,
  }

  it('should handle getProjects.pending correctly', () => {
    const nextState = reducer(initialState, getProjects.pending())
    expect(nextState.loading).toEqual('pending')
  })

  it('should handle getProjects.fulfilled correctly', () => {
    const payload = [{ id: 1, title: 'Project 1' }]
    const nextState = reducer(initialState, getProjects.fulfilled(payload))
    expect(nextState.loading).toEqual('succeeded')
    expect(nextState.projects).toEqual(payload)
  })

  it('should handle getProjects.rejected correctly', () => {
    const error = { message: 'Failed to fetch projects.' }
    const nextState = reducer(initialState, getProjects.rejected(error))
    expect(nextState.loading).toEqual('failed')
    expect(nextState.error).toEqual(error.message)
  })

  it('should handle createProject.pending correctly', () => {
    const nextState = reducer(initialState, createProject.pending())
    expect(nextState.loading).toEqual('pending')
  })

  it('should handle createProject.fulfilled correctly', () => {
    const payload = { id: 2, title: 'Project 2' }
    const nextState = reducer(initialState, createProject.fulfilled(payload))
    expect(nextState.loading).toEqual('succeeded')
    expect(nextState.projects).toContain(payload)
  })

  it('should handle createProject.rejected correctly', () => {
    const error = { message: 'Failed to create project.' }
    const nextState = reducer(initialState, createProject.rejected(error))
    expect(nextState.loading).toEqual('failed')
    expect(nextState.error).toEqual(error.message)
  })

  it('should handle updateProject.pending correctly', () => {
    const nextState = reducer(initialState, updateProject.pending())
    expect(nextState.loading).toEqual('pending')
  })

  it('should handle updateProject.fulfilled correctly', () => {
    const payload = { id: 1, title: 'New Title' }
    const nextState = reducer({ ...initialState, projects: [payload] }, updateProject.fulfilled(payload))
    expect(nextState.loading).toEqual('succeeded')
    expect(nextState.projects[0].title).toEqual(payload.title)
  })

  it('should handle updateProject.rejected correctly', () => {
    const error = { message: 'Failed to update project.' }
    const nextState = reducer(initialState, updateProject.rejected(error))
    expect(nextState.loading).toEqual('failed')
    expect(nextState.error).toEqual(error.message)
  })

  it('should handle deleteProject.pending correctly', () => {
    const nextState = reducer(initialState, deleteProject.pending())
    expect(nextState.loading).toEqual('pending')
  })

  it('should handle deleteProject.fulfilled correctly', () => {
    const payload = '1'
    const nextState = reducer({ ...initialState, projects: [{ _id: '1', title: 'Project 1' }] }, deleteProject.fulfilled(payload))
    expect(nextState.loading).toEqual('succeeded')
    expect(nextState.projects).toEqual([])
  })

  it('should handle deleteProject.rejected correctly', () => {
    const error = { message: 'Failed to delete project.' }
    const nextState = reducer(initialState, deleteProject.rejected(error))
    expect(nextState.loading).toEqual('failed')
    expect(nextState.error).toEqual(error.message)
  })
})
