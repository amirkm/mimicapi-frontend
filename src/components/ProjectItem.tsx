import { KeyIcon, PencilIcon, UsersIcon } from '@heroicons/react/24/solid'
import classNames from 'classnames'
import { FC } from 'react'

export interface ProjectItemProps {
  projectId: string
  title: string

  hasMembers?: boolean
  hasToken?: boolean
  isEnabled?: boolean

  onTokenClick: (projectId: string) => void
  onMembersClick: (projectId: string) => void
  onEditClick: (projectId: string) => void
}

const defaultProps: ProjectItemProps = {
  projectId: '',
  title: '',
  hasMembers: false,
  isEnabled: false,
  hasToken: false,
  onTokenClick: function (): void {
    throw new Error('Function not implemented.')
  },
  onMembersClick: function (): void {
    throw new Error('Function not implemented.')
  },
  onEditClick: function (): void {
    throw new Error('Function not implemented.')
  },
}

const ProjectItem: FC<ProjectItemProps> = (props) => {
  return (
    <div
      className={classNames(
        'bg-gray-100 hover:scale-[1.01] flex relative text-gray-500 justify-between items-center w-full rounded overflow-hidden shadow'
      )}
    >
      <div className={classNames('absolute w-1 h-full', { 'bg-blue-400': props.isEnabled })} />
      <div className="flex items-center w-full pl-4 overflow-hidden cursor-pointer text-ellipsis whitespace-nowrap">
        <div className="flex-grow w-full select-none">{props.title}</div>
      </div>
      <div className="flex items-center justify-between p-2">
        <button className="pl-2 hover:scale-110 w-7" onClick={() => props.onTokenClick(props.projectId)} aria-label="Generate Token">
          <KeyIcon className={classNames({ 'fill-gray-300': !props.hasToken })} />
        </button>
        <button
          disabled={!props.hasMembers}
          className="inline w-8 pl-2"
          onClick={() => props.onMembersClick(props.projectId)}
          aria-label="View Members"
        >
          <UsersIcon className={classNames({ 'fill-gray-300': !props.hasMembers })} />
        </button>
        <button className="pl-2 w-7 hover:scale-110" aria-label="Edit" onClick={() => props.onEditClick(props.projectId)}>
          <PencilIcon />
        </button>
      </div>
    </div>
  )
}

ProjectItem.defaultProps = defaultProps

export default ProjectItem
