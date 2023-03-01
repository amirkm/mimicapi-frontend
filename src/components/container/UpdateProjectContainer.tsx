import UpdateProject from '@components/UpdateProject'
import { ErrorType } from '@enum/ErrorType'
import LoadingState from '@enum/LoadingState'
import IProject from '@models/project'
import { unwrapResult } from '@reduxjs/toolkit'
import { clearSelectedProject, hideUpdateProject } from '@store/reducers/appStateReducer'
import { deleteProject, updateProject } from '@store/reducers/projectReducer'
import { appStateSelector, selectedSelectedProject } from '@store/selectors/appState'
import { ProjectSelector } from '@store/selectors/project'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

interface IUpdateProjectContainerProps {}

const UpdateProjectContainer: FC<IUpdateProjectContainerProps> = (props) => {
  const dispatch = useDispatch()
  const appState = useSelector(appStateSelector)
  const selectedProject = useSelector(selectedSelectedProject)
  const project = useSelector(ProjectSelector)

  const handleUpdate = async (_project: IProject) => {
    if (project.loading === LoadingState.Pending) {
      toast.info('Request already in progress')
      return
    }

    try {
      const result: any = await dispatch(updateProject(_project))
      unwrapResult(result)
      toast.success('Project updated')
      handleClose()
    } catch (error: any) {
      toast.error(error?.message ?? 'Update Request Failed')
    }
  }

  const handleDelete = async (projectId: string) => {
    if (project.loading === LoadingState.Pending) {
      toast.info('Request already in progress')
      return
    }

    try {
      const result: any = await dispatch(deleteProject(projectId))
      unwrapResult(result)
      toast.success('Project deleted')
      handleClose()
    } catch (error: any) {
      toast.error(error?.message ?? 'Delete Request Failed')
    }
  }

  const handleClose = () => {
    dispatch(clearSelectedProject())
    dispatch(hideUpdateProject())
  }

  const handleError = (type: ErrorType, messages: string[]) => {
    if (type === ErrorType.ValidationError) {
      toast.error(messages[0])
    } else console.error(messages)
  }

  if (appState.isShowingUpdateProject && selectedProject) {
    return <UpdateProject onError={handleError} project={selectedProject} onClose={handleClose} onUpdate={handleUpdate} onDelete={handleDelete} />
  }
  return null
}

export default UpdateProjectContainer
