import pinkHeart from "/assets/pinkHeart.png";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { useDispatch, useSelector } from "react-redux";
import FooterNav from "../NavBar/FooterNav";
import { Button, IconButton } from "@mui/material";
import NavBar from "../NavBar/NavBar";
import { useNavigate } from "react-router";
import {
  getUserWishlist,
  removeFromWishlist,
} from "../../store/reducers/productSlice";
import { addToCart, getUserCart } from "../../store/reducers/cartSlice";
import { useEffect } from "react";

const Wishlist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { wishlist } = useSelector((state) => state.products);
  console.log(wishlist);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!wishlist || wishlist.length === 0) {
      dispatch(getUserWishlist());
    }
  }, []);

  const addCartHandler = (id) => {
    const product = wishlist.find((product) => product.product._id === id);
    if (product) {
      dispatch(addToCart(product.product))
        .then(() => {
          dispatch(getUserCart());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const wishlistHandler = (id) => {
    const isProductInWishlist = wishlist.some(
      (item) => item.product._id === id
    );
    if (isProductInWishlist) {
      dispatch(removeFromWishlist(id))
        .then(() => {
          dispatch(getUserWishlist());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="h-screen bg-[#f4f4f4]">
      <div className="fixed top-0 right-0 left-0 z-20">
        <NavBar />
      </div>

      <div className="h-full pt-16">
        <div
          className={`${
            wishlist?.length === 0 ? "h-full" : ""
          } flex items-center relative px-5 lg:px-20 overflow-hidden`}
        >
          <div className="w-full flex justify-center items-center text-center">
            <div className="z-10 relative py-10 lg:py-20 px-10 lg:px-20">
              <h1 className="text-xl md:text-2xl font-Pacifico text-[#f2707f]">
                {wishlist?.length === 0 ? "It seems nothing is here." : "Your"}
              </h1>
              <h1 className="text-3xl md:text-4xl font-Lemon font-semibold">
                {wishlist?.length === 0 ? "Make a Wish!" : "Wishlist"}
              </h1>
              {wishlist?.length === 0 && (
                <div>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate("/Parakh_client/all-products")}
                    className="button-shiny-effect"
                    sx={{
                      marginTop: 5,
                      borderRadius: 10,
                      fontFamily: "Poppins",
                      textTransform: "capitalize",
                      backgroundColor: "#f2707f",
                      ":hover": {
                        backgroundColor: "#F7475C",
                      },
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    Add Now
                  </Button>
                </div>
              )}
            </div>
            <div className="absolute rotate-45 -top-20 -right-20 lg:-top-44 lg:-right-44 z-0">
              <div className="p-10 lg:p-20 rounded-full bg-white/40">
                <div className="p-10 lg:p-20 rounded-full bg-white">
                  <img
                    src={pinkHeart}
                    alt="Emote"
                    className="w-24 lg:w-56 opacity-50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {wishlist?.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-5 pb-40 py-5 px-5 lg:px-10 xl:px-20">
            {wishlist.map((product, index) => (
              <div
                key={index}
                className="mb-5 md:mb-5 drop-shadow-xl w-full cursor-pointer bg-white relative"
              >
                {/* <div className="p-2 w-fit rounded-full bg-[#C2001A] flex justify-center drop-shadow-xl absolute -top-3 left-36 z-10">
                  <div className="p-[10px] bg-[#ff0000] rounded-full drop-shadow"></div>
                </div> */}
                <div className="px-4 pt-4 shadow-inner">
                  <div className="relative w-full flex flex-col justify-center items-center h-32 md:h-48 lg:h-60 xl:h-72 bg-gray-100 overflow-hidden group">
                    <img
                      src={product.product.images}
                      alt=""
                      className="w-full object-cover transition ease-in-out duration-700 group-hover:scale-110 md:group-hover:scale-150 mix-blend-darken"
                    />
                    <div className="w-full absolute bottom-0 py-2 flex justify-center gap-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <IconButton
                        onClick={() => addCartHandler(product.product._id)}
                      >
                        <i className="fi fi-sr-shopping-cart-add text-white text-xl pt-1 px-2 rounded-full"></i>
                      </IconButton>
                      <IconButton
                        onClick={() => wishlistHandler(product.product._id)}
                      >
                        <i
                          className={`fi fi-sr-heart text-xl pt-1 px-2 rounded-full ${
                            product.isWishlist
                              ? "text-[#FF0000]"
                              : "text-white"
                          }`}
                        ></i>
                      </IconButton>
                    </div>
                  </div>
                </div>
                <div className="p-2 text-center">
                  <h1 className="text-md font-Poppins font-semibold">
                    {product.product.name}
                  </h1>
                  <h1 className="text-sm font-Poppins font-medium">
                    ₹{product.product.price}
                    {product.product.discountedPrice && (
                      <span className="pl-2 line-through text-slate-600 text-[12px]">
                        ₹{product.product.discountedPrice}
                      </span>
                    )}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="fixed bottom-0 right-0 left-0 xl:hidden">
        <FooterNav />
      </div>
    </div>
  );
};

export default Wishlist;
