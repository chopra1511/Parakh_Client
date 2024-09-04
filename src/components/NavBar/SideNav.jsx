import { useNavigate } from "react-router";
import { Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { userLogout } from "../../store/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";

const SideNav = ({ setSideNav }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
  const { user } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(userLogout())
      .unwrap()
      .then(() => navigate("/Parakh_client"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="fixed inset-0 z-50 flex xl:hidden">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={() => setSideNav(false)}
      ></div>

      <div className="sideBar fixed left-0 top-0 bottom-0 bg-white w-[80%] lg:w-[50%] p-5">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-musky cursor-pointer px-2">Parakh</h1>
          </div>
          <i
            className="fi fi-rr-cross-small text-2xl cursor-pointer"
            onClick={() => setSideNav(false)}
          ></i>
        </div>
        <ul className="flex flex-col gap-5">
          <li
            className="w-fit flex gap-5 items-center cursor-pointer pt-2 rounded-lg  hover:translate-x-2"
            onClick={() => navigate("/Parakh_client/home")}
          >
            <i className="fi fi-rr-home text-xl text-[#f2707f]"></i>
            <h1 className="font-Poppins">Home</h1>
          </li>

          <li
            className="w-fit flex gap-5 items-center cursor-pointer pt-2 rounded-lg  hover:translate-x-2"
            onClick={() => navigate("/Parakh_client/all-products")}
          >
            <i className="fi fi-rr-store-alt text-xl text-[#f2707f]"></i>
            <h1 className="font-Poppins">Store</h1>
          </li>

          <li
            className="w-fit flex gap-5 items-center cursor-pointer pt-2 rounded-lg  hover:translate-x-2"
            onClick={() => navigate("/Parakh_client/collections")}
          >
            <i className="fi fi-rr-apps text-xl text-[#f2707f]"></i>
            <h1 className="font-Poppins">Collections</h1>
          </li>

          <li
            className="w-fit flex gap-5 items-center cursor-pointer pt-2 rounded-lg  hover:translate-x-2"
            onClick={() => navigate("/Parakh_client/most-loved")}
          >
            <i className="fi fi-rr-circle-heart text-xl text-[#f2707f]"></i>
            <h1 className="font-Poppins">Most Loved</h1>
          </li>

          <li
            className="w-fit flex gap-5 items-center cursor-pointer pt-2 rounded-lg  hover:translate-x-2"
            onClick={() => navigate("/Parakh_client/hot-deals")}
          >
            <i className="fi fi-rs-flame text-xl text-[#f2707f]"></i>
            <h1 className="font-Poppins">Hot Deals</h1>
          </li>

          <li className="w-fit flex gap-5 items-center cursor-pointer pt-2 rounded-lg  hover:translate-x-2">
            <i className="fi fi-rr-info text-xl text-[#f2707f]"></i>
            <h1 className="font-Poppins">About Us</h1>
          </li>

          <li
            className="w-fit flex gap-5 items-center cursor-pointer pt-2 rounded-lg  hover:translate-x-2"
            onClick={() => navigate("/Parakh_client/contact-us")}
          >
            <i className="fi fi-rr-phone-rotary text-xl text-[#f2707f]"></i>
            <h1 className="font-Poppins">Contact Us</h1>
          </li>

          <li
            className="w-fit flex gap-5 items-center cursor-pointer pt-2 rounded-lg  hover:translate-x-2"
            onClick={() => navigate("/Parakh_client/account")}
          >
            <i className="fi fi-rr-user text-xl text-[#f2707f]"></i>
            <h1 className="font-Poppins font-semibold">{user?.user.name}</h1>
          </li>

          <div className="flex justify-start mt-10">
            <Button
              variant="contained"
              size="large"
              type="submit"
              onClick={handleLogout}
              className="button-shiny-effect"
              sx={{
                borderRadius: "10px",
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
              LOGOUT
            </Button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
