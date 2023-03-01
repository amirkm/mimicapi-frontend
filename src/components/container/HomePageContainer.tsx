import HomePage from '@pages/HomePage'
import { showCreateProject } from '@store/reducers/appStateReducer'
import { getProjects } from '@store/reducers/projectReducer'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const HomePageContainer = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProjects())
  }, [dispatch])

  return <HomePage onCreateProject={() => dispatch(showCreateProject())} />
}

export default HomePageContainer
