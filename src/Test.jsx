import test from "./assets/test.webp";

export default function Test() {
  return (
    <div className="flex justify-center items-center bg-[red]">
      <div>
        <img src={test} alt="test" className="" />
        <h2 className="text-2xl font-bold text-gray-700 mb-2">
          For individuals
        </h2>
        <p>
          Start benefiting from the wellness experience. For companies looking
          on increasing productivity, and improving organization wellness.
        </p>
      </div>
      <div className="">
        <form className="space-y-4">
          <div className="">
            <input type="text" placeholder="First Name" className="" />
            <input type="text" placeholder="" className="" />
            <input type="text" placeholder="" className="" />
            <input type="text" placeholder="" className="" />
            <input type="text" placeholder="" className="" />
            <input type="text" placeholder="" className="" />
          </div>
        </form>
      </div>
    </div>
  );
}
