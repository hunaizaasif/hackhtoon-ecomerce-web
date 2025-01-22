"use client"
import React from 'react'
import Image from 'next/image';
import { useState } from 'react'
import Link from 'next/link';





const TOpCategories = () => {
  const [activeProduct, setActiveProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: 'Wing Chair',
      image: '/Image 5.png',
      quntity: 3584,
    },
    {
      id: 2,
      name: 'Wooden Chair',
      image: '/Image 9.png',
      quntity: 157,
    },
    {
      id: 3,
      name: 'Desk Chair',
      image: '/Image 10.png',
      quntity: 154,
    },
  ];

  return (
    <div className="top-categories">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">TOp Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className={`product bg-white mx-auto mb-7 overflow-hidden z-10 shadow-md p-4 hover:scale-105 transition-transform duration-300 group relative
                ${activeProduct === product.id && 'border-2 border-blue-500'}`}
              onMouseEnter={() => setActiveProduct(product.id)}
              onMouseLeave={() => setActiveProduct(null)}
            >
              <Link href={`/product/${product.id}`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={350}
                  height={350}
                  // objectFit="cover" // Enable for image cropping
                  className="rounded-xl"
                />
              </Link>
              <div className="product-info bg-[#000000B2] px-2 absolute bottom-4 w-full">
                <h3 className="text-lg font-sans text-gray-400 hover:text-[#029FAE]">
                  {product.name}
                </h3>
                <p className="text-white"> {product.quntity} Products</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TOpCategories;