import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BlurPlaceholder from "@/Assets/images/BlurPlaceholder.jpg";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

import {
  getImageURL,
  getMatchedData,
  getSingleProduct,
} from "@/context/Firebase";
import Head from "next/head";
import ProductCards from "@/components/ProductCards";
import InquiryBox from "@/components/InquiryBox";

export async function getStaticPaths() {
  const products = await getMatchedData();

  const paths = products.map((product) => {
    return {
      params: {
        title: product?.data?.path?.toString(),
      },
    };
  });

  return {
    paths,
    fallback: true, // false or "blocking"
  };
}

export async function getStaticProps({ params }) {
  const product = await getSingleProduct(params.title);
  const relatedProducts = await getMatchedData(
    4,
    product.category,
    params.title
  );

  if (!product) {
    return {
      notFound: true, // Return a 404 page if the product is not found
    };
  }

  return {
    props: {
      product: product || null, // Use null if product is undefined
      relatedProducts,
    },
  };
}

const Product = ({ product, relatedProducts }) => {
  const [url, setUrl] = useState("");
  const [isOpenInquiry, setIsOpenInquiry] = useState(false);

  useEffect(() => {
    const url = async (URL) => {
      const uri = await getImageURL(URL);
      setUrl(uri);
    };
    url(product?.image);
  }, [product?.image]);

  return (
    <>
      <Head>
        <title>{`${product?.title} | Best Quality, Competitive Price, and Trusted Exporter`}</title>
        <meta name="description" content={`${product?.shortdescription}`} />
        <link
          rel="canonical"
          href={`https://www.oxygrowagrotech.com/products/${product?.path}`}
          key="canonical"
        />
      </Head>

      <section className="container p-8 mx-auto">
        <div className="pb-3 text-lg font-medium text-center md:py-10 lg:mb-10 lg:text-left bread-crums text-dark-green">
          <Link href={"/"} className="hover:text-light-green">
            Home
          </Link>{" "}
          <span>{`>>`}</span>
          <Link href={"/products"} className="hover:text-light-green">
            Products
          </Link>
          <span>{`>>`}</span>
          <Link
            href={`/products/${product?.path}`}
            className="hover:text-light-green"
          >
            {product?.title}
          </Link>
        </div>
        <div className="mb-16 text-center lg:flex lg:text-left hero-container ">
          <div className="relative flex items-center w-full h-64 lg:h-[600px] justify-center img-box lg:w-[50%]">
            {url ? (
              <Image
                src={url}
                alt={product?.title}
                className="rounded-md"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            ) : (
              <Image
                src={BlurPlaceholder}
                alt="no=image"
                priority
                className="absolute w-full h-full"
              />
            )}
          </div>
          <div className="description-container lg:pl-10 lg:w-[50%]">
            <h1 className="primary-text lg:my-0">{product?.title}</h1>
            <p className="description-text">{product?.shortdescription}</p>
            <div className="mb-5 text-2xl font-bold">
              &#x20B9; {product?.price} / KG
            </div>

            <div className="mb-5 text-left stats">
              {product?.stats.map((stat) => {
                return (
                  <div
                    key={stat.id}
                    className="flex items-center mb-5 text-lg "
                  >
                    <h3 className="font-bold mr-5 lg:mr-10 w-[50%]">
                      {stat.heading}
                    </h3>
                    <p className="w-[50%]">{stat.value}</p>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setIsOpenInquiry(true)}
              className="px-8 py-3 text-sm font-medium text-center text-white rounded-full h-14 bg-dark-green hover:bg-light-green focus:outline-none focus:ring-4 focus:ring-green-300 me-2"
            >
              Send Inquiry
            </button>
          </div>
        </div>

        <div className="long-description">
          <h2 className="my-3 text-3xl font-medium">Description</h2>
          <p className="mb-10 description">{product?.description}</p>
        </div>

        <div className="specs-table">
          <h2 className="my-3 text-3xl font-medium">Specifications</h2>
          <div className="w-full">
            <Table isStriped aria-label="Example static collection table ">
              <TableHeader>
                <TableColumn key="heading"></TableColumn>
                <TableColumn key="value"></TableColumn>
              </TableHeader>
              <TableBody>
                {product?.specifications.map((spec) => {
                  return (
                    <TableRow key={spec.id} className="text-lg">
                      <TableCell className="md:w-[30%] p-5 font-semibold  bg-slate-100">
                        {spec.heading}
                      </TableCell>
                      <TableCell className="md:w-[70%] p-5 bg-slate-50">
                        {spec.value}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>

        <ProductCards
          isProductHeading={true}
          productHeading={"Top Related Products"}
          products={relatedProducts}
        />

        {isOpenInquiry && (
          <InquiryBox
            isOpenInquiry={isOpenInquiry}
            setIsOpenInquiry={setIsOpenInquiry}
            title={product?.title}
          />
        )}
      </section>
    </>
  );
};

export default Product;
