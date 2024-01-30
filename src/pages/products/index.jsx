import Image from "next/image";
import React from "react";
import ProductHero from "@/Assets/svgs/HeroProduct.svg";
import CategoryCard from "@/components/CategoryCard";
import ProductCards from "@/components/ProductCards";
import Link from "next/link";
import { getMatchedData } from "@/context/Firebase";
import Head from "next/head";

export async function getStaticProps() {
  const products = await getMatchedData();

  return {
    props: {
      products,
    },
  };
}
const products = ({ products }) => {
  return (
    <>
      <Head>
        <title>Products | We trade in more than 54+ Items</title>
        <meta
          name="description"
          content="Explore our extensive range of agricultural exports, featuring the finest rice varieties, diverse grains, and nutrient-packed cattle feed."
        />
        <link
          rel="canonical"
          href={`https://oxygrowagrotech.com/products`}
          key="canonical"
        />
      </Head>

      <section className="container p-8 mx-auto ">
        <div className="flex-row-reverse items-center justify-between hero md:flex">
          <div className="img md:w-[50%] flex items-end justify-end mb-10">
            <Image src={ProductHero} alt="hero-product-image" priority />
          </div>
          <div className="text md:w-[50%] text-center md:text-left">
            <div className="mb-10 text-lg font-medium text-dark-green">
              <Link href={"/"} className="hover:text-light-green">
                Home
              </Link>{" "}
              <span>{`>>`}</span>{" "}
              <Link href={"/products"} className="hover:text-light-green">
                Products
              </Link>
            </div>
            <h1 className="primary-text">
              Explore Our Full Collection, All Products in One Place
            </h1>
            <p className="description-text">
              From aromatic Basmati to versatile grains and nourishing cattle
              feed, we&apos;ve got it all. Choose excellence with our premium
              products – where quality meets simplicity on your plate and in
              your fields..
            </p>
          </div>
        </div>

        <CategoryCard />
        <ProductCards
          isProductHeading={true}
          productHeading={"All Product: Explore Our Range of Quality Products"}
          products={products}
        />
      </section>
    </>
  );
};

export default products;
