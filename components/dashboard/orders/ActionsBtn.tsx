import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import { useState, useRef, useEffect } from "react";

const ActionsBtn = ({
  setOrderInfo,
  order,
  setShowOrderInfo,
}: {
  setOrderInfo: any;
  order: OrderObj;
  setShowOrderInfo: any;
}) => {
  const [active, setActive] = useState(false);
  const buttonsRef = useRef(null);
  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setActive(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(buttonsRef);
  const handleOrderInfo = () => {
    setOrderInfo(order);
    setShowOrderInfo(true);
  };
  return (
    <div className="relative " ref={buttonsRef}>
      <button
        onClick={() => setActive(!active)}
        className="bg-black relative text-white shadow-[0px_2px_10px_0px_#0000007d]  px-[40px] py-[5px] rounded-[3px] h-fit hover:bg-white hover:text-black transition-all ease-in-out"
      >
        Actions
      </button>
      <div
        className={`${
          active ? "flex" : "hidden"
        } absolute top-[35px] z-[1]  text-[14px]  flex-col items-start p-1 left-0 w-[100%] text-black bg-white rounded-[3px] shadow-[0px_4px_4px_0px_#0000003e]`}
      >
        <button
          onClick={() => {
            handleOrderInfo();
            setActive(false);
          }}
          className="flex items-center w-[100%] py-1 hover:translate-x-[6px] transition-all ease-in-out"
        >
          Order Info <CgDetailsMore className="text-[20px] ml-[35px]" />
        </button>
        <button className="flex items-center w-[100%] py-1 hover:translate-x-[6px] transition-all ease-in-out">
          Edit Order <FaRegEdit className="text-[17px] ml-[35px]" />
        </button>
        <button className="flex items-center w-[100%] py-1 hover:translate-x-[6px] transition-all ease-in-out">
          Delete Order{" "}
          <MdOutlineDeleteOutline className="text-[20px] ml-[15px] " />
        </button>
      </div>
    </div>
  );
};
export default ActionsBtn;
