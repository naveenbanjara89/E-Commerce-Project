import React, { useState } from 'react'
import { toast } from 'react-toastify';
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmitHandel = async (event) => {
  event.preventDefault();
  setResult("Sending....");
  const formData = new FormData(event.target);

  formData.append("access_key", "e8ab572f-9bfc-4538-9c35-d30d918e54a0");

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  });

  const data = await response.json();

  if (data.success) {
    setResult("");
    toast.success("Thank you for your response")
    event.target.reset();
  } else {
    console.log("Error", data);
    toast.error(data.message)
    setResult("");
  }
};


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

      <div className='container mx-auto py-4 pt-20  px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden ' >
        <p className='text-gray-500 max-w-80 mx-auto text-center mb-8'  >Ready to Make a Move? Let’s Build Your Future Together</p>
      <form onSubmit={onSubmitHandel} className='max-w-2xl mx-auto mb-20 text-gray-600 pt-8 '>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 text-left '>
                    Your Name
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2  ' type="text" placeholder='Your Name '  required/>
                </div>
                <div className='w-full md:w-1/2 text-left md:pl-4 '>
                    Your Email
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2  ' type="email" placeholder='Your Email'  required/>
                </div>
            </div>
            <div className='my-6 text-left'>
                Message
                <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none ' name="Message" id="Message" required></textarea>
            </div>
            <div className='flex justify-center'>
                <button className='py-2 px-12 mb-10 text-white rounded  bg-blue-600 cursor-pointer hover:bg-blue-500'>
                    { result ? result :"Send Message "}
                </button>
            </div>
        </form>
      </div>


      <NewsLetterBox />
    </div>
  )
}

export default Contact