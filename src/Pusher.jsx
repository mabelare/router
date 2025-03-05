import Navbar from "./Navbar";
import sample from "./assets/SamplePhoto_13.jpg";

export default function Pusher() {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <div className="lg:flex justify-center items-center py-16 lg:w-9/12">
        <div className="bg-white shadow p-8 rounded lg:w-[2500px] lg:ml-80">
          <h1 className="text-2xl font-bold mb-4">Checkout</h1>

          <div className="flex flex-col gap-4">
            <div className="border border-gray-100 p-4 rounded">
              <div className="flex items-center gap-2">
                <div
                  className=" w-6 h-6 flex items-center justify-center border border-blue-400
              text-gray-600 font-semibold rounded-full"
                >
                  1
                </div>
                <h2 className="font-semibold">Your Basic Information</h2>
              </div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-4 ">
                <div>
                  <h2 className="mt-4">First Name</h2>
                  <input
                    type="text"
                    placeholder=""
                    className=" bg-gray-300
                rounded w-full p-2 mt-2"
                  />
                </div>

                <div>
                  <h2 className="mt-4">Last Name</h2>
                  <input
                    type="text"
                    placeholder=""
                    className="bg-gray-300
                rounded w-full p-2 mt-2 "
                  />
                </div>
              </div>
              <div>
                <h2 className="mt-4">Email</h2>
                <input
                  type="email"
                  placeholder=""
                  className=" bg-gray-300
                rounded w-full p-2 mt-2"
                />
              </div>
            </div>

            <div className="border border-gray-100 p-4 rounded">
              <div className="flex items-center gap-2">
                <div
                  className=" w-6 h-6 flex items-center justify-center border border-blue-400
              text-gray-600 font-semibold rounded-full "
                >
                  2
                </div>
                <h2 className="font-bold">Your Payment Information</h2>
              </div>
              <div>
                <h2 className="mt-4">Credit Card</h2>
                <input
                  type="text"
                  placeholder="Card Number"
                  className=" rounded w-full p-2 mt-2 bg-gray-300"
                />
              </div>
            </div>
            <button className="bg-green-500 text-white py-2 px-4 w-11/12 ml-4  rounded mt-4">
              Buy WP Pusher
            </button>
            <div className="flex items-center gap-2">
              <div
                className=" w-6 h-6 flex items-center justify-center border border-blue-400
              text-gray-600 font-semibold rounded-full lg:ml-8 hidden lg:block "
              >
                <p className="ml-1">?</p>
              </div>
              <p className="text-sm text-gray-600 text-center ">
                {" "}
                Need any help? Don't hestitate to{" "}
                <a
                  href="#"
                  className="text-blue-600
              underline"
                >
                  contact
                </a>
                support!
              </p>
            </div>
            <p className="bg-gray-400 text-white text-[10px] lg:ml-40 text-center w-1/3 md:ml-60 rounded ml-28">
              powered by Mabel
            </p>
          </div>
        </div>
        <div className="bg-blue-600 text-white p-8 w-full  rounded">
          <h2 className="text-2xl font-bold mb-6">Freelancer</h2>
          <p className="text-5xl font-bold ">
            <sup>$</sup> 99 <span className="text-lg">/ year</span>
          </p>
          <p className="text-sm mt-2 mb-8">
            Automatically renews <br /> after 1 year.
          </p>
          <div className="flex items-center gap-2 mb-2">
            <div
              className=" w-6 h-6 flex items-center justify-center border-2 border-green-200
              text-gray-600 font-semibold rounded-full"
            >
              ✓
            </div>
            <h2 className="">Use on 5 client sites</h2>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <div
              className=" w-6 h-6 flex items-center justify-center border-2 border-green-200
              text-gray-600 font-semibold rounded-full"
            >
              ✓
            </div>
            <h2 className="">Private repositories</h2>
          </div>
          <div className="flex items-center gap-2">
            <div
              className=" w-6 h-6 flex items-center justify-center border-2 border-green-200
              text-gray-600 font-semibold rounded-full"
            >
              ✓
            </div>
            <h2 className="">Email support</h2>
          </div>

          <p className="mt-8">
            Need 20 client sites? <br />
            <a
              href="#"
              className="underline font-semibold
          "
            >
              Switch to the Agency Plan
            </a>
          </p>
          <p className="border-b-1 mt-10"></p>
          <p className="mt-10 text-sm italic ">
            "FTP is horrible to deal with. <br />
            <em className="font-bold">WP Pusher </em>solves that issue, and the
            customer support is awesome!"
          </p>
          <div className="flex items-center space-x-2 mb-4  mt-4 ">
            <img src={sample} alt="sample" className="w-10 h-10 rounded-full" />
            <p className="text-sm font-bold ">Are Mabel</p>
          </div>
        </div>
      </div>
      <p className="text-gray-500 text-center text-sm ">
        {" "}
        © 2018 WP Pusher IVS -{" "}
        <a href="#" className="text-blue-600 ">
          Terms of Service
        </a>
      </p>
    </div>
  );
}
