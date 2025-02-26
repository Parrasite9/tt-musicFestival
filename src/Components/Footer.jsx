import React from 'react'

function Footer() {
  return (
    <footer className='bg-myDark text-myLight py-10 px-8'>
      <div className='max-w-7xl mx-auto grid grid-cols-3 gap-8'>
        {/* BRAND INFO  */}
        <div>
            <h3 className='text-2xl font-headline mb-4 text-myGold'>MardiCoachella</h3>
            <p className='text-sm leading-relaxed'>Experience the vibrant mix of Mardi Gras and Coachella vibes at our festival. Join us for unforgettable music, culture, and celebration.</p>
        </div>

        {/* QUICK LINKS  */}
        <div>
            <h4 className='text-lg font-semibold mb-3'>Quick Links</h4>
            <ul className='spay-y-2'>
                <li><a href="#lineup" className='hover:text-myGold transition-colors'>Lineup</a></li>
                <li><a href="#tickets" className='hover:text-myGold transition-colors'>Tickets</a></li>
                <li><a href="#highlights" className='hover:text-myGold transition-colors'>Highlights</a></li>
                <li><a href="#contact" className='hover:text-myGold transition-colors'>Contact</a></li>
            </ul>
        </div>

        {/* SOCIAL MEDIA LINKS  */}
        <div>
            <h4 className='text-lg font-semibold mb-3'>Follow Us</h4>
            <ul className='space-y-2'>
                <li><a href="facebook.com" target='_blank' rel='noopener noreferrer' className='hover:text-myGold transition-colors'>Facebook</a></li>
                <li><a href="instagram.com" target='_blank' rel='noopener noreferrer' className='hover:text-myGold transition-colors'>Instagram</a></li>
                <li><a href="x.com" target='_blank' rel='noopener noreferrer' className='hover:text-myGold transition-colors'>X</a></li>
            </ul>
        </div>
      </div>

        {/* LEGAL INFO  */}
        <div className='mt-10 border-t border-gray-600 pt-6 text-center text-sm'>
            (c) {new Date().getFullYear()} MardiCoachella. All rights reserved.
        </div>

    </footer>
  )
}

export default Footer
