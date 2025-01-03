"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
// import { MdProductionQuantityLimits } from 'react-icons/md';
const ProductPages = () => {
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
    {
      id: 5,
      name: "Library Stool Chair",
      image: "/Image 9.png",
      price: 20,
    },
    {
      id: 6,
      name: "Library Stool Chair",
      image: "/Image 6.png",
      price: 20,
    },
    {
      id: 7,
      name: "Library Stool Chair",
      image: "/Image 7.png",
      price: 20,
    },
    {
      id: 8,
      name: "Library Stool Chair",
      image: "/Image 1.png",
      price: 20,
    },
    {
      id: 9,
      name: "Library Stool Chair",
      image: "/Image 5.png",
      price: 20,
    },
    {
      id: 10,
      name: "Library Stool Chair",
      image: "/Image 2.png",
      price: 20,
    },
    {
      id: 11,
      name: "Library Stool Chair",
      image: "/Image 3.png",
      price: 20,
    },
    {
      id: 12,
      name: "Library Stool Chair",
      image: "/Image 10.png",
      price: 20,
    },
  ];

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">All Products</h2>
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
              <p className="text-gray-500"> ${product.price.toFixed(2)}</p>
              {/* Add "Add to Cart" button here */}
              <button className="flex justify-center">
                {" "}
                <LuShoppingCart className="hover:text-[#029FAE]  text-xs   md:text-xl  " />
                Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPages;
