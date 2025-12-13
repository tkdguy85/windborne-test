import BalloonCard from "../components/BalloonCard"
import { useState, useEffect } from "react"
import { getCurrentBalloonData } from "../services/api"
import "../css/Home.css"

function Home() {
  const [balloons, setBalloons] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadBalloonData = async () => {
      try {
        const currentData = await getCurrentBalloonData()
        
        const balloons = currentData.map((item, index) => ({
          name: `Balloon ${index + 1}`,
          lat: item[0],
          long: item[1],
          alt: item[2],
        }))

        setBalloons(balloons)
      } catch (err) {
        console.log(err)
        setError('Failed to load balloon data. Arbitrary limit exceeded.')
      } finally {
        setLoading(false)
      }
    }

    loadBalloonData()
  }, [])

  // Dummy content for dev
  const weatherBalloons = [
    { name: "balloon 1", lat: 74.79775364616769, long: 128.71579339618108, alt: 16.04990470521829},
    { name: "balloon 2", lat: -75.04194305757703, long: 19.731549521440435, alt: 17.342035411667215},
    { name: "balloon 3", lat: 59.08460591355339, long: -51.93060372684638, alt: 2.4746633947423344},
    { name: "balloon 4", lat:  4.228789437685384, long: 123.78976619503625, alt: 2.8082478795459327},
    { name: "balloon 5", lat: -21.114715850594933, long: -42.1848090054257, alt: 21.16116366903634}
  ]

  return (
    <div className="home">
      <h2 className="balloon-header">Test Data</h2>
      <div className="balloon-grid">
        {
          weatherBalloons.map(balloon => <BalloonCard balloon={balloon} key={balloon.name}/>)
        }
      </div>
      
      <h2 className="balloon-header">Live Data</h2>
      <div className="balloon-grid">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        {!loading && !error && balloons.map((balloon) => (
          <BalloonCard balloon={balloon} key={balloon.name} />
        ))}
      </div>
    </div>
  )
}

export default Home