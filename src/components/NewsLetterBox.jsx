import React, { useState } from 'react'
import { toast } from 'react-toastify'

const NewsLetterBox = () => {

    const [email, setEmail] = useState('')
    const handleSubscribe = () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!email) {
        toast.error('Please enter an email')
        return
    }

    if (!emailRegex.test(email)) {
        toast.error('Please enter a valid email address')
        return
    }

    toast.success('🎉 Thanks for subscribing!')
    setEmail('')
    }

  return (
    <div>
        <div>
            <div className='text-center px-4 xs:px-6 sm:px-70'>
                <p className='text-lg xs:text-xl sm:text-2xl text-gray-800 font-medium px-3 xs:px-4 sm:px-25'>Subscribe now & get 20% off</p>
                <p className='text-gray-500 mt-1 xs:mt-2 sm:mt-3 text-xs xs:text-sm sm:text-base px-3 xs:px-4 sm:px-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </div>
        <div>
            <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-300 pl-3 '>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} className='w-full sm:flex-1 outline-none gap-2' placeholder='Enter your email ' required />
                <button onClick={handleSubscribe} type='submit' className='bg-black text-white ml-2 cursor-pointer  text-xs px-10 py-4'>SUBSCRIBE</button>
            </form>
        </div>
    </div>

  )
}

export default NewsLetterBox