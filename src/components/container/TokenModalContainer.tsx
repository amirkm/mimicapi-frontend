import TokenModal from '@components/TokenModal'
import { hideToken } from '@store/reducers/appStateReducer'
import { generateToken } from '@store/reducers/projectReducer'
import { appStateSelector, selectedSelectedProject } from '@store/selectors/appState'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const App: React.FC = () => {
  const dispatch = useDispatch()

  const appState = useSelector(appStateSelector)
  const selectedProject = useSelector(selectedSelectedProject)

  const handleClose = () => {
    dispatch(hideToken())
  }

  const handleGenerateToken = () => {
    dispatch(generateToken(selectedProject!._id))
  }

  if (appState.isShowingToken) return <TokenModal onClose={handleClose} token={selectedProject?.token || ''} onGenerateToken={handleGenerateToken} />

  return null
}

export default App
