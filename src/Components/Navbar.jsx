import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className='bg-myPurple text-myLight py-4 shadow-lg'>
        <div className='max-w-7xl mx-auto flex justify-between items-center px-8'>
            {/* LOGO  */}
            <h1 className='text-4xl font-headline tracking-wide'>FESTIWAVE</h1>

            {/* NAV LINKS  */}
            <ul className='flex space-x-10 text-lg font-body'>
                <li><a href="#lineup" className='hover:text-myGold transition duration-200'>Lineup</a></li>
                <li><a href="#tickets" className='hover:text-myGold transition duration-200'>Tickets</a></li>
                <li><a href="#highlights" className='hover:text-myGold transition duration-200'>Highlights</a></li>
                <li><a href="#contact" className='hover:text-myGold transition duration-200'>Contact</a></li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
