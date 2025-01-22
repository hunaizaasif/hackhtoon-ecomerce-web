"use client";

import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { Products } from "../../../types/products"; // Assuming Product is the correct type
import { four } from "@/sanity/lib/quries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { LuShoppingCart } from "react-icons/lu";


 const OurProduct = () => {
  // const [activeProduct, setActiveProduct] = useState(null);
const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
     async function fetchProducts ()   {
      try {
        const fetchedProducts: Products[] = await client.fetch(four);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
        // Handle errors gracefully, e.g., display an error message to the user
      }
    };

    fetchProducts();
  }, []);
  //  function setActiveProduct(arg0: null): void {
    //  throw new Error("Function not implemented.");
   

//   const products = [
//     {
//       id: 1,
//       name: "Library Stool Chair",
//       image: "/Image 1.png",
//       price: 20,
//     },
//     {
//       id: 2,
//       name: "Library Stool Chair",
//       image: "/Image 2.png",
//       price: 20,
//     },
//     {
//       id: 3,
//       name: "Library Stool Chair",
//       image: "/Image 3.png",
//       price: 20,
//     },
//     {
//       id: 4,
//       name: "Library Stool Chair",
//       image: "/Image 4.png",
//       price: 20,
//     },
//     {
//       id: 5,
//       name: "Library Stool Chair",
//       image: "/Image 5.png",
//       price: 35,
//     },
//     {
//       id: 6,
//       name: "Library Stool Chair",
//       image: "/Image 6.png",
//       price: 20,
//     },
//     {
//       id: 7,
//       name: "Library Stool Chair",
//       image: "/Image 7.png",
//       price: 20,
//     },
//     {
//       id: 8,
//       name: "Library Stool Chair",
//       image: "/Image 8.png",
//       price: 20,
//     },
//   ];

return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              // className=" bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-300
              // border-2 border-blue-500"
            // onMouseEnter={() => setActiveProduct(product.id)}
              // onMouseLeave={() => setActiveProduct(null)}
            >
            {product.image && ( // Assuming images is the correct field name
                          <Image
                            src={urlFor(product.image).url()}
                            alt={'chair'}
                            width={200}
                            height={200}
                          />
               )}     
              <h3   className="text-lg font-sans text-gray-400 hover:text-[#029FAE]">
              {product.title} </h3>
              <p className="text-black"> ${product.price}</p>
              {/*  " Cart" button here */}
              <button className="flex justify-end">
               <LuShoppingCart className="hover:text-[#029FAE]  text-xs   md:text-xl  " />
              
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
