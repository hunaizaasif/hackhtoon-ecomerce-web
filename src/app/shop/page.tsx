import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Hero from '../Components/Hero';
import Image from 'next/image';
import FeatureProduct from '../Components/FeatureProduct';

// import { allProducts } from '@/sanity/lib/quries';

interface Product {
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

// Fetch products from Sanity

async function fetchProducts(): Promise<Product[]> {
  const query = `*[_type == "product"]{
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

const Shop = async () => {
  const products = await fetchProducts();

  return (
    <div className="bg-gray-50">
      <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
        {/* Header Section */}
         <div className="bg-[#faf4f4]">
          <Hero />
        </div> 

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
                <p className="text-lg font-medium text-gray-800">{product.name}</p>
                {/* Product Price */}
                <h3 className="text-xl font-semibold text-gray-900 mt-2">${product.price}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Sections */}
          <div className="justify-center mx-auto">
          <FeatureProduct/>
        </div>
        {/* <Field /> */}
      </div> 
    </div>
  );
};

export default Shop;
