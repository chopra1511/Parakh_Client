import React, { useEffect, useState } from "react";
import "@flaticon/flaticon-uicons/css/all/all.css";
import NavBar from "../NavBar/NavBar";
import FooterNav from "../NavBar/FooterNav";
import { Button, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getUserCart } from "../../store/reducers/cartSlice";
import { useNavigate } from "react-router";
import {
  addToWishlist,
  getProductDetails,
  getUserWishlist,
  removeFromWishlist,
} from "../../store/reducers/productSlice";

const ProductsDisplay = ({ categoryType, category, emoteImg, products }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { wishlist } = useSelector((state) => state.products);
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getProductHandler = (id) => {
    dispatch(getProductDetails(id))
      .then(() => {
        navigate("/Parakh_client/products-details");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addCartHandler = (id) => {
    console.log(id);
    const product = products.find((product) => product._id === id);
    if (product) {
      dispatch(addToCart({product: product}))
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
      (item) => item._id === id
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

  // Calculate products to display for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Calculate total pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-[#f4f4f4]">
      <div className="fixed top-0 right-0 left-0 z-20">
        <NavBar />
      </div>

      <div className={`${products.length === 0 ? "h-screen" : ""}`}>
        <div className="flex items-center relative px-5 mt-14 py-10 lg:px-20 lg:py-20 overflow-hidden">
          <div className="w-full flex justify-center items-center text-center">
            <div className="z-10 relative py-10 lg:py-20 px-10 lg:px-20">
              <h1 className="text-xl md:text-2xl font-Pacifico text-[#f2707f]">
                {categoryType}
              </h1>
              <h1 className="text-3xl md:text-4xl font-Lemon font-semibold">
                {category}
              </h1>
              {products.length === 0 ? (
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
              ) : (
                ""
              )}
            </div>
            <div className="absolute rotate-45 -top-20 -right-20 lg:-top-44 lg:-right-44 z-0">
              <div className="p-10 lg:p-20 rounded-full bg-white/40">
                <div className="p-10 lg:p-20 rounded-full bg-white">
                  <img
                    src={emoteImg}
                    alt="Emote"
                    className="w-24 lg:w-56 opacity-60"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-5 pb-10 py-5 px-5 lg:px-10 xl:px-20">
          {currentProducts
            .filter((item) => item.available)
            .map((product, index) => {
              const isProductInWishlist = wishlist.some(
                (item) => item._id === product._id
              );
              return (
                <div
                  key={index}
                  className="mb-5 md:mb-5 drop-shadow-xl w-full cursor-pointer bg-white overflow-hidden"
                  onClick={() => getProductHandler(product._id)}
                >
                  <div className="px-4 pt-4 shadow-inner">
                    <div className="relative w-full flex flex-col justify-center items-center h-32 md:h-48 lg:h-60 xl:h-72 bg-gray-100 overflow-hidden group">
                      <img
                        src={product.images}
                        alt=""
                        className="w-full object-cover transition ease-in-out duration-700 group-hover:scale-110  md:group-hover:scale-150 mix-blend-darken"
                      />
                      <div className="w-full absolute bottom-0 py-2 flex justify-center gap-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <IconButton
                          onClick={(e) => {
                            e.stopPropagation();
                            addCartHandler(product._id);
                          }}
                        >
                          <i className="fi fi-sr-shopping-cart-add text-white text-xl pt-1 px-2 rounded-full"></i>
                        </IconButton>
                        <IconButton
                          onClick={(e) => {
                            e.stopPropagation();
                            wishlistHandler(product._id);
                          }}
                        >
                          <i
                            className={`fi fi-sr-heart  text-xl pt-1 px-2 rounded-full ${
                              isProductInWishlist
                                ? "text-[#ff0000]"
                                : "text-white"
                            }`}
                          ></i>
                        </IconButton>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 text-center">
                    <h1 className="text-md font-Poppins font-semibold">
                      {product.name}
                    </h1>
                    <h1 className="text-sm font-Poppins font-medium">
                      ₹{product.price}
                      {product.discountedPrice ? (
                        <span className="pl-2 line-through text-slate-600 text-[12px]">
                          ₹{product.discountedPrice}{" "}
                        </span>
                      ) : (
                        ""
                      )}
                    </h1>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center pb-20">
        <IconButton
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="mx-2"
        >
          <i className="fi fi-br-arrow-small-left px-2 pt-1 text-md"></i>
        </IconButton>
        <span className="mx-5 font-Poppins">
          Page <span className="font-semibold">{currentPage}</span> of{" "}
          <span className="font-semibold">{totalPages}</span>
        </span>
        <IconButton
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <i className="fi fi-br-arrow-small-right px-2 pt-1 text-md"></i>
        </IconButton>
      </div>

      <div className="fixed bottom-0 right-0 left-0 xl:hidden">
        <FooterNav />
      </div>
    </div>
  );
};

export default ProductsDisplay;
