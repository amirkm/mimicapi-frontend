import CreateProjectContainer from '@components/container/CreateProjectContainer'
import ProjectListContainer from '@components/container/ProjectListContainer'
import TokenModalContainer from '@components/container/TokenModalContainer'
import UpdateProjectContainer from '@components/container/UpdateProjectContainer'
import Portal from '@components/shared/Portal'
import { PlusIcon } from '@heroicons/react/24/solid'
import Header from '@pages/layouts/Header'
import { FC } from 'react'

interface HomePageProps {
  onCreateProject: () => void
}

const HomePage: FC<HomePageProps> = (props) => {
  const AddButton = () => {
    return (
      <button
        className="absolute z-0 inline-flex items-center justify-center w-12 h-12 font-bold text-white bg-blue-500 rounded-md bottom-2 right-2 focus:shadow-outline hover:bg-blue-700"
        onClick={props.onCreateProject}
        aria-label="Open Create Project"
      >
        <PlusIcon className="w-6" />
      </button>
    )
  }

  return (
    <>
      <Header />
      <ProjectListContainer />
      <Portal>
        <div className="fixed bottom-0 right-0 z-10 w-full sm:max-w-sm sm:bottom-2 sm:right-2">
          <div className="absolute bottom-0 right-0 z-10 w-full">
            <CreateProjectContainer />
            <UpdateProjectContainer />
            <TokenModalContainer />
          </div>
          <AddButton />
        </div>
      </Portal>
    </>
  )
}

export default HomePage
