import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../store/reducers/checkoutSlice";
import { Button } from "@mui/material";

const Orders = () => {
  const [showTrack, setShowTrack] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const { allOrders } = useSelector((state) => state.order);
  console.log(allOrders);

  const sortedOrders = [...allOrders].sort((a, b) => {
    return (
      new Date(b.order_created.created_at) -
      new Date(a.order_created.created_at)
    );
  });

  const trackingHandler = (id) => {
    if (showTrack === id) {
      setShowTrack(null);
    } else {
      setShowTrack(id);
    }
  };

  return (
    <>
      {sortedOrders.map((order, index) => {
        const dateObject = new Date(order.order_created.created_at);
        const getLineStyle = (fromStep, toStep) => {
          // Use optional chaining to safely access properties
          const fromStepCompleted = order?.order_tracking?.[fromStep];
          const toStepCompleted = order?.order_tracking?.[toStep];

          if (fromStepCompleted && toStepCompleted) {
            return "bg-[#F2707F]";
          } else if (fromStepCompleted) {
            return "bg-gradient-to-r from-[#F2707F] to-[#F2707F]/10";
          } else {
            return "bg-[#F2707F]/10";
          }
        };
        return (
          <div
            className="border-2 rounded-xl mt-5 drop-shadow-xl bg-white"
            key={index}
          >
            <div className="bg-gray-200">
              <div className="p-3 flex justify-between">
                <div className="flex gap-5 md:gap-10 text-center">
                  <div>
                    <h1 className="text-sm font-Poppins font-semibold">
                      Order Placed
                    </h1>
                    <h1 className="text-[12px] font-Poppins font-medium">
                      {dateObject.toLocaleDateString().replace(/\//g, "-")}
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-sm font-Poppins font-semibold">
                      Total
                    </h1>
                    <h1 className="text-[12px] font-Poppins font-medium">
                      ₹{order.order_details.amount}
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-sm font-Poppins font-semibold">
                      Ship To
                    </h1>
                    <h1 className="text-[12px] font-Poppins font-medium">
                      customer
                    </h1>
                  </div>
                </div>
                <div className="flex items-center">
                  <h1 className="text-[12px] font-Poppins font-medium">
                    Order Id :{" "}
                    <span className="uppercase">
                      #{order.order_created.order_id}
                    </span>
                  </h1>
                </div>
              </div>
            </div>

            <div className="p-3 pb-5">
              <h1 className="text-base font-Poppins font-semibold">
                {order.order_tracking?.confirmedOrder
                  ? "Order Confirmed"
                  : order.order_tracking?.productDelivered
                  ? "Product Delivered"
                  : "Confirmation Pending"}
              </h1>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex gap-5 items-center">
                  <img
                    src={order.order_details.cart[0].product.images}
                    alt=""
                    className="w-16 h-16 object-cover rounded-xl"
                  />
                  <h1 className="text-base font-Poppins font-medium">
                    {order.order_details.cart[0].product.name}
                  </h1>
                </div>
                <div className="flex flex-col gap-2 text-center">
                  {!order.order_tracking?.productDelivered && (
                    <Button
                      variant="contained"
                      type="submit"
                      // className="button-shiny-effect"
                      onClick={() => trackingHandler(order._id)}
                      sx={{
                        borderRadius: "10px",
                        fontFamily: "Poppins",
                        textTransform: "capitalize",
                        backgroundColor: "#f2707f",
                        fontSize: "12px",
                        ":hover": {
                          backgroundColor: "#F7475C",
                        },
                      }}
                    >
                      Track Order
                    </Button>
                  )}

                  {order.order_tracking?.productDelivered && (
                    <>
                      <Button
                        variant="contained"
                        type="submit"
                        // className="button-shiny-effect"
                        sx={{
                          borderRadius: "10px",
                          fontFamily: "Poppins",
                          textTransform: "capitalize",
                          backgroundColor: "#f2707f",
                          fontSize: "12px",
                          ":hover": {
                            backgroundColor: "#F7475C",
                          },
                        }}
                      >
                        Leave Feedback
                      </Button>

                      <Button
                        variant="contained"
                        type="submit"
                        // className="button-shiny-effect"
                        sx={{
                          borderRadius: "10px",
                          fontFamily: "Poppins",
                          textTransform: "capitalize",
                          backgroundColor: "#f2707f",
                          fontSize: "12px",
                          ":hover": {
                            backgroundColor: "#F7475C",
                          },
                        }}
                      >
                        Write a Product review
                      </Button>
                    </>
                  )}
                </div>
              </div>
              <div className="px-24">
                {showTrack === order._id && (
                  <div className="mt-10">
                    <div className="flex justify-between">
                      <div className="flex flex-col items-center relative">
                        <div
                          className={`w-fit h-fit p-2 flex items-center rounded-full  ${
                            order.order_tracking?.confirmedOrder
                              ? "bg-[#F2707F]"
                              : "bg-gray-200"
                          }`}
                        >
                          <i
                            className={`fi fi-rr-shopping-cart-check pt-1 px-1.5 rounded-full ${
                              order.order_tracking?.confirmedOrder
                                ? "text-white"
                                : "text-gray-400"
                            }`}
                          ></i>
                        </div>
                        <div className="text-center mt-2">
                          <h1 className="text-[12px] font-Poppins font-medium text-gray-700">
                            Confirmed Order
                          </h1>
                          <h1 className="text-[12px] font-Poppins font-medium text-gray-500">
                            {dateObject
                              .toLocaleDateString()
                              .replace(/\//g, "-")}
                          </h1>
                        </div>
                        <div
                          className={`absolute top-5 left-24 h-0.5 w-52 ${getLineStyle(
                            "confirmedOrder",
                            "processingOrder"
                          )}`}
                        ></div>
                      </div>

                      <div className="flex flex-col items-center relative">
                        <div
                          className={`w-fit h-fit p-2 flex items-center rounded-full  ${
                            order.order_tracking?.processingOrder
                              ? "bg-[#F2707F]"
                              : "bg-gray-200"
                          }`}
                        >
                          <i
                            className={`fi fi-rr-truck-loading pt-1 px-1.5 rounded-full  ${
                              order.order_tracking?.processingOrder
                                ? "text-white"
                                : "text-gray-400"
                            }`}
                          ></i>
                        </div>
                        <div className="text-center mt-2">
                          <h1 className="text-[12px] font-Poppins font-medium text-gray-700">
                            Processing Order
                          </h1>
                          <h1 className="text-[12px] font-Poppins font-medium text-gray-500">
                            {dateObject
                              .toLocaleDateString()
                              .replace(/\//g, "-")}
                          </h1>
                        </div>
                        <div
                          className={`absolute top-5 left-24 h-0.5 w-52 ${getLineStyle(
                            "processingOrder",
                            "productDispatched"
                          )}`}
                        ></div>
                      </div>

                      <div className="flex flex-col items-center relative">
                        <div
                          className={`w-fit h-fit p-2 flex items-center rounded-full  ${
                            order.order_tracking?.productDispatched
                              ? "bg-[#F2707F]"
                              : "bg-gray-200"
                          }`}
                        >
                          <i
                            className={`fi fi-rr-truck-check pt-1 px-1.5 rounded-full  ${
                              order.order_tracking?.productDispatched
                                ? "text-white"
                                : "text-gray-400"
                            }`}
                          ></i>
                        </div>
                        <div className="text-center mt-2">
                          <h1 className="text-[12px] font-Poppins font-medium text-gray-700">
                            Product Dispatched
                          </h1>
                          <h1 className="text-[12px] font-Poppins font-medium text-gray-500">
                            {dateObject
                              .toLocaleDateString()
                              .replace(/\//g, "-")}
                          </h1>
                        </div>
                        <div
                          className={`absolute top-5 left-24 h-0.5 w-52 ${getLineStyle(
                            "productDispatched",
                            "productDelivered"
                          )}`}
                        ></div>
                      </div>

                      <div className="flex flex-col items-center relative">
                        <div
                          className={`w-fit h-fit p-2 flex items-center rounded-full  ${
                            order.order_tracking?.productDelivered
                              ? "bg-[#F2707F]"
                              : "bg-gray-200"
                          }`}
                        >
                          <i
                            className={`fi fi-rr-location-alt pt-1 px-1.5 rounded-full  ${
                              order.order_tracking?.productDelivered
                                ? "text-white"
                                : "text-gray-400"
                            }`}
                          ></i>
                        </div>
                        <div className="text-center mt-2">
                          <h1 className="text-[12px] font-Poppins font-medium text-gray-700">
                            Product Delivered
                          </h1>
                          <h1 className="text-[12px] font-Poppins font-medium text-gray-500">
                            {dateObject
                              .toLocaleDateString()
                              .replace(/\//g, "-")}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Orders;
