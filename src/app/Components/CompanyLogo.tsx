import React from 'react'
import Image from 'next/image'

const CompanyLogo = () => {
  const Data = [
    //  company logos  
    "/Logo.png",     
    "/Logo (2).png",
    "/Logo (3).png",
    "/Logo (4).png",
    "/Logo (5).png",
    "/Logo (6).png",
    // "/Logo (7).png",
  ];
  return (
    <div className='px-4 sm:px-8 md:px-16 lg:px-32 mx-auto max-screen-xl m-auto'>
            <div className="grid grid-col-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8 ">
    {Data.map((val,i)=>(
<div key={i} className='flex justify-center'>
  <Image
  src={val}
  alt={`Logo${i}`}
  width={100}
  height={100}
  className='w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain'/>


</div>


    ))}
           
      </div>
    </div>
    
    )
  
}

export default CompanyLogo

{/* <Image src="/Logo.png" alt="Zapier logo" width={85} height={87}/>
       <Image src="/Logo (2).png" alt="pipedrive" width={107} height={109}/>    
       <Image src="/Logo (3).png" alt="CIB BANK" width={135} height={139}/>    
       <Image src="/Logo (4).png" alt=" z" width={63} height={65}/>    
       <Image src="/Logo (5).png" alt="BURNT TOST " width={98} height={101}/>    
       <Image src="/Logo (6).png" alt="Panda" width={113} height={115}/>    
      <Image src="/Logo (7).png" alt="MOZ" width={ 84} height={87}/> */}