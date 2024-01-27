import React from "react";
import { products } from "@/utils/FooterProducts.js";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";
import Link from "next/link";
import Logo from "@/Assets/images/logo.png";
import Image from "next/image";
const Footer = () => {
  return (
    <section className="w-full pb-0 text-white p-14 bg-dark-green">
      <div className="container mx-auto">
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <div className="intro-section">
            <div className="w-32 p-3 mb-5 bg-white border-b-2 border-l-2 border-r border-solid rounded-md border-light-green">
              <Link href={"/"}>
                <Image src={Logo} alt="Oxygrow Agrotech Logo" width={100} />
              </Link>
            </div>
            <div className="flex items-center justify-start gap-2 my-2">
              <div>
                <FaLocationDot size={20} color="#fff" />
              </div>
              <p>
                Parvati Utsav Garden, <br /> Civil Lines, Etawah,
                <br /> UP – 206001, India
              </p>
            </div>
            <div className="flex items-center justify-start gap-2 my-2">
              <div>
                <FaPhoneAlt size={20} color="#fff" />
              </div>
              <p>
                +91 9627740999, <br /> +91 9760082990
              </p>
            </div>
          </div>

          {products.map((product, index) => {
            return (
              <div key={index}>
                <h2 className="mb-2 text-lg font-bold">{product.category}</h2>
                {product.items.map((item, index) => {
                  return (
                    <Link href={item.path} key={index}>
                      <div className="text-sm hover:underline">{item.name}</div>
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full py-5 mt-10 font-semibold border-t-2 border-white foot-bar">
        <div className="flex items-center justify-center gap-2 my-2">
          <div>
            <FaRegCopyright size={20} color="#fff" />
          </div>
          <p>All rights reserved for Oxygrow Agrotech Pvt Ltd</p>
        </div>
        <div className="flex items-center justify-center gap-2 my-2">
          <div>
            <MdMarkEmailUnread size={20} color="#fff" />
          </div>

          <p>oxygrowagrotech@yahoo.com</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
