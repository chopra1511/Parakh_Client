import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import SideNav from "./SideNav";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const [sideNav, setSideNav] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/Parakh_client/home") {
      const handleScroll = () => {
        if (window.scrollY > 350) {
          setShowNav(true);
        } else {
          setShowNav(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setShowNav(true); // Show the navbar on other pages
    }
  }, [location.pathname]);

  const { wishlist } = useSelector((state) => state.products);
  const { cart } = useSelector((state) => state.cart);

  return (
    <>
      <div
        className={`w-full fixed top-0 left-0 right-0 z-10 transition-transform duration-700 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex justify-between drop-shadow-xl bg-white items-center px-5 xl:px-10 py-3">
          <div>
            <ul className="hidden sm:hidden md:hidden lg:hidden xl:flex gap-10 font-Poppins">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#ee9ca7]"
                      : "hover:text-[#ee9ca7] hover:cursor-pointer"
                  }
                  to={"/Parakh_client/home"}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#ee9ca7]"
                      : "hover:text-[#ee9ca7] hover:cursor-pointer"
                  }
                  to={"/Parakh_client/all-products"}
                >
                  Store
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#ee9ca7]"
                      : "hover:text-[#ee9ca7] hover:cursor-pointer"
                  }
                  to={"/Parakh_client/collections"}
                >
                  Collections
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#ee9ca7]"
                      : "hover:text-[#ee9ca7] hover:cursor-pointer"
                  }
                  to={"/Parakh_client/contact-us"}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div
              className="xl:hidden"
              onClick={() => {
                setSideNav(true);
              }}
            >
              <i className="fi fi-rr-menu-burger text-black text-xl hover:cursor-pointer"></i>
            </div>
          </div>

          <div className="xl:pr-40">
            <h1
              className="text-3xl font-musky hover:cursor-pointer"
              onClick={() => navigate("/Parakh_client/home")}
            >
              Parakh
            </h1>
          </div>

          <div>
            <ul className="flex gap-10 items-center">
              <li>
                <NavLink>
                  <i className="fi fi-rr-search text-xl"></i>
                </NavLink>
              </li>
              <li className="hidden xl:block">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#ee9ca7]"
                      : "hover:text-[#ee9ca7] hover:cursor-pointer"
                  }
                  to={"/Parakh_client/account"}
                >
                  <i className="fi fi-rr-circle-user text-xl"></i>
                </NavLink>
              </li>
              <li className="hidden xl:block">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#ee9ca7]"
                      : "hover:text-[#ee9ca7] hover:cursor-pointer"
                  }
                  to={"/Parakh_client/wishlist"}
                >
                  <Badge badgeContent={wishlist.length}>
                    <i className="fi fi-rr-heart text-xl"></i>
                  </Badge>
                </NavLink>
              </li>
              <li className="hidden xl:block">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#ee9ca7]"
                      : "hover:text-[#ee9ca7] hover:cursor-pointer"
                  }
                  to={"/Parakh_client/cart"}
                >
                  <Badge badgeContent={cart.length}>
                    <i className="fi fi-rr-shopping-cart text-xl"></i>
                  </Badge>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {sideNav && <SideNav setSideNav={setSideNav} />}
    </>
  );
};

export default NavBar;
