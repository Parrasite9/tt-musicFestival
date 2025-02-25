import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Lineup from './Components/Lineup'
import Tickets from './Components/Tickets'
import Schedule from './Components/Schedule'
import Highlights from './Components/Highlights'
import ContactSection from './Components/ContactSection'
import SponsorsSection from './Components/SponsorsSection'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Lineup />
      <Tickets />
      <Schedule />
      <Highlights />
      <ContactSection />
      <SponsorsSection />
    </div>
  )
}

export default App
