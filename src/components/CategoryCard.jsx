import Image from "next/image";
import React from "react";
import CategoryNonBasmati from "../Assets/images/categoryRice.png";
import CategoryGrains from "../Assets/images/categoryGrains.jpg";
import CategoryPulses from "../Assets/images/categoryPulses.jpg";
import CategoryBasmati from "../Assets/images/categoryBasmati.jpg";
import CategoryFeed from "../Assets/images/categoryFeed.jpg";
import Link from "next/link";

const Card = ({ title, productCount, imgLocation }) => {
  return (
    <Link href={`/category/${title.replace(/\s/g, "").toLowerCase()}`}>
      <div className="relative w-full p-8 text-left rounded-lg primary-shadow h-80">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <h3>{productCount} products</h3>
        <div className="absolute bottom-0 left-0 w-full h-40 rounded-b-lg bg-dark-green">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 315"
            className="absolute z-10 rotate-180 border-none"
          >
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,288L48,256C96,224,192,160,288,122.7C384,85,480,75,576,80C672,85,768,107,864,128C960,149,1056,171,1152,149.3C1248,128,1344,64,1392,32L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <Image
            src={imgLocation}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
    </Link>
  );
};

const CategoryCard = () => {
  return (
    <section className="text-center">
      <h1 className="my-5 secondary-text">
        Delivered Excellence Across Diverse Categories
      </h1>
      <p className="mb-10 description-text">
        Explore our diverse categories with pride, Delivered it all!
      </p>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <Card
          title={"Basmati"}
          productCount={"12"}
          imgLocation={CategoryBasmati.src}
        />
        <Card
          title={"Non Basmati"}
          productCount={"10"}
          imgLocation={CategoryNonBasmati.src}
        />
        <Card
          title={"Grains"}
          productCount={"12"}
          imgLocation={CategoryGrains.src}
        />
        <Card
          title={"Pulses"}
          productCount={"8"}
          imgLocation={CategoryPulses.src}
        />

        <Card
          title={"Cattle Feed"}
          productCount={"5"}
          imgLocation={CategoryFeed.src}
        />
      </div>
    </section>
  );
};

export default CategoryCard;
