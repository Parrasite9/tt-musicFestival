import React from 'react'

function LocationSection() {
  return (
    <section className='py-20 px-8 bg-myLight'>
      <h2 className='text-5xl font-headline text-center text-myPurple mb-12 tracking-wide'>Festival Location</h2>

      <div className='max-w-5xl mx-auto text-center mb-10'>
        <p className='text-lg text-myDark mb-4 font-semibold'>MardiCoachella Grounds, 123 Festival Ave, New Orleans, LA</p>
        <p className='text-myDark'>Join us at the heart of the city for an unforgettable festival experience!</p>
      </div>

      <div>
        <iframe 
            title='Festival Location Map'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.336785231728!2d-90.07153268489143!3d29.951065681910934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a60f1df6e8ef%3A0x4ab0198cd9c7d1ec!2sNew%20Orleans%2C%20LA!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus" 
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy='no-referrer-when-downgrade'
            className='w-full h-[450px'
        ></iframe>
      </div>
    </section>
  )
}

export default LocationSection
