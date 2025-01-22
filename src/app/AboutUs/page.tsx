import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* About Us Section */}
      <div className="flex flex-col md:flex-row gap-8 mb-8"> {/* Added flex container */}
        <div className="bg-[#007580] text-white p-6 md:w-1/2"> {/* Teal div with width */}
          <h1 className="text-3xl font-bold mb-2">About Us - Comforty</h1>
          <p className="mb-4">
            At Comforty, we believe that the right chair can transform your
            space and elevate your comfort. Specializing in ergonomic design,
            premium materials, and modern aesthetics, we craft chairs that
            seamlessly blend style with functionality.
          </p>
          <button className="bg-white text-[#007580] py-2 px-4 rounded hover:bg-teal-100">
            New collection
          </button>
        </div>
        <div className="md:w-1/2"> {/* Image div with width */}
          <Image src="/Image 1.png" alt="Chair" width={500} height={400} objectFit="contain" className="mx-auto"/> {/* Increased image size */}
        </div>
      </div>


      <h2 className="flex justify-center text-2xl font-bold mb-4 mt-20">What Makes Our Brand Different</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 mt-5 text-[#007580] bg-[#F9F9F9]">
        {/* ... (rest of your code for features and products remains the same) */}
          {[
          { icon: '/Delivery.png', title: 'Next Day Delivery', description: 'Order before 3pm and get it tomorrow.'},
          { icon: '/Checkmark--outline.png', title: 'Made by Artisans', description: 'Handmade with passion and craftsmanship.' },
          { icon: '/Purchase.png', title: 'Unbeatable Prices', description: 'Top quality at competitive prices.' },
          { icon: '/Sprout.png', title: 'Recycled Packaging', description: 'Sustainable practices for a greener footprint.' },
        ].map((feature, index) => (
          <div key={index} className="feature text-center">
            <Image src={feature.icon} alt={feature.title} width={24} height={24} objectFit="contain" className="mx-auto mt-8" />
            <h3 className="font-semibold mt-3 mb-4">{feature.title}</h3>
            <p className="text-sm mb-3">{feature.description}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">Our Popular Products</h2>
      <div className="products grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { image: '/Image 14.jpg', name: 'The Poplar Suede Sofa', price: '$599.00', width: 630, height: 375, objectFit: 'contain' },
          { image: '/image 12.jpg', name: 'The Dandy Chair', price: '$599.00' },
          { image: '/image 13.jpg', name: 'The Dandy Chair', price: '$99.00' },
        ].map((product, index) => (
          <div key={index} className="product text-center">
            <Image src={product.image} alt={product.name} width={300} height={375} objectFit="contain" className="mx-auto" />
            <h3 className="font-semibold mt-2">{product.name}</h3>
            <p className="text-sm">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;