"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import Link from 'next/link';

interface Product {
  _id: string;
  title: string;
  slug: { current: string };
  image: { asset: { url: string } };
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await client.fetch(
          groq`*[_type == "product"] {
            _id,
            title,
            slug,
            image {
              asset->{
                url
              }
            }
          }`
        );
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product._id} className="border p-4 rounded-lg shadow-md">
            <Link href={`/product/${product.slug.current}`}>
              {/* <a> */}
                <Image
                  src={product.image?.asset?.url}
                  alt={product.title}
                  width={200}
                  height={200}
                  objectFit="cover"
                  className="rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold">{product.title}</h3>
              {/* </a> */}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

// Remove the unused fetchData function
