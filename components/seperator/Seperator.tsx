import Image from "next/image";
import seperator from "../../assets/seperator.png";
const Seperator = () => {
  return (
    <Image
      src={seperator}
      alt="Seperator"
      className="absolute md:bottom-[-75px] lg:bottom-[-95px] max-w-[100%] bottom-[-50px] z-[100]"
    />
  );
};
export default Seperator;
