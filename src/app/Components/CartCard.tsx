import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaTrash, FaRegHeart } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa";

const CartCard = ({
  src,
  title,
  size,
  price,
  quantity,
  content,
}: {
  src: string;
  title: string;
  size: string;
  price: number;
  quantity: number;
  content: string;
}) => {
  return (
    <div className="flex p-10">
      {/* Image */}
      <Image
        src={src}
        alt="title"
        width={100}
        height={100}
        className="w-[100px] h-[100px]"
      />
      {/* some Info */}
      <div className="flex px-5 justify-between items-center w-full">
        <div>
          {/* title */}
          <h2 className="mb-3 text-sm font-semibold leading-none line-clamp-1 ">
            {title}
          </h2>
          {/* content */}
          <p className="mt-2 text-xs font-normal text-[#BDBDBD] line-clamp-2">
            {content}
          </p>
          <div className="flex justify-between items-center w-full gap-4">
            {/* size */}
            <p className="mt-2 mb-2 text-xs font-normal text-[#BDBDBD]">
              size:&nbsp;<span>{size}</span>
            </p>
            {/* quantity*/}
             <p className="mt-2 mb-2 text-xs font-normal text-[#BDBDBD]">
              Quantity:&nbsp;{quantity}
            </p> 
            {/* Quantity*/}
            <div className="mt-2 flex items-center">
         <Button className="group-hover:bg-white bg-[#029FAE] text-white w-fit h-fit rounded-lg text-xs duration-300"> 
               <FaMinus className="h-2 w-2 group-hover:bg-white"/>
               </Button>
              <div className="mr-2 ml-2 scroll-m-2 text-sm- font-semibold tracking-tight">
                1
                </div> 
        
         <Button className="group-hover:bg-white bg-[#029FAE] text-white w-fit h-fit rounded-lg text-xs duration-300"> 
               <FaPlus className="h-2 w-2 group-hover:bg-white"/>
               
         </Button>
            </div>
       </div>
       {/* price */}
      <div className="flex flex-col mt-2 gap-2">
        <h2 className="text-lg font-normal leading-none line-clamp-1">
          MRP:&nbsp;${price}
        </h2>
      </div>
          {/* Delet and Like */}
          <div className="flex items-center mt-2 justify-around">
            <FaRegHeart className="mt-2 mb-2 text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer" />
            
          
            <FaTrash className="mt-2 mb-2 text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer" />
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default CartCard;
