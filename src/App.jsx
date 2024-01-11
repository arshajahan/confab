import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import VM from './components/VM'
import Solutions from './components/Solutions'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Sectors from './components/Sectors'
import Sustainability from './components/Sustainability'
import Diversity from './components/Diversity'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' relative'>
     <Navbar/>
     <Banner/>
     <VM/>
     <Solutions/>
     <Sectors/>
     <Sustainability/>
     <Diversity/>
     <Footer/>
    </div>
  )
}

export default App
