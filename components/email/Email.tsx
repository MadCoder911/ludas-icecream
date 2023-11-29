import "./email.css";
const Email = () => {
  return (
    <div className="bg-Email h-[400px] max-w-[100vw] flex items-center justify-center">
      <div className="pt-[50px] md:pt-[150px] container md:w-[45%]  w-[90%] text-center ">
        <h1 className="text-white font-semibold text-[18px] md:text-[28px]">
          Be the first to know about our latest flavors !
        </h1>
        <div className="flex flex-col md:flex-row max-w-[100%] justify-between items-center mt-2">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className="rounded-[5px] grow px-2 hover:outline-none] py-[5px] w-[80%] lg:w-[70%] focus:outline-none font-medium  shadow-[0px_7px_10px_0px_#00000024] "
          />
          <button className="bg-white rounded-[5px] md:ml-2 px-[30px] py-[5px] w-[50%] lg:w-[30%] shadow-[0px_7px_10px_0px_#00000024] mt-[10px] md:mt-0  ">
            Subscribe{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Email;
