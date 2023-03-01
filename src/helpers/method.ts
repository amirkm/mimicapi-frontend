import Method from '@enum/Method'

export const getMethodColor = (method: string) => {
  switch (method) {
    case Method.GET:
      return 'text-sky-600'
    case Method.POST:
      return 'text-green-400'
    case Method.PUT:
      return 'text-orange-400'
    case Method.DELETE:
      return 'text-red-400'
    case Method.PATCH:
      return 'text-sky-200'
    default:
      return ''
  }
}
export default getMethodColor
