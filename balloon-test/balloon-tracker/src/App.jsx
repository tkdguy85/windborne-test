import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import BalloonCard from './components/BalloonCard'

function App() {
  return (
    <div>
      <p>Weather Balloon Listing</p>
      <Home />
    </div>
  )
}

export default App
