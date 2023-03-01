import LoadingState from '@enum/LoadingState'
import CreateProjectDTO from '@models/dto/CreateProjectDTO'
import UpdateProjectDTO from '@models/dto/updateProjectDTO'
import IProject from '@models/project'
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { projectsService } from '@services/project'
import getProjectInitialState from '@store/reducers/projectInitialState'

export const getProjects = createAsyncThunk('projects/getProjects', async () => {
  const projects = await projectsService.getProjects()
  return projects
})

export const createProject = createAsyncThunk('projects/createProject', async (createProjectDTO: CreateProjectDTO) => {
  const createdProject = await projectsService.createProject(createProjectDTO)
  return createdProject
})

export const updateProject = createAsyncThunk('projects/updateProject', async (updateProjectDTO: UpdateProjectDTO) => {
  const updatedProject = await projectsService.updateProject(updateProjectDTO)
  return updatedProject
})

export const deleteProject = createAsyncThunk('projects/deleteProject', async (_id: string) => {
  await projectsService.deleteProject(_id)
  return _id
})

export const generateToken = createAsyncThunk('projects/1/generatetoken', async (_id: string) => {
  const generatedToken = await projectsService.generateToken(_id)
  return { _id, generatedToken }
})

const projectSlice = createSlice({
  name: 'projects',
  initialState: getProjectInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getProjects.pending, (state) => {
        state.loading = LoadingState.Pending
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.loading = LoadingState.Succeeded
        state.projects = [...action.payload]
      })
      .addCase(getProjects.rejected, (state, action) => {
        state.loading = LoadingState.Failed
        state.error = action.error.message ?? 'Failed to fetch projects'
      })

      .addCase(createProject.pending, (state) => {
        state.loading = LoadingState.Pending
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.loading = LoadingState.Succeeded
        state.projects.push(action.payload)
      })
      .addCase(createProject.rejected, (state, action) => {
        state.loading = LoadingState.Failed
        state.error = action?.error?.message ?? 'Failed to create project'
      })

      .addCase(updateProject.pending, (state) => {
        state.loading = LoadingState.Pending
      })
      .addCase(updateProject.fulfilled, (state, action: PayloadAction<IProject>) => {
        state.loading = LoadingState.Succeeded
        state.projects = state.projects.map((item) => {
          return item._id === action.payload._id ? { ...item, ...action.payload } : item
        })
      })
      .addCase(updateProject.rejected, (state, action) => {
        state.loading = LoadingState.Failed
        state.error = action.error.message ?? 'Failed to update project'
      })

      .addCase(deleteProject.pending, (state) => {
        state.loading = LoadingState.Pending
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.loading = LoadingState.Succeeded
        state.projects = state.projects.filter((item) => item._id !== action.payload)
      })
      .addCase(deleteProject.rejected, (state, action) => {
        state.loading = LoadingState.Failed
        state.error = action.error.message ?? 'Failed to delete project'
      })

      .addCase(generateToken.pending, (state) => {
        state.loading = LoadingState.Pending
      })
      .addCase(generateToken.fulfilled, (state, action) => {
        state.loading = LoadingState.Succeeded
        const project = state.projects.find((p) => p._id === action.payload._id)
        if (project) {
          project.token = action.payload.generatedToken
        }
      })
      .addCase(generateToken.rejected, (state, action) => {
        state.loading = LoadingState.Failed
        state.error = action.error.message ?? 'Failed to generate token'
      })
  },
})

export default projectSlice.reducer
