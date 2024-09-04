import React from "react";
import trending from "/assets/trending.gif";
import ring from "/assets/ring.gif";
import necklace from "/assets/necklace.gif";
import OfficeEarring from "/assets/OfficeEarring.gif";
import bracelet from "/assets/bracelet.gif";
import dreamyEarrings from "/assets/dreamyEarrings.gif";
import Earings from "/assets/Earings.gif";

const CategorySlider = () => {

  return (
    <div className="categorySlider">
      <div className="flex gap-10 overflow-x-auto py-10 px-10 xl:px-20 hide-scrollbar">
        <div className="flex flex-col items-center w-32 lg:w-40 flex-shrink-0  cursor-pointer transition ease-in-out duration-600 hover:-translate-y-1 hover:scale-110">
          <img src={trending} alt="" className="w-16 mix-blend-darken" />
          <h1 className="mt-2 text-sm lg:text-base font-medium font-Poppins text-center">
            Trending
          </h1>
        </div>

        <div className="flex flex-col items-center w-32 lg:w-40 flex-shrink-0  cursor-pointer transition ease-in-out duration-600 hover:-translate-y-1 hover:scale-110">
          <img src={dreamyEarrings} alt="" className="w-16 mix-blend-darken" />
          <h1 className="mt-2 text-sm lg:text-base font-medium font-Poppins text-center">
            Dreamy Earrings
          </h1>
        </div>

        <div className="flex flex-col items-center w-32 lg:w-40 flex-shrink-0  cursor-pointer transition ease-in-out duration-600 hover:-translate-y-1 hover:scale-110">
          <img src={Earings} alt="" className="w-16 mix-blend-darken" />
          <h1 className="mt-2 text-sm lg:text-base font-medium font-Poppins text-center">
            Earrings
          </h1>
        </div>

        <div className="flex flex-col items-center w-32 lg:w-40 flex-shrink-0  cursor-pointer transition ease-in-out duration-600 hover:-translate-y-1 hover:scale-110">
          <img src={ring} alt="" className="w-16 mix-blend-darken" />
          <h1 className="mt-2 text-sm lg:text-base font-medium font-Poppins text-center">
            Rings
          </h1>
        </div>

        <div className="flex flex-col items-center w-32 lg:w-40 flex-shrink-0  cursor-pointer transition ease-in-out duration-600 hover:-translate-y-1 hover:scale-110">
          <img src={necklace} alt="" className="w-16 mix-blend-darken" />
          <h1 className="mt-2 text-sm lg:text-base font-medium font-Poppins text-center">
            Necklace
          </h1>
        </div>

        <div className="flex flex-col items-center w-32 lg:w-40 flex-shrink-0  cursor-pointer transition ease-in-out duration-600 hover:-translate-y-1 hover:scale-110">
          <img src={bracelet} alt="" className="w-16 mix-blend-darken" />
          <h1 className="mt-2 text-sm lg:text-base font-medium font-Poppins text-center">
            Bracelets
          </h1>
        </div>

        <div className="flex flex-col items-center w-32 lg:w-40 flex-shrink-0  cursor-pointer transition ease-in-out duration-600 hover:-translate-y-1 hover:scale-110">
          <img src={OfficeEarring} alt="" className="w-16 mix-blend-darken" />
          <h1 className="mt-2 text-sm lg:text-base font-medium font-Poppins text-center">
            9 to 5 Earring
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CategorySlider;
