import IProject from '@models/project'
import { rest } from 'msw'
import { v4 as uuidv4 } from 'uuid'

import mockProjects from './data/project'

export const handlers = [
  rest.get('/projects', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockProjects))
  }),
  rest.post('/projects', (req, res, ctx) => {
    const { isEnabled, title } = req.body as IProject
    return res(ctx.delay(2000), ctx.status(200), ctx.json({ ...mockProjects[0], isEnabled, title, _id: uuidv4() }))
  }),
  rest.put('/projects/*', (req, res, ctx) => {
    return res(ctx.delay(2000), ctx.status(200), ctx.json(req.body))
  }),
  rest.delete('/projects/*', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(req))
  }),

  rest.get('/projects/*/generatetoken', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(generateRandomString(120)))
  }),
]

function generateRandomString(length: number) {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}
