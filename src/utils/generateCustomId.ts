export const generateRandomId = () => {
  const timestamp = Date.now().toString(36)
  const randomNum = Math.random().toString(36).substring(2, 15)
  return timestamp + randomNum
}
