import CreateProject from '@components/CreateProject'
import { ErrorType } from '@enum/ErrorType'
import LoadingState from '@enum/LoadingState'
import CreateProjectDTO from '@models/dto/CreateProjectDTO'
import { unwrapResult } from '@reduxjs/toolkit'
import { clearSelectedProject, hideCreateProject } from '@store/reducers/appStateReducer'
import { createProject } from '@store/reducers/projectReducer'
import { appStateSelector } from '@store/selectors/appState'
import { ProjectSelector } from '@store/selectors/project'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const CreateProjectContainer: FC = () => {
  const dispatch = useDispatch()
  const appState = useSelector(appStateSelector)
  const project = useSelector(ProjectSelector)

  const handleCreate = async (_createProjectDTO: CreateProjectDTO) => {
    if (project.loading === LoadingState.Pending) {
      toast.info('Request already in progress')
      return
    }

    try {
      const result: any = await dispatch(createProject(_createProjectDTO))
      unwrapResult(result)
      toast.success('Project Created')
      handleClose()
    } catch (error: any) {
      toast.error(error?.message ?? 'Created Request Failed')
    }
  }

  const handleClose = () => {
    dispatch(clearSelectedProject())
    dispatch(hideCreateProject())
  }

  const handleError = (type: ErrorType, messages: string[]) => {
    if (type === ErrorType.ValidationError) {
      toast.error(messages[0])
    } else console.error(messages)
  }

  if (appState.isShowingCreateProject) {
    return <CreateProject onError={handleError} isLoading={project.loading === LoadingState.Pending} onClose={handleClose} onCreate={handleCreate} />
  }
  return null
}

export default CreateProjectContainer
