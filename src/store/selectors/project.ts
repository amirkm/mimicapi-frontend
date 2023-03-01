import ProjectFilterOption from '@enum/ProjectFilterOption'
import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@store/rootReducer'
import { filterProjects, sortProjects } from '@utils/project'

const selectProjects = (state: RootState) => state.project.projects
export const ProjectSelector = (state: RootState) => state.project

const selectSortedProjects = createSelector([selectProjects], (projects) => sortProjects([...projects]))

export const selectFilteredProjects = (keyword: string, projectFilterOption: ProjectFilterOption) =>
  createSelector([selectSortedProjects], (projects) => filterProjects(keyword, projects, projectFilterOption))
