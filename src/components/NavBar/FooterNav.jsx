/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import Badge from "@mui/material/Badge";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "../../store/reducers/cartSlice";
import { getUserWishlist } from "../../store/reducers/productSlice";
import { NavLink } from "react-router-dom";

const FooterNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (location.pathname === "/Parakh_client/home") {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const isVisible = currentScrollPos > 350; // Adjust this value as needed
        setIsVisible(isVisible);
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setIsVisible(true); // Show the footer nav on other pages
    }
  }, [location.pathname]);

  const { wishlist } = useSelector((state) => state.products);
  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    if (!cart || cart.length === 0) {
      dispatch(getUserCart());
    }
    if (!wishlist || wishlist.length === 0) {
      dispatch(getUserWishlist());
    }
  }, [dispatch, cart, wishlist]);

  return (
    <div className={`footer-nav ${isVisible ? "visible" : ""}`}>
      <nav className="bg-white items-center xl:px-10 py-3">
        <ul className="flex px-5 justify-between items-center">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#ee9ca7]"
                : "hover:text-[#ee9ca7] hover:cursor-pointer"
            }
            to={"/Parakh_client/home"}
          >
            <li className="flex flex-col items-center">
              <i className="fi fi-rr-home text-xl"></i>
              <h1 className="text-[12px] font-Poppins">Home</h1>
            </li>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#ee9ca7]"
                : "hover:text-[#ee9ca7] hover:cursor-pointer"
            }
            to={"/Parakh_client/wishlist"}
          >
            <li className="flex flex-col items-center">
              <Badge badgeContent={wishlist.length}>
                <i className="fi fi-rr-heart text-xl"></i>
              </Badge>
              <h1 className="text-[12px] font-Poppins">Wishlist</h1>
            </li>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#ee9ca7]"
                : "hover:text-[#ee9ca7] hover:cursor-pointer"
            }
            to={"/Parakh_client/collections"}
          >
            <li className="flex flex-col items-center">
              <i className="fi fi-rr-apps text-xl"></i>
              <h1 className="text-[12px] font-Poppins">Collections</h1>
            </li>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#ee9ca7]"
                : "hover:text-[#ee9ca7] hover:cursor-pointer"
            }
            to={"/Parakh_client/account"}
          >
            <li className="flex flex-col items-center">
              <i className="fi fi-rr-user text-xl"></i>
              <h1 className="text-[12px] font-Poppins">Account</h1>
            </li>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#ee9ca7]"
                : "hover:text-[#ee9ca7] hover:cursor-pointer"
            }
            to={"/Parakh_client/cart"}
          >
            <li className="flex flex-col items-center">
              <Badge badgeContent={cart.length}>
                <i className="fi fi-rr-shopping-cart text-xl"></i>
              </Badge>
              <h1 className="text-[12px] font-Poppins">Cart</h1>
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default FooterNav;
