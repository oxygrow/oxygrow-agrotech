import PrimaryBtn from "@/utility/PrimaryBtn";
import HeroSvg from "../Assets/svgs/Hero.svg";
import CategoryCard from "@/components/CategoryCard";
import ProductCards from "@/components/ProductCards";
import Partner from "@/components/Partner";
import { getMatchedData } from "@/context/Firebase";
import Head from "next/head";
import { useEffect, useState } from "react";

export async function getStaticProps() {
  const products = await getMatchedData(8);

  return {
    props: {
      products,
    },
  };
}

const Index = ({ products }) => {
  const stats = [
    { firstHead: "Completed", count: "100k", secondHead: "Orders" },
    { firstHead: "Covered", count: "16", secondHead: "Countries" },
    { firstHead: "Exported", count: "54", secondHead: "Products" },
    { firstHead: "Experience", count: "8", secondHead: "Years" },
  ];

  const [contentIndex, setContentIndex] = useState(0);

  const contentSets = [
    {
      heading: "Top-Quality Rice, Exporting across Worldwide",
      description:
        "Discover the Best of Indian Rice! We&apos;re the leading exporter with 100K+ successful orders. Elevate your meals with our premium selection. Trusted, Quality, Worldwide.",
      imageSrc: "/images/RiceSlide.png",
    },
    {
      heading: "Nourishing the World with Superior Wheat Exports",
      description:
        "Our superior wheat products redefine quality. Pure, nutrient-rich, and versatile, catering to global markets. Elevate your baking and culinary experiences with our exceptional wheat.",
      imageSrc: "/images/WheatSlide.png",
    },
    {
      heading: "Maize Marvels: Exporting Quality for a Nutrient-Rich World",
      description:
        "Embrace maize excellence. Our exports deliver superior quality, nutritional richness, and versatility. From cornmeal to grits, enjoy the goodness of premium maize for a healthier world.",
      imageSrc: "/images/MaizeSlide.png",
    },
    {
      heading: "Pulses Perfection: Wholesome Goodness in Every Batch",
      description:
        "Savor protein-rich pulses. Carefully processed for maximum nutrition, our premium lentils and chickpeas bring wholesome goodness from trusted farms to your table",
      imageSrc: "/images/PulseSlide.png",
    },
    {
      heading: "Nutrient-Rich Cattle Feed for Healthy Livestock",
      description:
        "Elevate your livestock's well-being with our premium cattle feed. Packed with essential nutrients, our feed ensures robust health and optimal growth for your cattle.",
      imageSrc: "/images/BranSlide.png",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % contentSets.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const currentContent = contentSets[contentIndex];

  return (
    <>
      <Head>
        <title>
          Oxygrow Agrotech Pvt Ltd | Premium Exporter of Basmati Rice, Non
          Basmati Rice, Grains, and Cattle Feed
        </title>
        <meta
          name="description"
          content="Elevate your international trade with our top-notch exports! As a leading exporter, we deliver superior quality rice, grains, and cattle feed worldwide. Trust us for excellence in agricultural products and reliable global distribution."
        />
        <link
          rel="canonical"
          href={`https://www.oxygrowagrotech.com/`}
          key="canonical"
        />
      </Head>
      <div className="container p-8 mx-auto">
        <div className="flex-row-reverse items-center justify-between my-8 transition-opacity duration-1000 ease-in-out opacity-100 animate-fade lg:flex">
          <div
            className="w-full bg-center bg-no-repeat bg-contain lg:w-[50%] flex items-center justify-center"
            style={{
              backgroundImage: `url(${HeroSvg.src})`,
            }}
          >
            <img
              src={currentContent.imageSrc}
              alt="kjg"
              priority
              className="object-contain"
            />
          </div>
          <div className="pb-0 text-center lg:text-left lg:w-[50%]">
            <span className="text-lg font-medium text-dark-green">
              #IndianExporter
            </span>
            <h1 className="primary-text">{currentContent.heading}</h1>
            <p className="mb-10 description-text">
              {currentContent.description}
            </p>
            <PrimaryBtn text={"View Products"} path={"/products"} />
          </div>
        </div>

        <CategoryCard />

        <div className="my-20 text-center top-selling-poducts">
          <h1 className="mb-5 secondary-text">
            Best Selling Exports - Explore Our Top Shipped Products
          </h1>
          <p className="description text ">
            Discover what the world loves! Our most-sent products, top picks
            loved by customers everywhere. Explore and experience the global
            favorites we proudly export.
          </p>

          <ProductCards products={products} />
        </div>

        <div className="flex-row-reverse items-center justify-between pt-0 about lg:flex">
          <div className=" mb-10 text-center details lg:text-left w-[100%] lg:p-10">
            <h1 className="mb-3 secondary-text">Who we are?</h1>
            <p className="description">
              Choose Oxygrow Agro Tech Pvt Ltd, for a commitment to premium
              quality, global accessibility, and a customer-centric approach.
              With a proven track record of over 100,000 successful orders
              across 16+ different countries, we pride ourselves on delivering a
              diverse selection of top-notch products.
            </p>
            <div className="grid grid-cols-2 gap-5 p-5 my-10 rounded-md lg:mb-0 lg:grid-cols-4 primary-shadow">
              {stats.map((stat, index) => {
                return (
                  <div
                    className="flex flex-col p-5 text-center border rounded-md"
                    key={index}
                  >
                    <span>{stat.firstHead}</span>
                    <span className="text-xl font-semibold ">
                      {stat.count}+
                    </span>
                    <span>{stat.secondHead}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative w-full h-52 lg:h-[450px] youtube-intro">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/xfh6InIrJf0?si=jSfKBdEIU5E4lOE_"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute"
            ></iframe>
          </div>
        </div>

        <Partner />
      </div>
    </>
  );
};

export default Index;
