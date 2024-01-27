import Image from "next/image";
import Logo from "@/Assets/images/logo.png";
import { CgMenuRight } from "react-icons/cg";
import { IoMdSearch } from "react-icons/io";
import Link from "next/link";
import { useState } from "react";
import SearchBox from "./SearchBox";
import SideBar from "./SideBar";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav className="bg-dark-green">
      <div className="container flex items-center justify-between p-8 mx-auto sm:py-8">
        <div className="p-3 bg-white border-b-2 border-l-2 border-r border-solid rounded-md border-light-green ">
          <Link href={"/"}>
            <Image src={Logo} alt="Oxygrow Agrotech Logo" width={100} />
          </Link>
        </div>

        <div className="hidden nav-links sm:block">
          <ul className="flex items-center justify-between gap-10 text-lg font-medium text-white">
            <Link href={"/"}>
              <li className="cursor-pointer relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                Home
              </li>
            </Link>

            <Link href={"/products"}>
              <li className="cursor-pointer relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                Products
              </li>
            </Link>

            <Link href={"/contact"}>
              <li className="cursor-pointer relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                Contact
              </li>
            </Link>

            <Link href={"/about"}>
              <li className="cursor-pointer relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                About
              </li>
            </Link>
          </ul>
        </div>

        <div className="flex items-center justify-between">
          <span className="mr-3 cursor-pointer" onClick={() => setIsOpen(true)}>
            <IoMdSearch size={40} color="#fff" />
          </span>
          <span className="cursor-pointer sm:hidden">
            <CgMenuRight
              size={40}
              color="#fff"
              onClick={() => setIsSidebarOpen(true)}
            />
          </span>
        </div>
      </div>
      {isOpen && <SearchBox setIsOpen={setIsOpen} />}
      <SideBar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </nav>
  );
};

export default Navbar;
