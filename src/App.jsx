import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Lineup from './Components/Lineup'
import Tickets from './Components/Tickets'
import Schedule from './Components/Schedule'
import Highlights from './Components/Highlights'
import ContactSection from './Components/ContactSection'
import SponsorsSection from './Components/SponsorsSection'
import LocationSection from './Components/LocationSection'

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
      <LocationSection />
    </div>
  )
}

export default App
