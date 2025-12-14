import './css/App.css'
import Home from './pages/Home'
import History from './pages/History'
import Tracking from './pages/Tracking'
import NavBar from './components/Nav'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>

      <NavBar />
      <main className='main-content'>
        <h1>Weather Balloon Listing</h1>
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/history' element={ <History /> }/>
          <Route path='/tracked' element={ <Tracking /> }/>
        </Routes>
      </main>
    </div>
  )
}

export default App
