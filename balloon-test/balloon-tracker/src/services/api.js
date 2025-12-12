const API_KEY = '' // Future calls might need to have keys in place
const BASE_URL = 'https://a.windbornesystems.com/treasure'

export const getCurrentBalloonData = async () => {
  const res = await fetch(`${BASE_URL}/00.json`)
  const data = await res.json()
  const balloonData = data.slice(0, 10)
  return balloonData.results
}

export const getTwelveHourBalloonData = async () => {
  const res = await fetch(`${BASE_URL}/12.json`)
  const data = await res.json()
  const balloonData = data.slice(0, 10)
  return balloonData.results
}
