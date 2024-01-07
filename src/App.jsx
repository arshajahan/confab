import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import VM from './components/VM'
import Services from './components/Services'
import Industries from './components/Industries'
import Clients from './components/Clients'
import Testimonial from './components/Testimonial'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Banner/>
     <VM/>
     <Services/>
     <Industries/>
     <Clients/>
     <Testimonial/>
     <Footer/>
    </>
  )
}

export default App
