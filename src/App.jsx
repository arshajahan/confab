import './App.css'
import Banner from './components/Banner'
import VM from './components/VM'
import Solutions from './components/Solutions'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Sectors from './components/Sectors'
import Sustainability from './components/Sustainability'
import SustainabilityPage from './components/Pages/Sustainability'
import DiversityPage from './components/Pages/Diversity'
import Diversity from './components/Diversity'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import LatestBlogs from './components/LatestBlogs'
import {
  BrowserRouter as Router, Routes, Route, Navigate
} from "react-router-dom";
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import Solution from './components/Pages/Solution'
import SecurityPhishing from './components/Pages/SecurityPhishing'
import Blog from './components/Pages/Blog'
import Careers from './components/Pages/Careers'
import PrivacyPolicy from './components/Pages/PrivacyPolicy'
import Terms from './components/Pages/Terms'
import SectorsPage from './components/Pages/SectorsPage'
import AllBlogs from './components/Pages/AllBlogs'


function App() {

  return (
    <div className=' relative'>
    <Router>
      <Navbar/>
        <Routes>
          
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
          <Route exact path='/about-us' element={<About/>} />
          <Route exact path='/sustainability' element={<SustainabilityPage/>} />
          <Route exact path='/diversity' element={<DiversityPage/>} />
          <Route exact path='/contact-us' element={<Contact/>} />
          <Route exact path='/:id' element={<Solution/>} />
          <Route exact path='/blog/:id' element={<Blog/>} />
          <Route exact path='/security-phishing' element={<SecurityPhishing/>} />
          <Route exact path='/careers' element={<Careers/>} />
          <Route exact path='/privacy' element={<PrivacyPolicy/>} />
          <Route exact path='/terms' element={<Terms/>} />
          <Route exact path='/sectors/:id' element={<SectorsPage />} />
          <Route exact path='/blogs' element={<AllBlogs />} />
          <Route path='*' element={<Navigate to="/about-us" />} />
          

        </Routes>
      <Footer/>
    </Router>
    </div>
  )
}

export default App
