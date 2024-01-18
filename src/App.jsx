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
import LatestBlogs from './components/LatestBlogs'
import {
  BrowserRouter as Router, Routes, Route, Navigate
} from "react-router-dom";
import About from './components/Pages/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' relative'>
    <Router>
      <Navbar/>
        <Routes>

          {/* <Route exact path='//' 
            element={
              <>
                <Banner/>
                <VM/>
                <Solutions/>
                <Sectors/>
                <Sustainability/>
                <Diversity/>
                <LatestBlogs/>
              </>
          } /> */}
          
          <Route path='/' 
            element={
              <>
                <Banner/>
                <VM/>
                <Solutions/>
                <Sectors/>
                <Sustainability/>
                <Diversity/>
                <LatestBlogs/>
              </>
          } />
          <Route exact path='/about' element={<About/>} />

        </Routes>
      <Footer/>
    </Router>
    </div>
  )
}

export default App