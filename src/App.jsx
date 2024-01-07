import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import VM from './components/VM'
import Services from './components/Services'
import Industries from './components/Industries'
import Clients from './components/Clients'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Banner/>
     <VM/>
     <Services/>
     <Industries/>
     <Clients/>
    </>
  )
}

export default App
