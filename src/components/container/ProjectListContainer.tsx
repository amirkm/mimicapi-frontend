import ProjectsList from '@components/ProjectList'
import ProjectFilterOption from '@enum/ProjectFilterOption'
import { selectFilteredProjects } from '@store/selectors/project'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export const ProjectListContainer = () => {
  const [searchInfo, setSearchInfo] = useState<{ keyword: string; projectFilterOption: ProjectFilterOption }>({
    keyword: '',
    projectFilterOption: ProjectFilterOption.All,
  })

  const projects = useSelector(selectFilteredProjects(searchInfo.keyword, searchInfo.projectFilterOption))

  const handleOnSearchInfoChange = (keyword: string, projectFilterOption: ProjectFilterOption) => {
    setSearchInfo({ keyword, projectFilterOption })
  }

  return <ProjectsList projects={projects} onSearchInfoChange={handleOnSearchInfoChange} />
}

export default ProjectListContainer
