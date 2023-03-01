export const clearCookie = () => {
  document.cookie.split(';').forEach((cookie) => {
    const name = cookie.split('=')[0]
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`
  })
}
