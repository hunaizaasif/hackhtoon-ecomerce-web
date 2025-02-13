import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';


interface Product {
  title: string
  badge: any;
  category: string;
  id: string;
  price: number;
  description: string;
  imagePath: string;
  discountPercentage: number;
  isFeaturedProduct: number;
  name: string;
  image: any;
}



async function fetchProducts(): Promise<Product[]> {
  const query = `*[_type == "products"]{
    category,
    _id,
    price,
    description,
    imagePath,
    discountPercentage,
    isFeaturedProduct,
    name,
    "image": image.asset._ref
  }`;
  const products = await client.fetch(query);
  return products;
}

const products = async () => {
  const products = await fetchProducts();

  return (
    <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
        {/* Header Section */}
         <div className="bg-[#faf4f4]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product: Product, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              {/* Product Image */}
              <Image
                src={urlFor(product.image).url()} // Convert ImageUrlBuilder to string URL
                alt={product.name}
                height={300}
                width={300}
                className="h-[250px] w-full object-cover"
              />
              <div className="p-4 text-center">
                {/* Product Name */}
                <p className="text-lg font-medium text-gray-800">{product.title}</p>
                {/* Product Price */}
                <h3 className="text-xl font-semibold text-gray-900 mt-2">${product.price}</h3>
                </div>
            </div>
          ))}
        </div>
        </div> 
    </div>
  );
};

export default products;




      
        
        
        

    

  
            

 
  
          
      
      
      
