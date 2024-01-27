import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { AiFillProfile } from "react-icons/ai";

const SideBar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div
      className={`fixed top-0 py-20 px-10 text-white sm:hidden right-0 h-screen w-full z-40 bg-dark-green transition-transform transform duration-300 ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div onClick={() => setIsSidebarOpen(false)} className="cursor-pointer">
        <IoClose size={50} color="#fff" />
      </div>

      <h1 className="pl-2 my-5 text-3xl font-medium">
        Welcome to <br /> Oxygrow Agrotech Pvt Ltd
      </h1>

      <div className="pl-2 my-10 links">
        <Link href={"/"} onClick={() => setIsSidebarOpen(false)}>
          <div className="flex items-center gap-2 my-3">
            <FaHome size={30} color="" /> <span className="text-2xl">Home</span>
          </div>
        </Link>
        <Link href={"/products"} onClick={() => setIsSidebarOpen(false)}>
          <div className="flex items-center gap-2 my-3">
            <FaCartArrowDown size={30} color="" />{" "}
            <span className="text-2xl">Products</span>
          </div>
        </Link>
        <Link href={"/contact"} onClick={() => setIsSidebarOpen(false)}>
          <div className="flex items-center gap-2 my-3">
            <BiSolidContact size={30} color="" />{" "}
            <span className="text-2xl">Contact Us</span>
          </div>
        </Link>
        <Link href={"/about"} onClick={() => setIsSidebarOpen(false)}>
          <div className="flex items-center gap-2 my-3">
            <AiFillProfile size={30} color="" />{" "}
            <span className="text-2xl">About Us</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
