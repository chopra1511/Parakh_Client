
import account from "/assets/account.png";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";
import FooterNav from "../NavBar/FooterNav";
import { useEffect } from "react";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
];

const Collections = () => {
    const { products } = useSelector((state) => state.products);

    useEffect(() => {
        window.scrollTo(0, 0);
    })

  return (
    <>
      <div className="bg-[#f4f4f4]">
        <div className="fixed top-0 right-0 left-0 z-20">
          <NavBar />
        </div>

        <div className="flex items-center relative px-5 mt-16 py-10 lg:px-20 lg:pt-20 overflow-hidden z-0">
          <div className="w-full flex justify-center items-center text-center">
            <div className="z-10 relative py-10 lg:pt-20 px-10 lg:px-20">
              <h1 className="text-xl md:text-2xl font-Pacifico text-[#f2707f]">
                All
              </h1>
              <h1 className="text-3xl md:text-4xl font-Lemon font-semibold">
                Collections
              </h1>
            </div>
            <div className="absolute -top-20 -right-20 lg:-top-44 lg:-right-44 z-0">
              <div className="p-10 lg:p-20 rounded-full bg-white/40">
                <div className="p-10 lg:p-20 rounded-full bg-white">
                  <img
                    src={account}
                    alt="Emote"
                    className="w-24 lg:w-56 opacity-50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 pb-40 px-5 md:px-10 xl:px-40">
          <ImageList variant="woven" cols={3} gap={5}>
            {itemData.map((item) => (
              <ImageListItem key={item.img} className="group p-3">
                <img
                  srcSet={`${item.img}?w=550&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=550&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                  className="rounded-2xl cursor-pointer transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>

        <div className="fixed bottom-0 right-0 left-0 xl:hidden">
          <FooterNav />
        </div>
      </div>
    </>
  );
}

export default Collections;
