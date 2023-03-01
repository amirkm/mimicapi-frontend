import ProjectFilterOption from '@enum/ProjectFilterOption'
import IProject from '@models/project'
import { filterProjects, sortProjects } from 'utils/project'

describe('project sort', () => {
  it('should return projects sorted in ascending order', () => {
    //Arrange
    const dummyProject: IProject = {
      _id: '1',
      title: '',
      isEnabled: false,
      path: '',
      token: '',
      members: [],
    }
    const projects: IProject[] = [
      { ...dummyProject, title: 'project 1' },
      { ...dummyProject, title: 'project 4', isEnabled: true },
      { ...dummyProject, title: 'project 3' },
      { ...dummyProject, title: 'project 2', isEnabled: true },
    ]
    const expectedProjects: IProject[] = [
      { ...dummyProject, title: 'project 2', isEnabled: true },
      { ...dummyProject, title: 'project 4', isEnabled: true },
      { ...dummyProject, title: 'project 1' },
      { ...dummyProject, title: 'project 3' },
    ]

    //Act
    const sortedProjects = sortProjects(projects)

    //Assert
    expect(sortedProjects).toEqual(expectedProjects)
  })

  it('should be arranged in increasing order, hen a project title includes a number', () => {
    // Arrange
    const dummyProject: IProject = {
      _id: '1',
      title: '',
      isEnabled: false,
      path: '',
      token: '',
      members: [],
    }
    const projects: IProject[] = [
      { ...dummyProject, title: 'project 1' },
      { ...dummyProject, title: 'project 10' },
      { ...dummyProject, title: 'project 2' },
    ]
    const expectedProjects: IProject[] = [
      { ...dummyProject, title: 'project 1' },
      { ...dummyProject, title: 'project 2' },
      { ...dummyProject, title: 'project 10' },
    ]

    // Act
    const sortedProjects = sortProjects(projects)

    // Assert
    expect(sortedProjects).toEqual(expectedProjects)
  })

  it('should return empty array', () => {
    expect(sortProjects([])).toEqual([])
  })
})

describe('filter Projects', () => {
  it('should return an array of projects filtered by keyword and filter type', () => {
    const projects = [
      { title: 'Test Project 1', members: [{ name: 'John Smith' }, { name: 'Jane Doe' }] },
      { title: 'Test Project 2', members: [{ name: 'John Doe' }, { name: 'Jane Smith' }] },
    ]

    const keyword = 'John'

    expect(filterProjects(keyword, projects as IProject[], ProjectFilterOption.All)).toEqual([projects[0], projects[1]])
    expect(filterProjects(keyword, projects as IProject[], ProjectFilterOption.Members)).toEqual([projects[0], projects[1]])
    expect(filterProjects('project 1', projects as IProject[], ProjectFilterOption.Title)).toEqual([projects[0]])
  })

  it('should return an empty array if no matches are found', () => {
    const projects = [
      { title: 'Test Project 1', members: [{ name: 'John Smith' }, { name: 'Jane Doe' }] },
      { title: 'Test Project 2', members: [{ name: 'John Doe' }, { name: 'Jane Smith' }] },
    ]

    const keyword = 'Bob'

    expect(filterProjects(keyword, projects as IProject[], ProjectFilterOption.All)).toEqual([])
    expect(filterProjects(keyword, projects as IProject[], ProjectFilterOption.Members)).toEqual([])
    expect(filterProjects(keyword, projects as IProject[], ProjectFilterOption.Title)).toEqual([])
  })
})
