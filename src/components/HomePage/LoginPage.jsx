import { useEffect } from "react";
import Login from "../Account/Login";
import NavBar from "../NavBar/NavBar";
import FooterNav from "../NavBar/FooterNav";

const LoginPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      const targetElement = document.getElementById("login");
      const yOffset = 0;
      const y =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="home ">
        {/* <div className="fixed top-0 right-0 left-0 z-10">
          <NavBar />
        </div> */}
        <div className="h-screen bg-[url('/assets/bg2.jpg')] xl:bg-[url('/assets/bg.jpg')] bg-cover px-5">
          <div className="h-full flex flex-col justify-center items-center text-white animate-wiggle">
            <h1 className="text-8xl lg:text-9xl font-musky">Parakh</h1>
            <h1 className="text-xl lg:text-2xl font-Poppins font-light tracking-widest">
              Let's find the best
            </h1>
          </div>
        </div>

        <div id="login">
          <Login />
        </div>

        {/* <div className="fixed bottom-0 right-0 left-0 xl:hidden drop-shadow-[0_30px_30px_rgba(0,0,0,0.25)]">
          <FooterNav />
        </div> */}
      </div>
    </>
  );
};

export default LoginPage;
