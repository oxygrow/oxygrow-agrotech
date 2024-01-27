import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getImageURL } from "@/context/Firebase";
import BlurPlaceholder from "@/Assets/images/BlurPlaceholder.jpg";

const Card = ({ imgURl, title, shortDesription }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const url = async (URL) => {
      const uri = await getImageURL(URL);
      setUrl(uri);
    };
    url(imgURl);
  }, [imgURl]);

  return (
    <div className="p-5 text-center rounded-md card primary-shadow">
      <div className="relative w-full mb-3 rounded-md image-box h-60">
        {url ? (
          <Image
            src={url}
            alt={title}
            className="rounded-md"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <Image
            src={BlurPlaceholder}
            alt="no=image"
            className="absolute w-full h-full"
          />
        )}
      </div>
      <h3 className="mb-3 subheading">{title}</h3>
      <p className="mb-6 subdescription">{shortDesription}</p>
      <button
        type="button"
        className="w-full h-12 text-white rounded-md bg-dark-green"
      >
        View Detailes
      </button>
    </div>
  );
};

const ProductCards = ({ isProductHeading, productHeading, products }) => {
  return (
    <section className="py-10 cards">
      {isProductHeading && (
        <h2 className="mb-10 text-2xl font-semibold text-center md:text-3xl md:text-left">
          {productHeading}
        </h2>
      )}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products?.map((product) => {
          return (
            <Link
              href={`/products/${product.data.path}`}
              key={product.data.path}
            >
              <Card
                title={product.data.title}
                imgURl={product.data.image}
                shortDesription={product.data.shortdescription}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ProductCards;
