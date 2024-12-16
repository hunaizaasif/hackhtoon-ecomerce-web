"use client"
// import Image from 'next/image';
import { useState } from 'react';


function Cart() {
  const products = [
    {  id: 1,
      image: "/Image 3.png", // Replace with actual image paths
      price: 199,
      quantity: 1,
      color: "Amber/Steel/Glass/White",
    },
    {
      id: 2,
      name: "Library Stool Chair",
      image: "/product2.jpg", 
      price: 399,
      quantity: 1,
      color: "Amber/Steel/Black/Blue", 
    },
  ] ;
  const [cartItems, setCartItems] = useState(products); // Assuming you have initial cart items

  const handleQuantityChange = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    ); 
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const subtotal = calculateSubtotal();

  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold mb-4">Bag</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cartItems.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex">
                  <Image 
                    src="" 
                    alt=""
                    width={100} 
                    height={100} 
                    objectFit="cover" 
                    className="rounded-lg mr-4" 
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-500">Color: {item.color}</p>
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <button 
                    className="text-gray-500 hover:text-gray-700 mr-2"
                    onClick={() => 
                      handleQuantityChange(item.id, Math.max(item.quantity - 1, 1)) 
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button 
                    className="text-gray-500 hover:text-gray-700 ml-2"
                    onClick={() => 
                      handleQuantityChange(item.id, item.quantity + 1) 
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-1/3 md:ml-8">
          <h2 className="text-2xl font-bold mb-4">Summary</h2>
          <div>
            <p>Subtotal:</p>
            <p>Estimated Delivery & Handling:</p>
          </div>
          <hr className="my-4" />
          <p className="font-bold">Total:</p>
          <p className="font-bold">${subtotal.toFixed(2)}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Member Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;