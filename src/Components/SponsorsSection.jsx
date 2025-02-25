import React from 'react'
import sponsors from './Data/SponsorsData'
import './Styles/sponsors.css'

function SponsorsSection() {
  return (
    <section className='py-20 px-8 bg-myLight'>
      <h2 className='text-5xl font-headline text-center text-myPurple mb-12 tracking-wide'>Our Sponsors</h2>

      <div className='overflow-hidden relative max-w-6xl mx-auto'>
        <div className="sponsor-scroll flex gap-12">
            {sponsors.map((sponsor, id) => (
                <a 
                    key={id}
                    href={sponsor.website}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center justify-center w-48 h-24 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
                >
                    <img 
                        src={sponsor.logo} 
                        alt={`${sponsor.name} logo`}
                        className='object-contain w-full h-full p-4'
                    />
                </a>
            ))}
        </div>
      </div>
    </section>
  )
}

export default SponsorsSection
