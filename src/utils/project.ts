import ProjectFilterOption from '@enum/ProjectFilterOption'
import IProject from '@models/project'
import IUser from '@models/user'

export const sortProjects = (projects: IProject[]) => {
  const sortedProjects = projects.sort((a, b) => {
    if (a.isEnabled && !b.isEnabled) return -1
    else if (!a.isEnabled && b.isEnabled) return 1

    return a.title.toLowerCase().localeCompare(b.title.toLowerCase(), undefined, { numeric: true })
  })
  return sortedProjects
}

export const filterProjects = (keyword: string = '', projects: IProject[], projectFilterOption: ProjectFilterOption) => {
  const isIncludeTitle = (keyword: string, title: string) => title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
  const isIncludeMember = (keyword: string, members: IUser[]) =>
    members.some((member) => member.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()))

  return projects.filter((project) => {
    switch (projectFilterOption) {
      case ProjectFilterOption.All:
        return isIncludeTitle(keyword, project.title) || isIncludeMember(keyword, project.members)
      case ProjectFilterOption.Title:
        return project.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
      case ProjectFilterOption.Members:
        return project.members.some((member) => member.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()))
    }
  })
}
