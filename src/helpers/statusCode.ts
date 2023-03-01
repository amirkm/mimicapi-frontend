export const getStatusColor = (status: string) => {
  const statusNumber = parseInt(status)

  switch (true) {
    case 200 <= statusNumber && statusNumber <= 299:
      return 'bg-green-600'
    case 300 <= statusNumber && statusNumber <= 399:
      return 'bg-orange-600'
    case 400 <= statusNumber && statusNumber <= 499:
      return 'bg-yellow-600'
    case 500 <= statusNumber && statusNumber <= 599:
      return 'bg-red-600'
    default:
      return ''
  }
}
