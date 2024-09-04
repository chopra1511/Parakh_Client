import React from "react";
import "@flaticon/flaticon-uicons/css/all/all.css";
import empty from "/assets/empty.gif";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

const EmptyCart = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="flex flex-col items-center">
        <img src={empty} alt="" className="w-full md:w-[600px] lg:w-[550px]" />
        <h1 className="text-xl md:text-3xl font-Pacifico text-[#f2707f]">
          Oh no!
        </h1>
        <h1 className="text-2xl md:text-3xl font-Lemon font-semibold">
          Your cart is empty
        </h1>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/Parakh_client/all-products")}
          className="button-shiny-effect"
          sx={{
            marginTop: 3,
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
          Continue Shopping
        </Button>
      </div>
    </div>
  );
};

export default EmptyCart;
