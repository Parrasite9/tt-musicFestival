import React from 'react'
import ticketOptions from './Data/TicketOptions'
import ticketBG from '/images/ticketBg.jpg'

function Tickets() {
  return (
    <section id='tickets' className='relative py-20 px-8 bg-myLight'>
        {/* BACKGROUND IMAGE  */}
      <img 
        src={ticketBG} 
        alt="Festival crowd background" 
        className='absolute inset-0 w-full h-full object-cover opacity-20'
      />

      {/* OVERLAY  */}
      <div className='absolute inset-0 bg-mydark opacity-30'></div>

      {/* CONTENT  */}
      <div className='relative z-10 max-w-6xl mx-auto'>
        <h2 className='text-5xl font-headline text-center text-myPurple mb-12 tracking-wide'>Get Your Ticket</h2>
        <div className='grid grid-cols-3 gap-10'>
            {ticketOptions.map((ticket, id) => (
                <div key={id} className={`relative bg-myLight p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 border-4 ${
                    ticket.highlighted ? 'border-myGold' : 'border-transparent'
                }`}>
                    {ticket.highlighted && (
                        <span className='absolute top-2 right-2 bg-myGold text-myDark font-semibold px-3 py-1 rounded-full text-sm'>Most Popular</span>
                    )}
                    <h3 className='text-3xl font-headline text-center text-myPurple my-4'>{ticket.type}</h3>
                    <p className='text-center text-myGreen font-bold text-2xl mb-6'>{ticket.price}</p>
                    <ul className='space-y-2 mb-6'>
                        {ticket.perks.map((perk, id) => (
                            <li key={id} className='flex items-center'>
                                <span className='w-2 h-2 bg-myGreen rounded-full mr-3'></span>
                                <p className='font-body text-myDark'>{perk}</p>
                            </li>
                        ))}
                    </ul>
                    <button className='w-full bg-myPurple text-myLight py-3 rounded-lg font-semibold hover:text-myDark transition-colors duration-200'>Buy Now</button>
                </div>

            ))}
        </div>
      </div>
    </section>
  )
}

export default Tickets
