import IUser from '@models/user'

interface IProject {
  _id: string
  title: string
  path: string
  token: string
  isEnabled: boolean
  members: IUser[]
}

export default IProject
