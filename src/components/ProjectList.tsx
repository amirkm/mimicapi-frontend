import SearchBox from '@components/Searchbox'
import ProjectItemContainer from '@components/container/ProjectItemContainer'
import ProjectFilterOption from '@enum/ProjectFilterOption'
import IProject from '@models/project'
import React, { FC } from 'react'

interface ProjectsListProps {
  projects: IProject[]
  onSearchInfoChange: (keyword: string, projectFilterOption: ProjectFilterOption) => void
}

const ProjectItemContainerMemo = React.memo(ProjectItemContainer)

const ProjectsList: FC<ProjectsListProps> = (props) => {
  return (
    <>
      <div className="max-w-md mx-auto">
        <div className="mt-8">
          <SearchBox
            placeholder={'Keyword'}
            options={[
              { name: 'All', value: ProjectFilterOption.All },
              { name: 'Project Title', value: ProjectFilterOption.Title },
              { name: 'Members', value: ProjectFilterOption.Members },
            ]}
            onSearchInfoChange={props.onSearchInfoChange}
          />
        </div>
        {props.projects.length === 0 && <p className="py-8 text-center text-gray-500 ">No Project Found</p>}
        <ul className="mt-4 list-none pb-80">
          {props.projects.map(({ _id, isEnabled, token, members, title }) => (
            <li key={_id} className="my-4">
              <div className="md:container md:mx-auto">
                <ProjectItemContainerMemo
                  projectId={_id}
                  isEnabled={isEnabled}
                  hasToken={token?.length > 0}
                  hasMembers={members.length > 0}
                  title={title}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default ProjectsList
