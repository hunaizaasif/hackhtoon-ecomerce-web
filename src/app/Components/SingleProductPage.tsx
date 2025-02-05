// import Link from 'next/link';
import React from 'react'

const SingleProductPage = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
     {/* <Link */}
      {/* key={gallery._id}   */}
       {/* href={`/product/${gallery._id}`}>  */}
      <img
        className="object-cover object-center rounded"
        alt="library stool chair"
        src="/Image 2.png"
      />
      {/* </Link> */}
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      Library Stool Chair
      </h1>
      <p className='bg-[#029FAE] rounded-2xl text-[#FFFFFF] px-2 py-1'>$20.00 USD</p>
      {/*  divider */}
      <div className="divider mt-4 mb-3 ml-9"></div>
      <p className="mb-8 leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing
      </p>
      
        
        <button className="inline-flex text-white bg-[#029FAE] border-0 py-2 px-6 focus:outline-none hover:bg-[#029FAE]  rounded text-lg">
        Add To cart
        </button>
      </div>
      
      
    </div>
  
</section>

      
    
  )
}

export default SingleProductPage;