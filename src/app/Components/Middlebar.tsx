import Image from "next/image"
import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";


export default function Middlebar(){
    return(

<div className=" w-full mx-auto   sticky top-0 bg-[#F0F2F3]flex flex-col items-center md:flex-row  justify-between ">
<div className="flex items-center  md:flex-row text-xl py-4  font-normal gap-3 mb-0 md:mb-0 justify-around " >
    <div className="flex gap-2">
    <Image src="/Logo Icon.png" alt="sofa logo" height={30} width={40}  />
     <span> Comforty</span> 
     </div>
     
       
    
        <div className=" flex justify-center item-center   gap-2">
       
        {/* Contact and Cart sections */}
        <Link href="/Cart" className="flex items-center gap-2">
        <label  tabIndex={0} className="cursor-pointer">

        </label>
        <LuShoppingCart className="text-xs md:text-xl  " />
          <p className="text-xs md:text-xl">Cart</p>
          
             <span className=" py-0 px-1.5 bg-green-900 text-white rounded-full w-5 h-5 items-centerflex items-center  text-xs md:text-sm  ">
              2
            </span>
            </Link>
            </div>
          </div>
          </div>
          
    )
}