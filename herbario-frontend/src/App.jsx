import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Mapview from './Mapa/Mapview'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Mapview/>
    </>
  )
}

export default App
