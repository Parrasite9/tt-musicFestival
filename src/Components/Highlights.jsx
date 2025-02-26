import React, { useState } from 'react'
import highlights from './Data/highlightsData'

function Highlights() {

    const [selectedVideo, setSelectedVideo] = useState(null)

  return (
    <section id='highlights' className='py-20 px-8 bg-myLight'>
      <h2 className='text-5xl font-headline text-center text-myPurple mb-12 tracking-wide'>Festival Highlights</h2>

      <div className="grid grid-cols-5 gap-6 max-w-7xl mx-auto">
        {highlights.map((media, id) => (
            <div key={id} className="relative group rounded-lx overflow-hidden shadow-lg cursor-pointer">
                {media.type === "image" ? (
                    <img 
                        src={media.src} 
                        alt={media.alt}
                        className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300'
                    />
                ) : (
                    <div 
                        onClick={() => setSelectedVideo(media.src)}
                        className='w-full h-48 bg-myDark flex justify-center items-center group-hover:bg-myGold transition-colors duration-300'
                    >
                        <p className='text-myLight font-bold'>Play Video</p>
                    </div>
                )}
            </div>
        ))}
      </div>

      {selectedVideo && (
        <div className='fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 overflow-auto'>
            <div className="relative w-full max-w-4xl p-4 max-h-screen">
                <button 
                    onClick={() => setSelectedVideo(null)}
                    className='absolute top-2 right-2 bg-myGold text-myDark font-bold rounded-full px-4 py-2'
                >
                    x Close
                </button>

                <iframe 
                    src={selectedVideo} 
                    title="Festival Commercial"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                    allowFullScreen   
                    className='w-full h-[500px] rounded-lg' 
                ></iframe>
            </div>
        </div>
      )}
    </section>
  )
}

export default Highlights
