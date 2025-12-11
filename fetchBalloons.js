// Fetch balloon data via provided API
const API_URL = 'https://a.windbornesystems.com/treasure/00.json'

async function loadBalloonData() {
  // Try/Catch because this API might get wonky
  try {
    const res = await fetch(API_URL)
    const data = await res.json()

    // Test showing with 10 balloons first
    const balloonData = data.slice(0, 10)
    const balloonDisplay = document.getElementById('balloons-container')

    balloonData.forEach((item, index) => {
      // Assuming 3rd value is Altitude in meters, not US freedom units or household bathtub widths
      const [lat, long, alt] = item

      const div = document.createElement('div')
      div.className = 'balloon'

      // 99 Red balloons worth of data
      div.innerHTML = `
        <h2>Balloon ID:${index + 1}</h2>
        <p><strong>Latitude</strong> ${lat}</p>
        <p><strong>Longitude</strong> ${long}</p>
        <p><strong>Altitude</strong> ${alt}</p>
      `
      balloonDisplay.appendChild(div)
    })

    
  } catch {
    console.error('Issue fetching balloon data:', error)
  }
}

// Run on page load, future update will be to manipulate timing
loadBalloonData()