import React from 'react'

function Hero() {
  return (
    <section className='relative h-screen flex items-center justify-center text-myLight'>
      {/* BACKGROUND IMAGE  */}
      <img src="/images/heroImg2.jpg" 
            alt="Festival crowd with lights and music" 
            className='absolute inset-0 w-full h-full object-cover'
      />

      {/* OVERLAY  */}
      <div className='absolute inset-0 bg-myDark opacity-50'></div>


        {/* CONTENT  */}
        <div className='relative z-10 text-center px-8'>
            <h1 className='text-6xl font-headline mb-4 tracking-wide'>Experience the Wave</h1>
            <p className='text-xl font-body mb-6 max-w-2xl mx-auto'>Join us for an unforgettable festival with music, lights, and an atmosphere like no other.</p>
            <a href="#tickets" className='bg-myGold text-myDark px-6 py-3 rounded-full font-body text-lg font-semibold hover:text-myLight transition duration-200'>Get Your Tickets</a>
        </div>
    </section>
  )
}

export default Hero
