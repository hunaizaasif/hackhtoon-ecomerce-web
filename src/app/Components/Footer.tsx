import React from 'react'
import Image from 'next/image'
import { FaFacebook,FaTwitter ,FaInstagram ,FaPinterest , FaYoutube ,FaCcPaypal   } from "react-icons/fa";import { MdJoinRight } from "react-icons/md";
import { SiAmericanexpress , SiVisa } from "react-icons/si";
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='mx-auto w-full  bg-[#FFFFFF] container  sticky z-0 top-0 '>
      
      <div className='  px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
      
<div>
    <Image src="/Logo (1).png" alt="sofa logo" height={40} width={168}  />
     

     <div className='mt-6 text-[#9A9CAA]'>
        Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
     Cras egestas purus 
     </div>
     <div className='flex gap-4 mt-6 text-[#E1E3E9]'>
     <Link href="/" className='hover:text-[#029FAE] '> <FaFacebook size={24} /> </Link>
     <Link href="/" className='hover:text-[#029FAE] '><FaTwitter size={24}  /> </Link>
     <Link href="/" className='hover:text-[#029FAE] '><FaInstagram  size={24} /></Link>
     <Link href="/" className='hover:text-[#029FAE] '><FaPinterest size={24}/></Link>
     <Link href="/" className='hover:text-[#029FAE] '><FaYoutube size={24}/></Link>
     </div> 
     </div> 
          <div>
         <h3 className='font-medium text-xl mt-6 text-[#9A9CAA]'> Category</h3>
         <ul className='space-y-3 mt-4 text-[#272343] font-normal' >
            <li>Sofa</li>
            <li>Armchair</li>
            <li>Wing Chair</li>
            <li className='hover:text-[#029FAE] underline'>Desk Chair</li>
              <li>wooden Chair</li>
            <li>Park Bench</li>
         </ul>
         </div>
         <div>
            <h4 className='text-[#9A9CAA] font-medium text-xl mt-6 '>Support</h4>
            <ul className='space-y-3 mt-4 text-[#272343] font-normal'>
            <li><Link href="/terms-conditions" className='hover:text-[#029FAE]'>Terms & Conditions</Link></li>
            <li><Link href="/privacy-policy" className='hover:text-[#029FAE]'>Privacy Policy</Link></li>
            <li><Link href="/help" className='hover:text-[#029FAE]'>Help</Link></li>
          </ul>
             </div>
             <div className=''>
          <h3 className='font-medium text-xl mt-6 text-[#9A9CAA] '>Newsletter</h3>
          <input type="email" placeholder="Your email" className="border border-gray-300 p-2 mt-4 rounded-md" />
          <p className="text-[#9A9CAA] mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
        </div>
        </div>
        {/* footer bootum */}
  <div className='mt-10 text-center border-t  border-zinc-400 text-[#9A9CAA]   grid grid-cols-1 md:grid-cols-2 justify-between' >     

<p className='py-6'>@ 2021 - Blogy - Designed & Develop by
 <span className='text-[#272343]'>Zakirsoft</span></p>
 
{/* online payment */}

<div className='flex gap-3 items-center px-4'>
    <Link href="/" className='hover:text-[#029FAE] '><MdJoinRight size={60}/></Link>
    <Link href="/" className='hover:text-[#029FAE] '>< FaCcPaypal size={50}/></Link>
    <Link href="/" className='hover:text-[#029FAE] '><SiAmericanexpress size={40}/></Link>
    <Link href="/" className='hover:text-[#029FAE] '><SiVisa  size={60}/></Link>
</div>
</div>

          
      </div>
    


  )
}

export default Footer


