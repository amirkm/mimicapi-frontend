import IProject from '../../src/types/project'

export const mockProjectsEmptyList: IProject[] = []

const mockProjects: IProject[] = [
  {
    _id: '1',
    title: 'Project1',
    path: '/projects/project1',
    isEnabled: false,
    token: 'asflakjads21712as98d7asd',
    members: [
      { name: 'Jane Doe', picture: 'https://example.com/jane_doe.jpg' },
      { name: 'Sally Johnson', picture: 'https://example.com/sally_johnson.jpg' },
      { name: 'Harry Brown', picture: 'https://example.com/harry_brown.jpg' },
      { name: 'Emily Miller', picture: 'https://example.com/emily_miller.jpg' },
    ],
  },
  {
    _id: '2',
    title: 'Project2',
    path: '/projects/project2',
    isEnabled: false,
    token: 'y9351dsygfhcx879ckx3q',
    members: [
      { name: 'Jane Doe', picture: 'https://example.com/jane_doe.jpg' },
      { name: 'Tom Smith', picture: 'https://example.com/tom_smith.jpg' },
      { name: 'Emily Miller', picture: 'https://example.com/emily_miller.jpg' },
    ],
  },
  {
    _id: '3',
    title: 'Project3',
    path: '/projects/project3',
    isEnabled: true,
    token: 'jq3bfx395nei98fko23lo',
    members: [{ name: 'Jane Doe', picture: 'https://example.com/jane_doe.jpg' }],
  },
  {
    _id: '4',
    title: 'Project4',
    path: '/projects/project4',
    isEnabled: false,
    token: '',
    members: [],
  },
  {
    _id: '5',
    title: 'Project5',
    path: '/projects/project5',
    isEnabled: true,
    token: 'nl234ka810lk12kjfio32jk',
    members: [],
  },
  {
    _id: '6',
    title: 'Project6',
    path: '/projects/project6',
    isEnabled: false,
    token: 'plos19fkojg3qx91mew74',
    members: [],
  },
  {
    _id: '7',
    title: 'Project7',
    path: '/projects/project7',
    isEnabled: true,
    token: '',
    members: [],
  },
  {
    _id: '8',
    title: 'Project8',
    path: '/projects/project8',
    isEnabled: false,
    token: 'uaw2030selfi360oep381',
    members: [],
  },
  {
    _id: '9',
    title: 'Project9',
    path: '/projects/project9',
    isEnabled: true,
    token: 'ydh618shde18tngiof784',
    members: [],
  },
  {
    _id: '10',
    title: 'Project10',
    path: '/projects/project10',
    isEnabled: false,
    token: 'ikd950denmx928pio4f391',
    members: [],
  },
]

export default mockProjects
