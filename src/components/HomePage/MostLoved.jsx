import React from "react";
import diamond from "/assets/diamond.png";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
// import { addItemToCart } from "../../store/reducers/cartSlice";

const MostLoved = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const items = products.filter((item) => item.mostLoved === true);

  //  const cartHandler = (id) => {
  //    products.map((product) => {
  //      if (product.id === id) {
  //        dispatch(addItemToCart(product));
  //      }
  //    });
  //  };

  const wishlistHandler = (id) => {
    console.log(id);
  };
  return (
    <>
      <div className="my-10 md:my-40 bg-gradient-to-b from-[#fff] via-[#ffdde1]">
        <div className="py-5 flex flex-col items-center">
          <h1 className="text-xl w-fit md:text-2xl font-Pacifico text-[#f2707f]">
            Customer's choice
          </h1>
          <h1 className="text-2xl w-fit md:text-3xl font-Lemon font-medium">
            Most Loved
          </h1>
        </div>

        <div className="flex gap-5 md:gap-10 overflow-x-auto py-10 px-5 lg:px-20 hide-scrollbar">
          {items.slice(0, 5).map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 drop-shadow-xl bg-white cursor-pointer overflow-hidden"
            >
              <div className="px-4 pt-4">
                <div className="relative w-48 h-48 md:w-52 md:h-52 flex justify-center items-center bg-gray-100 overflow-hidden group">
                  <img
                    src={item.images}
                    alt=""
                    className="transition ease-in-out duration-700 group-hover:scale-110 md:group-hover:scale-150 mix-blend-darken"
                  />
                  <div className="w-full absolute bottom-0 py-2 flex justify-center gap-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <IconButton>
                      <i className="fi fi-sr-shopping-cart-add text-white text-xl pt-1 px-2 rounded-full"></i>
                    </IconButton>
                    <IconButton onClick={() => wishlistHandler(item.id)}>
                      <i
                        className={`fi fi-sr-heart  text-xl pt-1 px-2 rounded-full ${
                          item.wishlist ? "text-[#FF0000]" : "text-white"
                        }`}
                      ></i>
                    </IconButton>
                  </div>
                </div>
              </div>
              <div className="p-2 text-center">
                <h1 className="text-md lg:text-md font-Poppins font-semibold">
                  {item.name}
                </h1>
                <h1 className="text-sm lg:text-md font-Poppins font-medium">
                  ₹{item.price}
                </h1>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center py-5">
          <Button
            variant="contained"
            size="large"
            type="submit"
            className="button-shiny-effect"
            onClick={() => {
              navigate("/Parakh_client/most-loved");
            }}
            sx={{
              borderRadius: 10,
              fontFamily: "Poppins",
              textTransform: "capitalize",
              backgroundColor: "#f2707f",
              ":hover": {
                backgroundColor: "#F7475C",
              },
            }}
          >
            View All
          </Button>
        </div>
      </div>
    </>
  );
};

export default MostLoved;
