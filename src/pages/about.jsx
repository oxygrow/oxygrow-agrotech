import React from "react";
import Mill from "@/Assets/images/mill.jpg";
import Image from "next/image";
import Apeda from "@/Assets/certificates/Apeda.jpg";
import Fssai from "@/Assets/certificates/Fassai.jpg";
import GSTCertificate from "@/Assets/certificates/GST.jpg";
import IECCertificate from "@/Assets/certificates/IEC.jpg";
import Incorporation from "@/Assets/certificates/Incorporation.jpg";
import Trademark from "@/Assets/certificates/Trademark.jpg";
import Udyam from "@/Assets/certificates/Udyam.jpg";
import ISOCertificate from "@/Assets/certificates/ISO.jpeg";
import Partner from "@/components/Partner";
import Head from "next/head";

const about = () => {
  const stats = [
    { firstHead: "Completed", count: "100k", secondHead: "Orders" },
    { firstHead: "Covered", count: "16", secondHead: "Countries" },
    { firstHead: "Exported", count: "54", secondHead: "Products" },
    { firstHead: "Experience", count: "8", secondHead: "Years" },
  ];
  return (
    <>
      <Head>
        <title>About Us | Exporting 54+ products for over 8 years</title>
        <meta
          name="description"
          content="we've been exporting a diverse range of 54+ high-quality products for over 8 years. Trust in our commitment to delivering top-tier goods, cultivated through years of expertise and customer satisfaction."
        />
        <link
          rel="canonical"
          href={`https://oxygrowagrotech.com/about`}
          key="canonical"
        />
      </Head>
      <section className="container p-8 mx-auto">
        <div className="grid gap-10 my-16 lg:grid-cols-2">
          <div className="lg:col-start-2">
            <Image src={Mill} alt="" className="rounded-lg" />
          </div>
          <div className="p-10 rounded-lg lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:p-20 primary-shadow">
            <span className="text-lg font-medium text-dark-green">
              Welcome to
            </span>
            <h1 className="primary-text">Oxgrow Agro Tech Pvt Ltd</h1>
            <p className="description-text">
              we take pride in delivering top-quality rice products to customers
              worldwide. Our journey, rooted in a passion for agriculture, has
              grown from a local enterprise to a trusted international brand.
              At, we prioritize quality, sustainability, and customer
              satisfaction. With stringent quality control measures, ethical
              farming practices, and a global reach, we aim to be the preferred
              choice for premium rice. Thank you for considering us as your
              trusted source for the finest grains that unite cultures and
              communities worldwide.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 p-10 primary-shadow lg:p-20">
            {stats.map((stat, index) => {
              return (
                <div
                  className="flex flex-col p-5 text-center border rounded-md"
                  key={index}
                >
                  <span>{stat.firstHead}</span>
                  <span className="text-xl font-semibold ">{stat.count}+</span>
                  <span>{stat.secondHead}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="my-10 mt-32 mb-10 text-center secondary-text">
            8+ Years of Expertise in Exporting
          </h2>
          <div className="relative w-full h-60 lg:h-[80vh]">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/xfh6InIrJf0?si=9uCqiZAzuEBRujN8"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute"
            ></iframe>
          </div>
        </div>

        <div className="mb-16 lg:mb-28">
          <h1 className="my-10 text-center secondary-text lg:my-16">
            Certificates
          </h1>
          <div className="grid grid-cols-2 gap-10 lg:gap-20 lg:grid-cols-4">
            <div className="text-center ">
              <a
                href="https://firebasestorage.googleapis.com/v0/b/oxygrow-backend-api.appspot.com/o/uploads%2Fcertificates%2FApedaCertificate.pdf?alt=media&token=dadd17e5-3d02-4e90-a400-c90bbe4b5cfd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={Apeda}
                  alt="apeda-certificate"
                  className="mb-5 border border-black"
                />
              </a>
              <span className="text-lg font-medium uppercase">Apeda</span>
            </div>
            <div className="text-center ">
              <a
                href="https://firebasestorage.googleapis.com/v0/b/oxygrow-backend-api.appspot.com/o/uploads%2Fcertificates%2FFassaiCertificate.pdf?alt=media&token=ffebc06e-636d-430d-a379-1fde3dd5b219"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={Fssai}
                  alt="apeda-certificate"
                  className="mb-5 border border-black"
                />
              </a>
              <span className="text-lg font-medium uppercase">Fssai</span>
            </div>
            <div className="text-center ">
              <a
                href="https://firebasestorage.googleapis.com/v0/b/oxygrow-backend-api.appspot.com/o/uploads%2Fcertificates%2FTradeMarkCertificate.pdf?alt=media&token=3b702c99-79e3-44f3-b510-12d1aa518fca"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={Trademark}
                  alt="apeda-certificate"
                  className="mb-5 border border-black"
                />
              </a>
              <span className="text-lg font-medium uppercase">Trade Mark</span>
            </div>
            <div className="text-center ">
              <a
                href="https://firebasestorage.googleapis.com/v0/b/oxygrow-backend-api.appspot.com/o/uploads%2Fcertificates%2FGSTCertificate.pdf?alt=media&token=1189a2c5-fb53-4539-bfea-01c9e9e62721"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={GSTCertificate}
                  alt="apeda-certificate"
                  className="mb-5 border border-black"
                />
              </a>
              <span className="text-lg font-medium uppercase">
                GST Certificate
              </span>
            </div>
            <div className="text-center ">
              <a
                href="https://firebasestorage.googleapis.com/v0/b/oxygrow-backend-api.appspot.com/o/uploads%2Fcertificates%2FIECCertificate.pdf?alt=media&token=64ad9a8c-dc0e-46ba-814e-414c4977d825"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={IECCertificate}
                  alt="apeda-certificate"
                  className="mb-5 border border-black"
                />
              </a>
              <span className="text-lg font-medium uppercase">
                IEC Certificate
              </span>
            </div>
            <div className="text-center ">
              <a
                href="https://firebasestorage.googleapis.com/v0/b/oxygrow-backend-api.appspot.com/o/uploads%2Fcertificates%2FCertificateOfIncorporation.PDF?alt=media&token=2997b197-9ba0-4906-aff6-664109a55f45"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={Incorporation}
                  alt="apeda-certificate"
                  className="h-[72%] lg:h-[90%] mb-5 border border-black"
                />
              </a>
              <span className="text-lg font-medium uppercase">
                Incorporation
              </span>
            </div>
            <div className="text-center ">
              <a
                href="https://firebasestorage.googleapis.com/v0/b/oxygrow-backend-api.appspot.com/o/uploads%2Fcertificates%2FUdyamCertificate.pdf?alt=media&token=62c611ff-5c17-4e6a-9603-83a4a0626bb2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={Udyam}
                  alt="apeda-certificate"
                  className="mb-5 border border-black"
                />
              </a>
              <span className="text-lg font-medium uppercase">
                Udyam Certificate
              </span>
            </div>
            <div className="text-center ">
              <a
                href="https://firebasestorage.googleapis.com/v0/b/oxygrow-backend-api.appspot.com/o/uploads%2Fcertificates%2FISOCertificate.pdf?alt=media&token=15fa910d-9088-4f7e-a24f-0563f70d3014"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={ISOCertificate}
                  alt="apeda-certificate"
                  className="mb-5 border border-black"
                />
              </a>
              <span className="text-lg font-medium uppercase">
                ISO Certificate
              </span>
            </div>
          </div>
        </div>

        <Partner />
      </section>
    </>
  );
};

export default about;
