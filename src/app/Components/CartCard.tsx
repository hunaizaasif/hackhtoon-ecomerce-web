import Image from "next/image";
import React from "react";
import { FaTrash, FaRegHeart } from "react-icons/fa";
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
            <p className="mt-2  text-xs font-normal text-[#BDBDBD]">
              size:&nbsp;<span>{size}</span>
            </p>

            {/* quantity*/}
            <p className="mt-2 mb-2 text-xs font-normal text-[#BDBDBD]">
              Quantity:&nbsp;{quantity}
            </p>
          </div>
          {/* buttons */}
          <div className="flex items-center mt-2">
            <FaRegHeart className="text-[#000000] ml-2 1" />
            <FaTrash className="text-[#000000] ml-2 " />
          </div>
        </div>
      </div>

      {/* price */}
      <div className="flex flex-col items-end gap-5">
        <h2 className="text-lg font-semibold leading-none line-clamp-1">
          MRP:&nbsp;${price}
        </h2>
      </div>
    </div>
  );
};

export default CartCard;
