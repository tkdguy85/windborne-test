import BalloonCard from "../components/BalloonCard"
import "../css/Home.css"

function Home() {

  // Dummy content for dev
  const balloons = [
    { name: "balloon 1", lat: 74.79775364616769, long: 128.71579339618108, alt: 16.04990470521829},
    { name: "balloon 2", lat: -75.04194305757703, long: 19.731549521440435, alt: 17.342035411667215},
    { name: "balloon 3", lat: 59.08460591355339, long: -51.93060372684638, alt: 2.4746633947423344},
    { name: "balloon 4", lat:  4.228789437685384, long: 123.78976619503625, alt: 2.8082478795459327},
    { name: "balloon 5", lat: -21.114715850594933, long: -42.1848090054257, alt: 21.16116366903634}
  ]

  return (
    <div className="home">
      <div className="balloon-grid">
        {
          balloons.map(balloon => <BalloonCard balloon={balloon} key={balloon.name}/>)
        }
      </div>
    </div>
  )
}

export default Home