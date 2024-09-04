import React, { useEffect } from "react";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  decreaseCartItem,
  deleteCartItem,
  getUserCart,
  increaseCartItem,
} from "../../store/reducers/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const YourCart = ({ cart, billDetails }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const decrementQuantity = (id) => {
    dispatch(decreaseCartItem(id))
      .then(() => {
        dispatch(getUserCart());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteItemHandler = (id) => {
    dispatch(deleteCartItem(id))
      .then(() => {
        dispatch(getUserCart());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const incrementQuantity = (id) => {
    dispatch(increaseCartItem(id))
      .then(() => {
        dispatch(getUserCart());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="px-5 pb-10">
        <div className="md:mx-20 p-5 md:p-10 bg-white rounded-2xl drop-shadow-xl">
          <div className="flex justify-start text-left">
            <div className="pb-3 border-b-2 w-full">
              <h1 className="text-xl md:text-3xl font-Poppins font-semibold">
                Your Cart
              </h1>
            </div>
          </div>

          <div className="my-5 md:my-10">
            {cart.map((item, index) => (
              <div key={index} className="flex gap-5 py-5">
                <div className="p-2 bg-white w-28 md:w-28 drop-shadow">
                  <div className="w-18 h-16 md:h-20  flex justify-center items-center bg-gray-100 overflow-hidden">
                    <img
                      src={item.product.images}
                      alt=""
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between">
                    <div>
                      <h1 className="text-sm md:text-lg font-Poppins font-medium">
                        {item.product.name}
                      </h1>
                      <h1 className="text-[10px] md:text-[12px] font-Poppins font-medium capitalize">
                        {item.product.variant.color},
                        {item.product.variant.material}
                      </h1>
                    </div>
                    <div className="text-right">
                      <h1 className="text-sm md:text-lg font-Poppins font-semibold md:mt-2">
                        ₹{item.totalPrice}
                        {item.totalDiscount ? (
                          <span className="pl-2 line-through text-slate-600 text-[12px]">
                            ₹{item.totalDiscount}
                          </span>
                        ) : (
                          ""
                        )}
                      </h1>
                      <div className="">
                        <IconButton
                          onClick={() => {
                            deleteItemHandler(item.product._id);
                          }}
                        >
                          <i className="fi fi-rs-trash text-xl pt-1 px-2 hover:text-[#f2707f]"></i>
                        </IconButton>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className=" flex items-center justify-between w-1/2 md:w-32 rounded-md border-2">
                      <i
                        className="fi fi-rr-minus-small pt-1 pl-2 cursor-pointer"
                        onClick={() => {
                          decrementQuantity(item.product._id);
                        }}
                      ></i>
                      <h1 className="text-sm font-Poppins font-medium">
                        {item.quantity}
                      </h1>
                      <i
                        className="fi fi-rr-plus-small pt-1 pr-2 cursor-pointer"
                        onClick={() => {
                          incrementQuantity(item.product._id);
                        }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5" id="detailedBill">
        <div className="md:mx-20 p-5 md:p-10 bg-white rounded-2xl drop-shadow-xl">
          <div className="flex justify-start text-left">
            <div className="pb-3 border-b-2 w-full">
              <h1 className="text-xl md:text-3xl font-Poppins font-semibold">
                Bill Details
              </h1>
            </div>
          </div>

          <div>
            <div className="py-3 border-b-[1px] md:border-b-2 border-dashed">
              <div className="flex justify-between">
                <h1 className="text-sm md:text-md font-Poppins">Cart total</h1>
                <h1 className="text-sm md:text-md font-Poppins font-medium">
                  ₹{billDetails.cartTotal}
                </h1>
              </div>
              <div className="flex justify-between mt-2">
                <h1 className="text-sm md:text-md font-Poppins">Discount</h1>
                <h1 className="text-sm md:text-md font-Poppins font-medium">
                  ₹{billDetails.discount}
                </h1>
              </div>
            </div>
            <div className="py-3 border-b-[1px] md:border-b-2 border-dashed">
              <div className="flex justify-between">
                <h1 className="text-sm md:text-md font-Poppins">Subtotal</h1>
                <h1 className="text-sm md:text-md font-Poppins font-medium">
                  ₹{billDetails.subTotal}
                </h1>
              </div>
            </div>
            <div className="pt-5 pb-10 border-b-[1px] md:border-b-2 border-dashed">
              <div className="flex justify-between">
                <h1 className="text-sm md:text-md font-Poppins">
                  Delivery Fee
                </h1>
                <h1 className="text-sm md:text-md font-Poppins font-medium">
                  ₹{billDetails.delivery}
                </h1>
              </div>
            </div>
            <div className="pt-3">
              <div className="flex justify-between">
                <h1 className="text-md md:text-lg font-Poppins font-semibold">
                  To Pay
                </h1>
                <h1 className="text-md md:text-lg font-Poppins font-bold">
                  ₹{billDetails.toPay}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-10 flex justify-center">
        <Button
          variant="contained"
          size="large"
          type="submit"
          onClick={() => navigate("/Parakh_client/checkout")}
          className="button-shiny-effect"
          sx={{
            borderRadius: isMobile ? "5px" : "10px",
            fontFamily: "Poppins",
            textTransform: "capitalize",
            backgroundColor: "#f2707f",
            fontSize: isMobile ? "12px" : "16px", // Adjust the font size for mobile
            padding: isMobile ? "8px 16px" : "12px 24px", // Adjust the padding for mobile
            ":hover": {
              backgroundColor: "#F7475C",
            },
          }}
        >
          Proceed to checkout
        </Button>
      </div>
    </>
  );
};

export default YourCart;
