"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { LuShoppingCart } from "react-icons/lu";

// import { MdProductionQuantityLimits } from 'react-icons/md';
const FeatureProduct = () => {
  const [activeProduct, setActiveProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Library Stool Chair",
      image: "/Image 1.png",
      price: 20,
      
    },
    {
      id: 2,
      name: "Library Stool Chair",
      image: "/Image 2.png",
      price: 20,
      
    },
    {
      id: 3,
      name: "Library Stool Chair",
      image: "/Image 3.png",
      price: 20,
      
    },
    {
      id: 4,
      name: "Library Stool Chair",
      image: "/Image 4.png",
      price: 20,
  
    },
  ];

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product: any) => (
            <div
              key={product.id}
              className={`bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-300
               ${activeProduct === product.id && "border-2 border-blue-500"}`}
              onMouseEnter={() => setActiveProduct(product.id)}
              onMouseLeave={() => setActiveProduct(null)}
            >

              
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                objectFit="cover"
                className="rounded-lg mb-4"
              />
              <h3 className="text-lg font-sans text-gray-400 hover:text-[#029FAE]">
                {product.name}
              </h3>
              <p className="text-black"> ${product.price}</p>
              {/*  " Cart" button here */}
              <button className="flex justify-center">
                {" "}
                <LuShoppingCart className="hover:text-[#029FAE]  text-xs   md:text-xl  " />{" "}
                cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;