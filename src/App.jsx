import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import loading from "/assets/loading.gif";
import io from "socket.io-client";
import { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProduct } from "./store/reducers/productSlice";
import { RouterProvider } from "react-router";
import { getOrders } from "./store/reducers/checkoutSlice";

const Collections = lazy(() => import("./components/Collections/Collections"));
const CheckOut = lazy(() => import("./components/Checkout/CheckOut"));
const ProductDetails = lazy(() =>
  import("./components/ProductDetails.jsx/ProductDetails")
);
const LoginPage = lazy(() => import("./components/HomePage/LoginPage"));
const AllHotDeals = lazy(() => import("./components/All_Products/AllHotDeals"));
const AllMostLoved = lazy(() =>
  import("./components/All_Products/AllMostLoved")
);
const AllRings = lazy(() => import("./components/All_Products/AllRings"));
const AllEarrings = lazy(() => import("./components/All_Products/AllEarrings"));
const AllNecklace = lazy(() => import("./components/All_Products/AllNecklace"));
const AllProducts = lazy(() => import("./components/All_Products/AllProducts"));
const ContactUS = lazy(() => import("./components/ContactUs/ContactUS"));
const Cart = lazy(() => import("./components/Cart/Cart"));
const HomePage = lazy(() => import("./components/HomePage/HomePage"));
const AccountPage = lazy(() => import("./components/Account/AccountPage"));
const Wishlist = lazy(() => import("./components/Wishlist/Wishlist"));
const ThankYou = lazy(() => import("./components/Order/ThankYou"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());

    // const socket = io("https://parakhadmin-server.onrender.com");
    const socket = io("http://localhost:3000");

    socket.on("productAdded", () => {
      dispatch(getAllProduct());
    });

    socket.on("productUpdated", () => {
      dispatch(getAllProduct());
    });

    socket.on("productToggled", () => {
      dispatch(getAllProduct());
    });

    socket.on("productDeleted", () => {
      dispatch(getAllProduct());
    });

    socket.on("updatedOrder", () => {
      dispatch(getOrders());
    });

    return () => {
      socket.disconnect(); // Clean up when component unmounts
    };
  }, [dispatch]);

  const loadingPic = (
    <div className="h-screen flex flex-col justify-center items-center">
      <img src={loading} alt="" className="w-24" />
    </div>
  );

  const router = createBrowserRouter([
    {
      path: "/Parakh_client",
      element: (
        <Suspense fallback={loadingPic}>
          <LoginPage />
        </Suspense>
      ),
    },
    {
      path: "/Parakh_client/home",
      element: (
        <Suspense fallback={loadingPic}>
          <HomePage />
        </Suspense>
      ),
    },
    {
      path: "/Parakh_client/contact-us",
      element: (
        <Suspense fallback={loadingPic}>
          <ContactUS />
        </Suspense>
      ),
    },
    {
      path: "/Parakh_client/account",
      element: (
        <Suspense fallback={loadingPic}>
          <AccountPage />
        </Suspense>
      ),
    },
    {
      path: "/Parakh_client/wishlist",
      element: (
        <Suspense fallback={loadingPic}>
          <Wishlist />
        </Suspense>
      ),
    },
    {
      path: "/Parakh_client/collections",
      element: (
        <Suspense fallback={loadingPic}>
          <Collections />
        </Suspense>
      ),
    },
    {
      path: "/Parakh_client/cart",
      element: (
        <Suspense fallback={loadingPic}>
          <Cart />
        </Suspense>
      ),
    },
    {
      path: "/Parakh_client/hot-deals",
      element: (
        <Suspense fallback={loadingPic}>
          <AllHotDeals />
        </Suspense>
      ),
    },
    {
      path: "/Parakh_client/most-loved",
      element: (
        <Suspense fallback={loadingPic}>
          <AllMostLoved />
        </Suspense>
      ),
    },
    {
      path: "/Parakh_client/all-products",
      element: (
        <Suspense fallback={loadingPic}>
          <AllProducts />{" "}
        </Suspense>
      ),
    },
    {
      path: "/Parakh_client/products-details",
      element: (
        <Suspense fallback={loadingPic}>
          <ProductDetails />{" "}
        </Suspense>
      ),
    },
    {
      path: "/Parakh_client/rings",
      element: (
        <Suspense fallback={loadingPic}>
          <AllRings />
        </Suspense>
      ),
    },
    {
      path: "/Parakh_client/earrings",
      element: (
        <Suspense fallback={loadingPic}>
          <AllEarrings />
        </Suspense>
      ),
    },
    {
      path: "/Parakh_client/necklaces",
      element: (
        <Suspense fallback={loadingPic}>
          <AllNecklace />
        </Suspense>
      ),
    },
    {
      path: "/Parakh_client/checkout",
      element: (
        <Suspense fallback={loadingPic}>
          <CheckOut />
        </Suspense>
      ),
    },
    {
      path: "/Parakh_client/thankyou",
      element: (
        <Suspense fallback={loadingPic}>
          <ThankYou />
        </Suspense>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
