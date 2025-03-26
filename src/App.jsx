import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Specials from './components/Specials'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Reservations from './components/Reservations'
import Footer from './components/Footer'
import './styles/App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Specials />
                <Testimonials />
                <About />
              </>
            } />
            <Route path="/menu" element={<div>Menu Page</div>} />
            <Route path="/about" element={<About />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/order" element={<div>Order Online Page</div>} />
            <Route path="/login" element={<div>Login Page</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App 