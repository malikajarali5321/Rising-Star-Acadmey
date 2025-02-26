
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Enroll_now from './Components/Enroll now/Enroll_now'
import Now_hiring from './Components/Now_Hiring/Now_hiring'
import Contact_us from './Components/Contact_us/Contact_us'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
    <BrowserRouter>
    
     <Navbar/>
    <Routes>

      <Route path='/' element={<Home/>}  />
      <Route path='/about' element={<About/>}  />
      <Route path='/enroll_now' element={<Enroll_now/>}  />
      <Route path='/now_hiring' element={<Now_hiring/>}  />
      <Route path='/contact_us' element={<Contact_us/>}  />

    </Routes>
      <Footer/>
    
    </BrowserRouter>
    </>
  )
}

export default App
