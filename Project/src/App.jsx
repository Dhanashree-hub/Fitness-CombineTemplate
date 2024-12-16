 import { useState } from 'react'
 import { Route, Routes } from "react-router-dom";
 import Navbar from './components/navigation/Navbar'
 import ScrollToTop from './components/ScrollToTop'
 import Home from './Pages/Home';
import Classes from './components/featured-class/Classes';
import Footer from './components/footer/Footer'
import GymClass from './components/GymClass';
import Contact from './Pages/Contact';
import Sidebar from './components/navigation/Sidebar';


function App() {
  

  return (
    <>
    
      <Navbar />
      
      <Routes>
      
      <Route path='/' element={<Home />} />
     
      <Route path='classes' element={<Classes />} />
      <Route path='contact' element={<Contact />} />
      <Route path='side' element={<Sidebar />} />
      </Routes>
      
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
