import rings from "/assets/rings.png";
import pearl from "/assets/pearl.png";
import earrings from "/assets/earrings.png";
import diamond from "/assets/diamond.png";
import { useNavigate } from "react-router";

const ProductSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col justify-center my-20 md:my-40 animate-fadeIn relative">
        <div className="py-5 flex flex-col items-center">
          <h1 className="text-xl w-fit md:text-2xl font-Pacifico text-[#f2707f]">
            Select by
          </h1>
          <h1 className="text-2xl w-fit md:text-3xl font-Lemon font-medium">
            Category
          </h1>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full sm:w-[70%] lg:w-[40%] md:h-56 xl:h-60 m-5 overflow-hidden drop-shadow-xl rounded-3xl bg-gradient-to-t from-[#ffdde1] to-[#ee9ca7] flex justify-between items-center">
            <div className="text-left pl-10">
              <h1 className="text-md md:text-xl text-white font-Quicksand">
                Beautiful
              </h1>
              <h1 className="text-xl md:text-2xl text-white font-Poppins font-semibold">
                Wedding Rings
              </h1>
              <button
                onClick={() => {
                  navigate("/Parakh_client/rings");
                }}
                className="mt-10 text-white border-b-2 hover:text-black hover:border-black hover:font-semibold"
              >
                Shop Now
              </button>
            </div>
            <img
              src={rings}
              alt=""
              className="w-52 md:w-60 xl:w-72 cursor-pointer transition ease-in-out duration-700 hover:-translate-y-1 hover:scale-110"
            />
          </div>

          <div className="w-full sm:w-[70%] lg:w-[40%] md:h-56 xl:h-60 m-5 overflow-hidden drop-shadow-xl rounded-3xl bg-gradient-to-t from-[#ffdde1] to-[#ee9ca7] flex justify-between items-center">
            <img
              src={earrings}
              alt=""
              className="w-52  md:w-60 xl:w-72 cursor-pointer transition ease-in-out duration-700 hover:-translate-y-1 hover:scale-110"
            />
            <div className="text-right pr-10">
              <h1 className="text-md md:text-xl text-white font-Quicksand">
                Earring
              </h1>
              <h1 className="text-xl md:text-2xl text-white font-Poppins font-semibold">
                Tangerine Floral Earring
              </h1>
              <button
                onClick={() => {
                  navigate("/Parakh_client/earrings");
                }}
                className="mt-10 text-white border-b-2 hover:text-black hover:border-black hover:font-semibold"
              >
                Shop Now
              </button>
            </div>
          </div>

          <div className="w-full sm:w-[70%] lg:w-[40%] md:h-56 xl:h-60 m-5 overflow-hidden drop-shadow-xl rounded-3xl bg-gradient-to-t from-[#ffdde1] to-[#ee9ca7] flex justify-between items-center">
            <div className="text-left pl-10">
              <h1 className="text-md md:text-xl text-white font-Quicksand">
                New Arrivals
              </h1>
              <h1 className="text-xl md:text-2xl text-white font-Poppins font-semibold">
                Pearl Necklaces
              </h1>
              <button
                onClick={() => {
                  navigate("/Parakh_client/necklaces");
                }}
                className="mt-10 text-white border-b-2 hover:text-black hover:border-black hover:font-semibold"
              >
                Shop Now
              </button>
            </div>
            <img
              src={pearl}
              alt=""
              className="w-52 h-48  md:w-60 md:h-56 xl:w-72 xl:h-60 cursor-pointer transition ease-in-out duration-700 hover:-translate-y-1 hover:scale-110"
            />
          </div>

          <div className="w-full sm:w-[70%] lg:w-[40%] md:h-56 xl:h-60 m-5 overflow-hidden drop-shadow-xl rounded-3xl bg-gradient-to-t from-[#ffdde1] to-[#ee9ca7] flex justify-between items-center">
            <img
              src={diamond}
              alt=""
              className="w-52 md:w-64 xl:w-72 cursor-pointer transition ease-in-out duration-700 hover:-translate-y-1 hover:scale-110"
            />
            <div className="text-right pr-10">
              <h1 className="text-md md:text-xl text-white font-Quicksand">
                New Design
              </h1>
              <h1 className="text-xl md:text-2xl text-white font-Poppins font-semibold">
                Diamond Jewelry
              </h1>
              <button className="mt-10 text-white border-b-2 hover:text-black hover:border-black hover:font-semibold">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSection;
