import test from "./assets/test.webp";

export default function Test() {
  return (
    <div className="lg:flex justify-center items-center bg-[#F8FBF9] p-6 lg:p-10 space-y-6 lg:space-y-0 lg:space-x-6">
      <div>
        <img src={test} alt="test" className="w-32 lg:ml-48" />
        <h2 className="text-2xl font-bold text-gray-700 mt-4 lg:ml-48 lg:text-3xl lg:mb-8">
          For individuals
        </h2>
        <p className="text-gray-600 mt-2 mb-6 lg:w-2/4 lg:ml-48">
          Start benefiting from the wellness experience.For companies looking on
          increasing productivity,and improving organization wellness.
        </p>
      </div>
      <div className="bg-white shadow rounded p-6 w-full lg:w-3/5 lg:mr-32">
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4 ">
            <div>
              <h4 className="mb-2 md:text-[20px] lg:text-[15px]">First Name</h4>
              <input
                type="text"
                placeholder=""
                className="input-field border border-gray-200 h-12 w-32  md:w-full md:text-[20px] lg:mb-4  "
              />
            </div>
            <div>
              <h4 className="mb-2 md:text-[20px] lg:text-[15px]">Last Name</h4>
              <input
                type="text"
                placeholder=""
                className="input-field border border-gray-200 h-12 w-32  md:w-full md:text-[20px]  "
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="mb-2 md:text-[20px] lg:text-[15px]">Gender</h4>
              <select className="input-field border border-gray-200 h-12 w-32 md:w-full md:text-[20px] lg:text-[15px]  lg:mb-4 ">
                <option> Select here</option>
              </select>
            </div>
            <div>
              <h4 className="mb-2 md:text-[20px] lg:text-[15px]">
                Date of Birth
              </h4>
              <div className="relative">
                <input
                  type="date"
                  className="input-field border border-gray-200 h-12 w-32 md:w-full md:text-[20px] lg:text-[15px] "
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="mb-2 md:text-[20px] lg:text-[15px]">
                Weight (KG)
              </h4>
              <input
                type="text"
                placeholder=" Enter weight"
                className="input-field border border-gray-200 h-12 w-32 md:w-full md:text-[20px] lg:text-[15px]  lg:mb-4 "
              />
            </div>
            <div>
              <h4 className="mb-2 md:text-[20px] lg:text-[15px]">
                Height (CM)
              </h4>
              <input
                type="text"
                placeholder=" Enter height"
                className="input-field border border-gray-200 h-12 w-32 md:w-full md:text-[20px] lg:text-[15px] "
              />
            </div>
          </div>
          <div>
            <h4 className="mb-2 md:text-[20px] lg:text-[15px]">
              Activity Level
            </h4>
            <select className="input-field border border-gray-200 h-12 w-full md:text-[20px] lg:text-[15px] ">
              <option className=""> Select here</option>
            </select>
          </div>
          <div>
            <h4 className="mb-2 md:text-[20px] lg:text-[15px]">Password</h4>
            <input
              type="password"
              placeholder=" "
              className="input-field border border-gray-200 h-12 w-full"
            />
          </div>
          <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 md:text-[20px] lg:text-[15px]">
            Register
          </button>
          <p className="md:text-[20px] text-center lg:text-[15px] ">
            By clicking Register, you agree to our{" "}
            <a href="#" className="text-green-600">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="#" className="text-green-600">
              Privacy Policy
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
}
