import HomePageContainer from '@components/container/HomePageContainer'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePageContainer />,
  },
])

export default router
