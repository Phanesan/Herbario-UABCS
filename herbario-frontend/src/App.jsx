import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Screens/Home'
import SearchPage from './Screens/SearchPage'
import UserPage from './Screens/UserPage'
import Mapview from './Mapa/Mapview'
import { BrowserRouter as Router} from 'react-router-dom'
import NavBar from './assets/Components/NavBar'
import { AppRouter } from './Routes/Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <NavBar>  
    </NavBar>
      <Suspense fallback={<>loading...</>}><AppRouter>
        
        </AppRouter></Suspense>
    </Router>
    </>
  )
}

export default App
