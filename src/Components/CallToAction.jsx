import React from 'react'

function CallToAction() {
  return (
    <section className='py-20 px-8 bg-myPurple text-myLight text-center'>
      <h2 className='text-4xl font-headline mb-4 tracking-wide'>Ready to Experrience the Ultimate Festival Vibes?</h2>
      <p className='text-lg mb-8 max-w-2xl mx-auto'>Dont miss out on an unforgettable weekend of music, food, and incredible vibes. Get your tickets now and join the party!</p>
      <a 
        href="#tickets"
        className='inline-block bg-myGold text-myDark py-3 px-8 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors'
      >
        Buy Tickets
      </a>
    </section>
  )
}

export default CallToAction
