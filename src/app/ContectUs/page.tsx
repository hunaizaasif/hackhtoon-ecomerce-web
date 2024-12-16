import React from 'react';
import { FaLocationDot , FaPhone } from 'react-icons/fa6';
import { BiSolidTimeFive } from 'react-icons/bi';
import Image from 'next/image';

const ContactUs = () => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Get In Touch With Us</h2>
      <p className="text-lg text-center mb-12">
        For More Information About Our Product & Services. Please Feel Free To Drop Us 
        An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 
        <div className="flex flex-col items-center">
          <FaLocationDot className="text-2xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Address</h3>
          <p>236 5th SE Avenue,<br /> New York NY10000,<br /> United States</p>
        </div>

        <div className="flex flex-col items-center">
          <FaPhone className="text-2xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p>Mobile: +(84) 546-6789<br /> Hotline: +(84) 456-6789</p>
        </div>

        <div className="flex flex-col items-center">
          <BiSolidTimeFive className="text-2xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Working Time</h3>
          <p>Monday-Friday: 9:00 - 22:00<br /> Saturday-Sunday: 9:00 - 21:00</p>
        </div>
      </div>

      <div className="mt-16">
        <form className="bg-white rounded-lg p-8 shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input 
              type="text" 
              id="name" 
              className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input 
              type="email" 
              id="email" 
              className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <input 
              type="text" 
              id="subject" 
              className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500" 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea 
              id="message" 
            //   rows="4" 
              className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500" 
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="bg-[#029FAE] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
        <div className='mt-10 mb-10   mx-auto'>
          <Image src="/Frame 161 (2).png" alt="icon frame" width={1320} height={270}/>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;