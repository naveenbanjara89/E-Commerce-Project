import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 '>
        <img className='w-full md:max-w-[480px] ' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6 '>
          <p className='font-semibold text-xl text-gray-600 '>Our Store</p>
          <p className='text-gray-600'>27 Avadhpuri Kanta <br/> Jaipur Rajasthan </p>
          <p className='text-gray-600'>Mobile Number: +91 9649876823 <br/>Email:banjaranaveen89@gmail.com </p>
          <p className='text-xl font-semibold text-gray-700 '>Careers at VEXIVA</p>
          <p className='text-gray-600'>Learn more about our teams and job openings.</p>
          <button className='border border-black rounded transition-all duration-500 text-black text-sm  mt-4 px-8 py-3 hover:bg-black hover:text-white cursor-pointer'>Learn More</button>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default Contact