import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import FooterNav from "../NavBar/FooterNav";
import ShippingBadge from "../NavBar/ShippingBadge";
import { useDispatch, useSelector } from "react-redux";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, IconButton, Tooltip } from "@mui/material";
import { useNavigate } from "react-router";
import Footer from "../HomePage/Footer";
import {
  addToWishlist,
  getUserWishlist,
  removeFromWishlist,
} from "../../store/reducers/productSlice";
import { addToCart, getUserCart } from "../../store/reducers/cartSlice";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const { productDetails, products, wishlist } = useSelector(
    (state) => state.products
  );
  console.log(productDetails);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const inWishlist = wishlist.some(
    (item) => item.product._id === productDetails?._id
  );

   const addToCartHandler = () => {
     return dispatch(addToCart({ product: productDetails, quantity }))
       .then(() => {
         dispatch(getUserCart());
       })
       .catch((err) => {
         console.log(err);
       });
   };

   const payNowHandler = () => {
     addToCartHandler().then(() => {
       dispatch(getUserCart());
       navigate("/Parakh_client/cart");
     });
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
    } else {
      dispatch(addToWishlist(id))
        .then(() => {
          dispatch(getUserWishlist());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="bg-[#f4f4f4]">
      <div className="fixed top-0 right-0 left-0 z-20">
        <NavBar />
      </div>
      <div className="mt-16">
        <div>
          <IconButton onClick={() => navigate(-1)}>
            <i className="fi fi-rr-arrow-small-left pt-1 px-2"></i>
          </IconButton>
        </div>

        <div className="p-5 lg:px-20 xl:px-40">
          <div className="xl:flex xl:gap-10">
            <div className="xl:w-1/2 flex md:justify-center xl:items-center">
              <div className="my-5 lg:my-0 relative w-full h-96 lg:h-[585px] overflow-hidden rounded-xl">
                <img
                  src={productDetails.images}
                  alt=""
                  className="w-full rounded-xl absolute -top-24 lg:-top-44"
                />
              </div>
            </div>

            <div className="xl:w-1/2">
              <h1 className="text-lg font-Poppins font-semibold">
                {productDetails.name}
              </h1>
              <h1 className="text-base font-Poppins font-bold">
                ₹{productDetails.price}
                {productDetails.discount ? (
                  <span className="pl-2 line-through text-slate-600 text-[12px]">
                    ₹{productDetails.discount}{" "}
                  </span>
                ) : (
                  ""
                )}
              </h1>

              <div className="flex gap-1 items-center">
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <div key={index}>
                      <i
                        className={`fi ${
                          index < Math.floor(productDetails.rating.rate)
                            ? "fi-sr-star"
                            : "fi-rr-star"
                        } text-[12px] text-[#f2707f]`}
                      ></i>
                    </div>
                  ))}
                <h1 className="ml-2 text-[12px] font-Poppins font-medium">
                  {productDetails.rating.rate}
                </h1>
              </div>

              <div className="flex gap-10 mt-3 pb-5 border-b-2">
                <div className="flex gap-2 items-center text-gray-600">
                  <i className="fi fi-br-interrogation text-sm pt-1"></i>
                  <h1 className="text-sm font-Poppins">Ask a question</h1>
                </div>
                <div className="flex gap-2 items-center text-gray-600">
                  <i className="fi fi-bs-share text-sm pt-1"></i>
                  <h1 className="text-sm font-Poppins">Share</h1>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-center gap-10">
                <div className=" flex items-center justify-between w-1/2 md:w-32 xl:w-full rounded-md border-2">
                  <i
                    className="fi fi-rr-minus-small pt-1 pl-2 cursor-pointer"
                    onClick={() => {
                      setQuantity((prevQuan) =>
                        prevQuan > 1 ? prevQuan - 1 : 1
                      );
                    }}
                  ></i>
                  <h1 className="text-sm font-Poppins font-medium">
                    {quantity}
                  </h1>
                  <i
                    className="fi fi-rr-plus-small pt-1 pr-2 cursor-pointer"
                    onClick={() => {
                      setQuantity((prevQuan) => prevQuan + 1);
                    }}
                  ></i>
                </div>
                <div className="flex gap-5">
                  <Tooltip title="Add to Cart" placement="top">
                    <IconButton onClick={addToCartHandler}>
                      <i className="fi fi-sr-shopping-cart-add text-lg pt-1 px-2 text-[#f2707f]"></i>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist" placement="top">
                    <IconButton
                      onClick={() => wishlistHandler(productDetails._id)}
                    >
                      <i
                        className={`fi ${
                          inWishlist ? "fi-sr-heart" : "fi-br-heart"
                        } text-lg pt-1 px-2 text-[#f2707f]`}
                      ></i>
                    </IconButton>
                  </Tooltip>
                </div>
              </div>

              <div className="text-center text-white py-5">
                <Button
                  variant="contained"
                  size="large"
                  type="submit"
                  onClick={payNowHandler}
                  l̥
                  className="button-shiny-effect flex items-center gap-5"
                  sx={{
                    borderRadius: "10px",
                    width: "100%",
                    fontFamily: "Poppins",
                    textTransform: "capitalize",
                    backgroundColor: "#f2707f",
                    ":hover": {
                      backgroundColor: "#F7475C",
                    },
                  }}
                >
                  <h1 className="text-sm">BUY NOW</h1>
                  <i className="fi fi-rr-credit-card text-lg pt-1"></i>
                </Button>
              </div>

              <div className="border-y-2">
                <ShippingBadge />
              </div>

              <div className="mt-5">
                <div className="flex gap-2 items-center">
                  <i className="fi fi-rr-credit-card-buyer text-lg pt-1 text-[#f2707f]"></i>
                  <h1 className="text-sm font-Poppins font-medium text-gray-600">
                    Guranteed Safe Checkout
                  </h1>
                </div>
                <div className="flex gap-2 items-center">
                  <i className="fi fi-rr-shipping-fast text-lg pt-1 text-[#f2707f]"></i>
                  <h1 className="text-sm font-Poppins font-medium text-gray-600">
                    Estimate delivery times: 4-6 days (India).
                  </h1>
                </div>
              </div>

              <div className="mt-5 py-5 border-y-2 border-dashed">
                <div className="flex gap-2 items-center">
                  <i className="fi fi-rr-info text-lg pt-1 text-[#f2707f]"></i>
                  <h1 className="text-sm font-Poppins font-medium text-gray-600">
                    SKU:{" "}
                    <span className="font-semibold text-black">
                      {productDetails.skuID}
                    </span>
                  </h1>
                </div>
                <div className="flex gap-2 items-center">
                  <i className="fi fi-rr-warehouse-alt text-lg pt-1 text-[#f2707f]"></i>
                  <h1 className="text-sm font-Poppins font-medium text-gray-600">
                    Available:{" "}
                    <span className="font-semibold text-black">
                      {productDetails.stock > 0
                        ? `Instock (${productDetails.stock})`
                        : " Sold"}
                    </span>
                  </h1>
                </div>
                <div className="flex gap-2 items-center">
                  <i className="fi fi-rr-store-alt text-lg pt-1 text-[#f2707f]"></i>
                  <h1 className="text-sm font-Poppins font-medium text-gray-600">
                    Vender:{" "}
                    <span className="font-semibold text-black">Parakh</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 font-Poppins">
            <Accordion
              sx={{ marginY: 2, bgcolor: "transparent", boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                className="text-sm font-semibold"
              >
                Description
              </AccordionSummary>
              <AccordionDetails className="text-sm font-Quicksand font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{ marginY: 2, bgcolor: "transparent", boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                className="text-sm font-semibold"
              >
                Shipping & Returns
              </AccordionSummary>
              <AccordionDetails className="text-sm font-Quicksand font-semibold">
                <h1 className="font-bold">Shipping Policy</h1>
                <h1>₹80 - for orders below ₹999</h1>
                <h1>Free shipping for orders above ₹999</h1>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{ marginY: 2, bgcolor: "transparent", boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
                className="text-sm font-semibold"
              >
                Customer Reviews
              </AccordionSummary>
              <AccordionDetails className="text-sm font-Quicksand font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
          </div>
        </div>

        <div className="my-40">
          <div className="mt-10 flex justify-center text-center">
            <div className="p-5">
              <h1 className="text-xl md:text-2xl font-Pacifico text-[#f2707f]">
                More to explore
              </h1>
              <h1 className="text-2xl md:text-3xl font-Lemon font-medium">
                You may also like
              </h1>
            </div>
          </div>

          <div className="flex gap-5 md:gap-10 overflow-x-auto py-10 px-5 lg:px-20 hide-scrollbar">
            {products.slice(0, 5).map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 drop-shadow-xl bg-white cursor-pointer overflow-hidden"
              >
                <div className="px-4 pt-4">
                  <div className="relative w-48 h-48 md:w-52 md:h-52 flex justify-center items-center bg-gray-100 overflow-hidden group">
                    <img
                      src={item.image}
                      alt=""
                      className="w-44 md:w-44 transition ease-in-out duration-700 group-hover:scale-110 md:group-hover:scale-150 mix-blend-darken"
                    />
                    <div className="w-full absolute bottom-0 py-2 flex justify-center gap-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <IconButton>
                        <i className="fi fi-sr-shopping-cart-add text-gray-400 text-xl pt-1 px-2 rounded-full"></i>
                      </IconButton>
                      <IconButton>
                        <i
                          className={`fi fi-sr-heart  text-xl pt-1 px-2 rounded-full ${
                            item.wishlist ? "text-[#FF0000]" : "text-gray-400"
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

          <div className="text-center pb-20">
            <Button
              variant="contained"
              size="large"
              type="submit"
              className="button-shiny-effect"
              onClick={() => {
                navigate("/Parakh_client/all-products");
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

        <Footer />
      </div>
      <div className="fixed bottom-0 right-0 left-0 xl:hidden z-10">
        <FooterNav />
      </div>
    </div>
  );
};

export default ProductDetails;
