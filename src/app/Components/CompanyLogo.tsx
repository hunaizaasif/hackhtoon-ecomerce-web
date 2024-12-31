import React from 'react'
import Image from 'next/image'

const CompanyLogo = () => {
  return (
    <div className='container w-full  '>
       {/* company logos  */}
         
           <div className="flex items-center justify-center gap-x-12  ml-10 ">
      <Image src="/Logo.png" alt="Zapier logo" width={85} height={87}/>
       <Image src="/Logo (2).png" alt="pipedrive" width={107} height={109}/>    
       <Image src="/Logo (3).png" alt="CIB BANK" width={135} height={139}/>    
       <Image src="/Logo (4).png" alt=" z" width={63} height={65}/>    
       <Image src="/Logo (5).png" alt="BURNT TOST " width={98} height={101}/>    
       <Image src="/Logo (6).png" alt="Panda" width={113} height={115}/>    
      <Image src="/Logo (7).png" alt="MOZ" width={ 84} height={87}/>
      
      </div>
    </div>
  )
}

export default CompanyLogo
