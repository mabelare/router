import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="relative flex items-center justify-center h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute object-cover w-full h-full pointer-events-none"
      >
        <source src="/document_5940284188090439704.mp4" type="video/mp4" />
      </video>
      <div className=" flex flex-col items-center justify-center relative z-10 ">
        <h1 className="text-3xl font-bold text-white mb-8 lg:mt-48  ">
          Welcome to our platform
        </h1>
        <div className="space-x-6">
          <Link to="/Test">
            <button
              className="px-6 py-3 bg-blue-500 text-white rounded-lg
          shadow-md hover:bg-pink-600  transition"
            >
              For individuals
            </button>
          </Link>
          <Link to="/Pusher">
            <button
              className="px-6 py-3 bg-green-500 text-white rounded-lg
          shadow-md hover:bg-pink-600  transition"
            >
              For Groups
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
