import Image from 'next/image';
import Link from 'next/link';
// import { LuShoppingCart } from 'react-icons/lu';



    const OurProduct  = async () => {
      const res = await fetch("https://giaic-hackathon-template-08.vercel.app/api/products");
      const product : IProduct[] = await res.json();

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-6">Our Product</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {product.slice(1,9).map((product, index)=> (
        <div key={index} className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-300">
          <Link href={`/product/${product.id}`}>
          <p className="text-gray-500 mb-4 ">{product.badge}</p>
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={600}
            height={600}
            // objectFit="cover"
            className="rounded-lg mb-4" />
          <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
          <p className="text-gray-700">${product.price.toFixed(2)}</p>
          {/* <div className="flex justify-end items-center"> */}
          {/* <button className="flex justify-between items-center"> */}
    {/* <LuShoppingCart className=" hover:text-[#029FAE] text-xs md:text-xl" /> */}
   {/* </button> */}
  {/* </div> */}
          </Link>
        </div>
        
      ))}
      </div>
</div>
  );
};


interface IProduct {
  slug: {
    current : string
  },
  id : string,
  title : string,
  inventory : number,
    tags: string [],
    badge : null | string,
    imageUrl : string,
    price : number,
    types: string[],
    priceWithoutDiscount: null | string,
    description : string,



      
}

export default OurProduct;


