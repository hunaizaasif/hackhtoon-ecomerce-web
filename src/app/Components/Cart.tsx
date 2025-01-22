import React from "react";
import CartCard from "./CartCard";

const Cart = () => {
  return (
    <div className="MT-[50PX] MB-[100]PX">
      <div className="grid lg:grid-cols-3 gride-cols-1">
        {/*  Items */}
        <div className="col-span-2">
          <CartCard
            src={"/Image 3.png"}
            title={"Library Stool Chair"}
            content="Ashen Slate/Cobalt Bliss"
            size={"L"}
            price={99}
            quantity={1}
          />

          
          {/*  divider */}
          <div className="divider mt-0 mb-1 ml-9"></div>
          
          <CartCard
            src={"/Image 5.png"}
            title={"Library Stool Chair"}
            content="Ashen Slate/Cobalt Bliss"
            size={"L"}
            price={99}
            quantity={1}
          />
          {/*  divider */}
          <div className="divider mt-0 mb-1 ml-9"></div>
        </div>
        {/*  summary */}
        <div className=" p-5" rounded-x1>
          {/*  heading */}
          <h2 className="scroll-m-20 text-lg font-bold tracking-tight ">
            Summary
          </h2>

          {/*  pricing */}
          <div className="text-lg font-normal tracking-tight ">
            {/* product pricing */}
            <div className="flex items-center justify-between capitalize">
              <h2>Subtotal</h2>
              <p>$198.00</p>
            </div>
            {/* dilevery charges */}

            <div className="flex items-center justify-between capitalize">
              <h2>Estimated Delivery & Handling</h2>
              <p>Free</p>
            </div>
            {/*  divider */}
            <div className="divider mt-0 mb-1"></div>

            {/* Eatimate Total */}
            <div className="flex items-center justify-between ">
              <h2> Total</h2>
              <p>$198.00</p>
            </div>
            {/*  divider */}
            <div className="divider mt-0 mb-1"></div>
            {/* Button cheakout */}
            <div className="flex items-center justify-center w-full">
              <button className="rounded-full px-11 py-4 bg-[#029FAE] hover:transparent duration-300 text-[#FFFFFF] hover:text-[#029FAE] scroll-my-20 text-xs font-semibold  tracking-tight hover:shadow-md">
                Memsber Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
