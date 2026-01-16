import React from 'react'
import Navbar from './components/common/Navbar.jsx'
import HeroSection from './components/home/HeroSection.jsx'
import CategoryGrid from './components/home/CategoryGrid.jsx'
import Discount from './components/home/Discount.jsx'
import LookBack from './components/home/LookBack.jsx'
import Review from './components/home/review.jsx'
import Footer from './components/common/Footer.jsx'


const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategoryGrid />
      <Discount />
      <LookBack />
      <Review />
      <Footer />
    </div>
  )
}

export default App
