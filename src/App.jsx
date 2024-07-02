import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import { RouterProvider } from "react-router";
import LoginPage from "./components/HomePage/LoginPage";
import AllHotDeals from "./components/All_Products/AllHotDeals";
import AllMostLoved from "./components/All_Products/AllMostLoved";
import AllRings from "./components/All_Products/AllRings";
import AllEarrings from "./components/All_Products/AllEarrings";
import AllNecklace from "./components/All_Products/AllNecklace";
import AllProducts from "./components/All_Products/AllProducts";
import ContactUS from "./components/ContactUs/ContactUS";
import Cart from "./components/Cart/Cart";
import HomePage from "./components/HomePage/HomePage";
import AccountPage from "./components/Account/AccountPage";
import Wishlist from "./components/Wishlist/Wishlist";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProduct } from "./store/reducers/productSlice";
import ThankYou from "./components/Order/ThankYou";

function App() {
const dispatch = useDispatch()

  useEffect(() => {
    if (location.pathname !== "/") {
      dispatch(getAllProduct());
    }
  },[])


  const router = createBrowserRouter([
    { path: "/Parakh_client", element: <LoginPage /> },
    { path: "/Parakh_client/home", element: <HomePage /> },
    { path: "/Parakh_client/contact-us", element: <ContactUS /> },
    { path: "/Parakh_client/account", element: <AccountPage /> },
    { path: "/Parakh_client/wishlist", element: <Wishlist /> },
    { path: "/Parakh_client/cart", element: <Cart /> },
    { path: "/Parakh_client/hot-deals", element: <AllHotDeals /> },
    { path: "/Parakh_client/most-loved", element: <AllMostLoved /> },
    { path: "/Parakh_client/all-products", element: <AllProducts /> },
    { path: "/Parakh_client/rings", element: <AllRings /> },
    { path: "/Parakh_client/earrings", element: <AllEarrings /> },
    { path: "/Parakh_client/necklaces", element: <AllNecklace /> },
    { path: "/Parakh_client/thankyou", element: <ThankYou /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
