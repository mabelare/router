import { Link } from "react-router-dom";
import pusher from "./assets/pusher.jpg";
export default function Navbar() {
  return (
    <nav className="bg-white shadow py-4 px-4 text-white flex justify-between items-center">
      <img src={pusher} alt="pusher" className="w-18 lg:w-32" />

      <div className="space-x-4 text-gray-700 font-medium hidden lg:block">
        <a href="#" className="hover:text-blue-600 text-xs lg:text-[15px] ">
          Download
        </a>
        <a href="#" className="hover:text-blue-600 text-xs  lg:text-[15px]">
          Learn More
        </a>
        <a href="#" className="hover:text-blue-600 text-xs  lg:text-[15px]">
          Pricing
        </a>
        <a href="#" className="hover:text-blue-600 text-xs  lg:text-[15px]">
          Help
        </a>
        <Link
          to="/"
          className=" hover:text-blue-600 border border-gray-700
            px-4 py-1 rounded text-xs  lg:text-[15px]"
        >
          Home
        </Link>
      </div>

      <div className="flex space-x-1 cursor-pointer lg:hidden w-[25px] ">
        <div className="w-2 h-2 bg-black rounded-full"></div>
        <div className="w-2 h-2 bg-black rounded-full"></div>
        <div className="w-2 h-2 bg-black rounded-full"></div>
      </div>
    </nav>
  );
}
