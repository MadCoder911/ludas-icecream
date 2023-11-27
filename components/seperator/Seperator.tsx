import Image from "next/image";
import seperator from "../../assets/seperator.png";
const Seperator = () => {
  return (
    <Image
      src={seperator}
      alt="Seperator"
      className="absolute bottom-[-70px] z-[100]"
    />
  );
};
export default Seperator;
