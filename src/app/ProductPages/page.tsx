"use client";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { Products } from "../../../types/products"; // Assuming Product is the correct type
import { four} from "@/sanity/lib/queries";
import Link from "next/link";



const ProductPages = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Products[] = await client.fetch(four);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
        // Handle errors gracefully, e.g., display an error message to the user
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h3 className="text-4xl font-semibold mb-4 ">Featured Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
          >
          <Link href={`/product/${product.slug?.current}`}>
            {product.image && ( // Assuming images is the correct field name
              <Image
                src={urlFor(product.image).url()}
                alt={"chair"}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-md"
              />
            )}
            <h2 className="text-lg font-sans text-[#029FAE] mt-4">
              {product.title}
            </h2>
            {/* <p>{product.price ? `$${product.price}` : "price not avaliable"}</p> */}
            
               {/* " Cart" button here
            <button className="flex  ">
              <LuShoppingCart className="hover:text-white hover:bg-[#029FAE]  text-xs   md:text-xl " />
            </button>*/}
             </Link>   
          </div> 
           
        ))}
        
      </div>
     
    </div>

  );
};
export default ProductPages;


// // import React from "react";
// import { useState , useEffect } from "react";
// import { client } from "@/sanity/lib/client";
// import { allProducts } from "@/sanity/lib/quries";
// // import products from "../products/[slug]/page";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import { products } from "../../../types/product";
// // import products from "../products/[slug]/page";
// // import { LuShoppingCart } from "react-icons/lu";

//  const ProductPages = (() => {

//   const [products, setProducts] = useState<products[]>([]);
//   useEffect(() => {
//     async function fetchedProduct() {
//       const fetchedProduct: products[] = await client.fetch(allProducts);
//       setProducts(fetchedProduct);

//     }
//     fetchedProduct();
//   }, []);

//   return (
//     <div>
//       {products.map((product) => (
//         <div key={product._id}>
//           {product.name}
//           {product.product}
//           {product.imges && (
//             <Image src={urlFor(product.imges).url()}
//               alt="image"
//               width={200}
//               height={200} />
//           )}

//         </div>
//       )

//       )}

//     </div>

//   );
// }

// )
// export default ProductPages;

// import { MdProductionQuantityLimits } from 'react-icons/md';
// const ProductPages = () => {

//   const [activeProduct, setActiveProduct] = useState(null);

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
//       image: "/Image 9.png",
//       price: 20,
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
//       image: "/Image 1.png",
//       price: 20,
//     },
//     {
//       id: 9,
//       name: "Library Stool Chair",
//       image: "/Image 5.png",
//       price: 20,
//     },
//     {
//       id: 10,
//       name: "Library Stool Chair",
//       image: "/Image 2.png",
//       price: 20,
//     },
//     {
//       id: 11,
//       name: "Library Stool Chair",
//       image: "/Image 3.png",
//       price: 20,
//     },
//     {
//       id: 12,
//       name: "Library Stool Chair",
//       image: "/Image 10.png",
//       price: 20,
//     },
//   ];

//   return (
//     <div>
//       <div className="container mx-auto px-4 py-8">
//         <h2 className="text-2xl font-bold mb-6">All Products</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {products.map((product: any) => (
//             <div
//               key={product.id}
//               className={`bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-300
//                ${activeProduct === product.id && "border-2 border-blue-500"}`}
//               onMouseEnter={() => setActiveProduct(product.id)}
//               onMouseLeave={() => setActiveProduct(null)}
//             >
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 width={200}
//                 height={200}
//                 objectFit="cover"
//                 className="rounded-lg mb-4"
//               />
//               <h3 className="text-lg font-sans text-gray-400 hover:text-[#029FAE]">
//                 {product.name}
//               </h3>
//               <p className="text-gray-500"> ${product.price.toFixed(2)}</p>
//               {/* Add "Add to Cart" button here */}
//               <button className="flex justify-center">
//                 {" "}
//                 <LuShoppingCart className="hover:text-[#029FAE]  text-xs   md:text-xl  " />
//                 Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPages;
