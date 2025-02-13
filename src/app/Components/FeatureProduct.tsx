'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaShoppingCart } from "react-icons/fa";
interface IProduct {
  _id: any;
  id: string;
  title: string;
  inventory: number;
  tags: string[];
  badge: string | null;
  imageUrl: string;
  price: number;
  types: string[];
  priceWithoutDiscount: string | null;
  description: string;
  slug: {
    current: string;
  };
}



const FeatureProduct = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://giaic-hackathon-template-08.vercel.app/api/products");
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await res.json();
        setProducts(data);
        setError(null);
      } catch (error) {
        console.error('Error loading featured products:', error);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <div className="animate-pulse">
                <div className="bg-gray-200 aspect-square rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Featured Products</h2>
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.slice(0, 4).map((product) => (
          <div key={product._id} className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-300">
          
            <Link href={`/products/${product._id}`}>
              {product.badge && (
                <span className="inline-block bg-blue-500 text-white px-2 py-1 rounded-full text-sm mb-2">
                  {product.badge}
                </span>
              )}
              <div className="relative aspect-square mb-4">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  width={400}
                  height={400}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <div className="flex justify-between items-center">
                <p className="text-gray-700">${product.price.toFixed(2)}</p>
                <button 
                  className="bg-[#029FAE] text-white p-2 rounded-full hover:bg-[#028694] transition-colors"
                  aria-label="Add to cart"
                  onClick={(e) => {
                    e.preventDefault();
                    // Add to cart functionality can be implemented here
                  }}
                >
                  <FaShoppingCart className="w-5 h-5"/>
                </button>
                
              </div>
              </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureProduct;
