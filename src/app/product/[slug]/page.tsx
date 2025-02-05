
// import { client } from "@/sanity/lib/client";
// import { Products } from "../../../../types/products";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import { groq } from "next-sanity";




// interface ProductProps {
//   params: { slug: string };
// } 

// async function fetchData(slug: string): Promise<Products | null> {
//   return client.fetch(groq`*[_type == "products" && slug.current == $slug]{
//     _id,
//     title,
//      price,
//      priceWithoutDiscount,
//       badge,
//      image,
//     tags,

//  }`, { slug });
  
//   }

 
 
// export default async function ProductPage({ params }: ProductProps) {
//   const { slug } = params;
//   const product = await fetchData(slug);

//   return (
//     <div className="max max-w-5xl mx-auto px-4 ">
//       {product ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             {product.image && (
//               <Image
//                 src={urlFor(product.image).url()}
//                 alt={product.title}
//                 width={500}
//                 height={500}
//               />
//             )}
//           </div>
//           <div>
//             <h1 className="text-4xl font-semibold mb-4">{product.title}</h1>
//             <p className="text-2xl font-semibold mb-4">{product.price}</p>
//             <p className="text-2xl font-semibold mb-4">{product.priceWithoutDiscount}</p>
//             <p className="text-2xl font-semibold mb-4">{product.badge}</p>
//             <button className="bg-[#029FAE] text-white px-4 py-2 rounded-md">
//               Add to Cart
//             </button>
//             <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
//           </div>
//         </div>
//       ) : (
//         <p>Product not found</p>
//       )
//       }
//     </div>
//   );
// }

import { client } from "@/sanity/lib/client"
import { Products } from "../../../../types/products"

 const page = async ({params :{id}}:{params :{id:string}}) =>{
  
  const query = `*[_type == "products"  &&  _id == $id]{
  title,
  "id": _id,
  price,
  description,
  categories,
  "image" : image.asset->ref,
  
}[0]`


const Products : Products | null = await client.fetch(query , {id})
if(!Products){
  return(
<div>
    <h1>Product not found</h1>
  </div>
  )
}
return (
  <div key={Products._id}>
    <h2>{Products.title}</h2>

  </div>
)
}


export default page 


























// import { client } from "@/sanity/lib/client";
// import { Products } from "../../../../types/products";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import { groq } from "next-sanity";
// import OurProduct from "@/app/Components/OurProduct";
// import { productSchema } from "@/sanity/schemaTypes/products";
// import FeatureProduct from "@/app/Components/FeatureProduct";


// interface  Product {
//     //  slug : string;
//     _id: string;
//      title : string;
//      price : number;
//      imageUrl : string;
//      stock : number
// }

// interface ProductProps {
//     params : Promise<{slug: string}>
//     }


// async function fetchData(slug: string): Promise<Products | null> {
//     return client.fetch(groq`*[_type == "products" && slug.current == $slug][0]{
//         _id,
//         title,
//         price,
//         priceWithoutDiscount,
//         badge,
//         image,
//         tags,
//         slug
//     }`, { slug });
// }
    
// export default async function Product({ params }: ProductProps) {
//     const slug = (await params).slug;
//     const product = await fetchData(slug);

// return (
//     <div className="max max-w-5xl mx-auto px-4 ">
//         {product ? (

//             <div className="grid grid-col-1  md:grid-cols-2 gap-6 "> 
//                 <div>
//                     {product.image && (
//                         <Image src={urlFor(product.image).url()} alt={product.title} width={500} height={500} />
//                     )}
//                 </div>
//                 <div>
//                     <h1 className="text-4xl font-semibold mb-4">{product.title}</h1>
//                     <p className="text-2xl font-semibold mb-4">{product.price}</p>
//                     <p className="text-2xl font-semibold mb-4">{product.priceWithoutDiscount}</p>
//                     <p className="text-2xl font-semibold mb-4">{product.badge}</p>
//                     <button className="bg-[#029FAE] text-white px-4 py-2 rounded-md">Add to Cart</button>
//                     <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
//                 </div>
//             </div>
//         ) : (
//             <p>Product not found</p>
//         )}
//     </div>
// );
// }

