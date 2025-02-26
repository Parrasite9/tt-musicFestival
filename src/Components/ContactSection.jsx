import React, { useState } from 'react'

function ContactSection() {
    
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !message) {
            alert('Please fill out all fields');
            return;
        }

        setSubmitted(true);
        setEmail('');
        setMessage('');
    }



  return (
    <section id='contact' className='py-20 px-8 bg-myGold text-myDark'>
      <h2 className='text-5xl font-headline text-center mb-8 tracking-wide'>Contact Us</h2>
      <p className='text-center mb-12 max-w-2xl mx-auto'>Got question or feedback? Reach out to us or subscribe to our newsletter for the latest festival updates!</p>
      
      <div className="flex justify-between max-w-5xl mx-auto w-1/2">
        <form onSubmit={handleSubmit} className='bg-myLight p-6 rounded-lg shadow-md w-1/2'>
            <label className='block mb-4'>
                <span className='font-semibold'>Email:</span>
                <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email@example.com'
                    required 
                    className='w-full p-2 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-myPurple'
                />
            </label>

            <label className='block mb-4'>
                <span className='font-semibold'>Message: </span>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder='Write your message here...'
                    required
                    className='w-full p-2 mt-2 border rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-myPurple'
                ></textarea>
            </label>

            <button type='submit' className='w-full bg-myPurple text-myLight py2 rounded hover:bg-myDark transition-colors duration-300 font-bold'>
                Send Message
            </button>

            {submitted && <p className='text-green-600 font-semibold mt-4'>Message Sent Successfully!</p>}
        </form>


        {/* NEWSLETTER SUBSCRIPTION  */}
        <div className='bg-myLight p-6 rounded-lg shadow-md w-1/2 flex flex-col justify-center items-center'>
            <h3 className='text-2xl font-semibold mb-4'>Subscribe to our Newsletter</h3>
            <input 
                type="email" 
                target={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email'
                required
                className='w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-myPurple'
            />
            <button 
                onClick={() => alert(`Subsribed with ${email}!`)}
                className='w-full bg-myPurple text-myLight py-2 rounded hover:bg-myDark transition-colors duration-300 font-bold'
            >
                Subscribe
            </button>
        </div>
      </div>




    </section>
  )
}

export default ContactSection
