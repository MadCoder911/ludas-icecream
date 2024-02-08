import Image from "next/image";
import logo from "../../assets/black_logo.svg";
import Link from "next/link";
const DesktopNav = () => {
  return (
    <div className="w-[250px] h-[100vh] rounded-tr-[50px] rounded-br-[50px] shadow-[10px_0px_20px_1px_#00000030]">
      <Link href={"/dashboard"}>
        <Image
          src={logo}
          alt="logo"
          height={149}
          width={176}
          className="ml-[10px]"
        />
      </Link>
      <div className="flex flex-col items-start gap-[15px]">
        <Link
          href={"/dashboard/orders"}
          className="ml-[25px] font-semibold text-[18px] mt-[10px] hover:scale-110 transition-all ease-in-out"
        >
          Orders
        </Link>
        <Link
          href={"/dashboard/products"}
          className="ml-[25px] font-semibold text-[18px] mt-[10px] hover:scale-110 transition-all ease-in-out"
        >
          Products
        </Link>
        <Link
          href={"/dashboard/sales"}
          className="ml-[25px] font-semibold text-[18px] mt-[10px] hover:scale-110 transition-all ease-in-out"
        >
          Sales
        </Link>
        <Link
          href={"/dashboard/messages"}
          className="ml-[25px] font-semibold text-[18px] mt-[10px] hover:scale-110 transition-all ease-in-out"
        >
          Messages
        </Link>
        <Link
          href={"/dashboard/accounts"}
          className="ml-[25px] font-semibold text-[18px] mt-[10px] hover:scale-110 transition-all ease-in-out"
        >
          Accounts
        </Link>
        <Link
          href={"/dashboard/expenses"}
          className="ml-[25px] font-semibold text-[18px] mt-[10px] hover:scale-110 transition-all ease-in-out"
        >
          Expenses tracker
        </Link>
      </div>
    </div>
  );
};
export default DesktopNav;
