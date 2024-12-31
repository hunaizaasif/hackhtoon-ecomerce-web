import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";

export default function Hero (){
    return(
        <>
        <div className="container  mx-auto flex flex-col md:flex-row items-center justify-center  rounded-md bg-[#F0F2F3]  py-20 px-10">
            <div className=" flex flex-col  space-y-4 md:space-y-6 text-center md:text-left  md:w-1/2 ">

    {/* Heading  */}
    
    <h1 className="text-[#272343] w-[177px] h-[14px] mb-6">Welcome to chairy</h1>
<h2 className="text-xl md:text-2xl  lg:text-3xl w-[557px] font-bold leading-snug ">54% Discount
Welcome to chairyBest Furniture Collection for your interior.</h2>


<button 
 className="underline underline-offset-4 hover:font-semibold flex items-center w-[171px] h-[52px] rounded-md gap-[20px] mt-6 py-[14px] px-[24px] text-[#FFFFFF] bg-[#029FAE]">
     shop Now
     <IoIosArrowRoundForward />
     </button>
    
     </div>
     
      {/* chair Image  */}
          {/* <div className="md:ml-10 rounded-md"> */}
            <Image src="/Product Image (1).png" alt="chair Image" width="434" height="584"/>
            {/* </div>   */}
            </div>
   
       
 
  </>       
 

)
}