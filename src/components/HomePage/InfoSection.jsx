import shipping from "/assets/shipping.gif";
import support from "/assets/support.gif";
import payment from "/assets/payment.gif";

const InfoSection = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-10 sm:gap-5 justify-center items-center md:justify-between px-5 lg:px-20 py-10">
        <div className="flex flex-col items-center gap-3 w-72">
          <img src={shipping} alt="" className="w-16" />
          <div className="text-center">
            <h1 className="text-base font-medium  font-Poppins">Free Shipping</h1>
            <p className="text-sm font-Quicksand">
              Free shipping on all orders over ₹999
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3  w-72 ">
          <img src={support} alt="" className="w-16" />
          <div className="text-center">
            <h1 className="text-base font-medium font-Poppins">Support 24/7</h1>
            <p className="text-sm font-Quicksand">
              Contact us 24 hours a day, 7 days a week
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 w-72">
          <img src={payment} alt="" className="w-16" />
          <div className="text-center">
            <h1 className="text-base font-medium font-Poppins">Secure Payment</h1>
            <p className="text-sm font-Quicksand">
              We ensure secure payment with UPI
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoSection;
