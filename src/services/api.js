const API_KEY = '' // Future calls might need to have keys in place
// const BASE_URL = '/api/treasure' //! - Local use only
const BASE_URL = 'https://windborne.dallasgordon3.workers.dev/'

export const getCurrentBalloonData = async () => {
  const res = await fetch(`${BASE_URL}`)
  const data = await res.json()
  return data.slice(0, 10)
}

// TODO - Set 12 hour toggle 
export const getTwelveHourBalloonData = async () => {
  const res = await fetch(`${BASE_URL}/12.json`)
  const data = await res.json()
  return data.slice(0, 10)
}
