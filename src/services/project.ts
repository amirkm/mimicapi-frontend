import Method from '@enum/Method'
import CreateProjectDTO from '@models/dto/CreateProjectDTO'
import UpdateProjectDTO from '@models/dto/updateProjectDTO'
import IProject from '@models/project'

const BaseUrl = import.meta.env.VITE_PANEL_API_URL

export const projectsService = {
  async getProjects(): Promise<IProject[]> {
    const response = await fetch(`${BaseUrl}/projects`)
    if (!response.ok) {
      if (response.status !== 500) throw new Error('Please contact the admin')
      const result = await response.json()
      throw new Error(result.error)
    }
    return await response.json()
  },

  async createProject(createProjectDTO: CreateProjectDTO): Promise<any> {
    const response = await fetch(`${BaseUrl}/projects`, {
      method: Method.POST,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(createProjectDTO),
    })
    if (!response.ok) {
      if (response.status !== 500) throw new Error('Please contact the admin')
      const result = await response.json()
      throw new Error(result.error)
    }
    return await response.json()
  },

  async updateProject(updateProjectDTO: UpdateProjectDTO): Promise<IProject> {
    const response = await fetch(`${BaseUrl}/projects/${updateProjectDTO._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateProjectDTO),
    })

    if (!response.ok) {
      if (response.status !== 500) throw new Error('Please contact the admin')
      const result = await response.json()
      throw new Error(result.error)
    }
    return await response.json()
  },

  async deleteProject(id: string): Promise<void> {
    const response = await fetch(`${BaseUrl}/projects/${id}`, {
      method: 'DELETE',
    })

    if (!response.ok) {
      if (response.status !== 500) throw new Error('Please contact the admin')
      const result = await response?.json()
      throw new Error(result.error)
    }
  },

  async generateToken(id: string): Promise<string> {
    const response = await fetch(`${BaseUrl}/projects/${id}/generatetoken`, {
      method: 'get',
    })

    if (!response.ok) {
      if (response.status !== 500) throw new Error('Please contact the admin')
      const result = await response.json()
      throw new Error(result.error)
    }
    return await response.json()
  },
}

export default projectsService
