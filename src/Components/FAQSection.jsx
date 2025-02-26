import React, { useState } from 'react'
import faqs from './Data/FAQ'

function FAQSection() {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (id) => {
        setOpenIndex(openIndex === id ? null : id); // TOGGLE OPEN CLOSE 
    }

  return (
    <section className='py-20 px-8 bg-myLight'>
      <h2 className='text-5xl font-headline text-center text-myPurple mb-12 tracking-wide'>Frequently Asked Questions</h2>

      <div className='max-w-4xl mx-auto space-y-6'>
        {faqs.map((faq, id) => (
            <div key={id} className='border border-myPurple rounded-lg overflow-hidden shadow-md'>
                <button
                    onClick={() => toggleFAQ(id)}
                    className='w-full text-left flex justify-between items-center bg-myPurple text-myLight px-6 py-4 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-myGold'
                >
                    {faq.question}
                    <span>{openIndex === id ? '-' : '+'}</span>
                </button>

                {openIndex === id && (
                    <div className='px-6 py-4 bg-white text-myDark animate-fadeIn'>
                        <p>{faq.answer}</p>
                    </div>
                )}
                
            </div>

        ))}
      </div>
    </section>
  )
}

export default FAQSection
