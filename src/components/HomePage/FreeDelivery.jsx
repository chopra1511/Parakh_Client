import React from 'react'
import shipping_boy from "/assets/shipping-boy.png";
import delivery from "/assets/delivery-truck.gif";

const FreeDelivery = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row justify-start items-center md:gap-10 w-full  lg:w-[75%] xl:w-[70%] p-5 md:p-10">
        <div>
          <img src={shipping_boy} alt="" className="w-48 md:w-60" />
        </div>
        <div className="flex items-center w-full sm:w-[60%] xl:w-[53%]">
          <h1
            className="min-[320px]:text-[14px] min-[375px]:text-[18px] min-[390px]:text-[18px]
          min-[428px]:text-[21px] md:text-[22px] xl:text-[28px] font-Lemon font-medium text-center
           whitespace-nowrap overflow-hidden animate-typing"
          >
            Free Shipping Above{" "}
            <span className="text-[#f2707f] font-bold">₹999</span>
          </h1>
          <img src={delivery} alt="" className="w-16 mix-blend-darken" />
        </div>
      </div>
    </div>
  );
}

export default FreeDelivery
