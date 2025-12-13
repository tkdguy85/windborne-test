const API_KEY = '' // Future calls might need to have keys in place
const BASE_URL = '/api/treasure'

export const getCurrentBalloonData = async () => {
  const res = await fetch(`${BASE_URL}/00.json`)
  const data = await res.json()
  return data.slice(0, 12)
}

export const getTwelveHourBalloonData = async () => {
  const res = await fetch(`${BASE_URL}/12.json`)
  const data = await res.json()
  return data.slice(0, 12)
}
