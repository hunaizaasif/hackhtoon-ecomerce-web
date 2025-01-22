







//  "cluient"; // Important for client-side components
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// const ProductPage = () => {
//   const router = useRouter();
//   const { id } = router.Approute
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (id) { // Check if id is available
//       const fetchProduct = async () => {
//         try {
//           const res = await fetch(`https://giaic-hackathon-template-08.vercel.app/api/products/${slus}`);
//           if (!res.ok) {
//             throw new Error(`HTTP error! status: ${res.status}`);
//           }
//           const data = await res.json();
//           setProduct(data);
//         } catch (err) {
//           setError(err);
//         } finally {
//           setLoading(false);
//         }
//       };

//       fetchProduct();
//     }
//   }, [id]); // The dependency array ensures this runs when the id changes

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;
//   if (!product) return <div>Product not found</div>;

//   return (
//     <div>
//       <h1>{product.name}</h1>
//       <p>{product.price}</p>
//       {/* ... other product details ... */}
//     </div>
//   );
// };

// export default ProductPage;





// // import React from 'react';

// // const products = async  (props: { params: { id: string } }) => {
// //     console.log(props);
    
// //     const url = await fetch (`https://giaic-hackathon-template-08.vercel.app/api/products
// // /${props.params.id}`)
// //        console.log("products" );
       
// //          const response = await url.json()
  
// //     return (
// //       <h1 className='text text-7xl'>
  
// //         {response .id}   <br />
// //         {response .name} <br />
// //         {response.price}   <br />
        
        
      
// //         </h1>
    
      

// //   );
// // }

// // export default products;



