import ProjectItem from '@components/ProjectItem'
import { hideUpdateProject, selectProject, showMember, showToken, showUpdateProject } from '@store/reducers/appStateReducer'
import { FC } from 'react'
import { useDispatch } from 'react-redux'

interface ProjectItemContainerProps {
  projectId: string
  title: string

  hasToken: boolean
  hasMembers: boolean
  isEnabled: boolean
}

const ProjectItemContainer: FC<ProjectItemContainerProps> = (props) => {
  const dispatch = useDispatch()
  const handleTokenClick = async (projectId: string) => {
    await dispatch(selectProject(projectId))
    dispatch(showToken())
  }

  const handleMembersClick = async (projectId: string) => {
    await dispatch(selectProject(projectId))
    dispatch(showMember())
  }

  const handleEditClick = async (projectId: string) => {
    await dispatch(selectProject(projectId))
    await dispatch(hideUpdateProject())
    await dispatch(showUpdateProject())
  }

  return <ProjectItem onTokenClick={handleTokenClick} onMembersClick={handleMembersClick} onEditClick={handleEditClick} {...props} />
}

export default ProjectItemContainer
