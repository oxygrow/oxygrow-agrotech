import ProductCards from "@/components/ProductCards";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { getMatchedData } from "@/context/Firebase";
import Head from "next/head";

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          name: "basmati",
        },
        params: {
          name: "nonbasmati",
        },
        params: {
          name: "grains",
        },
        params: {
          name: "pulses",
        },
        params: {
          name: "cattlefeed",
        },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const products = await getMatchedData(50, params.name);

  return {
    props: {
      products,
    },
  };
}

const Category = ({ products }) => {
  const router = useRouter();
  const { name } = router.query;

  const categoryData = {
    basmati: {
      title: "Basmati Rice",
      productCnt: "9",
      description:
        "Basmati rice is a long-grain variety known for its fragrance and fluffy texture, mainly cultivated in the Himalayan foothills of India.",
    },
    nonbasmati: {
      title: "Non Basmati Rice",
      productCnt: "10",
      description:
        "Widely consumed worldwide, non-basmati rice serves as a staple in various cultures, offering versatility.",
    },
    grains: {
      title: "Grains",
      productCnt: "11",
      description:
        "Boost your nutrition with our grains. Quinoa, barley, bulgur – we've got your healthy eating covered. Enjoy a diverse range for a balanced lifestyle.",
    },
    pulses: {
      title: "Pulses",
      productCnt: "6",
      description:
        "Power up with protein! Our pulses, from lentils to chickpeas, are pure goodness. Nutrient-packed essentials for tasty and healthy meals.",
    },

    cattlefeed: {
      title: "Cattle Feed",
      productCnt: "4",
      description:
        "Keep your animals thriving with our quality cattle feed. Specially crafted for health and productivity, trust us for the best nutrition for your livestock.",
    },

    // Add more categories as needed
  };

  const { title, description, productCnt } = categoryData[name] || {};

  if (!title) {
    return <div>Category not found</div>;
  }

  return (
    <>
      <Head>
        <title>{`${title} Exporter | Checkout and Send Inquiry`}</title>
        <meta name="description" content={description} />
        <link
          rel="canonical"
          href={`https://oxygrowagrotech.com/category/${name}`}
          key="canonical"
        />
      </Head>

      <section>
        <div
          className="cat-bg h-[400px] md:h-[550px] flex justify-center items-center relative"
          style={{
            backgroundImage: `url('/images/${name}Category.jpg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="container z-30 p-8 mx-auto text-center text-white description lg:px-96">
            <div className="mb-10 text-lg font-medium">
              <Link href={"/"} className="hover:text-gray-200">
                Home
              </Link>{" "}
              <span>{`>>`}</span>{" "}
              <Link href={"/products"} className="hover:text-gray-200">
                Products
              </Link>{" "}
              <span>{`>>`}</span>{" "}
              <Link
                href={`/category/${name}`}
                className="capitalize hover:text-gray-200"
              >
                {name}
              </Link>
            </div>
            <span className="text-lg font-medium">#indianExporter</span>
            <h1 className="primary-text">{`${title} | ${productCnt} Products`}</h1>
            <p className="text-xl">{description}</p>
          </div>
        </div>

        <div className="container p-8 mx-auto">
          <ProductCards products={products} />
        </div>
      </section>
    </>
  );
};

export default Category;
