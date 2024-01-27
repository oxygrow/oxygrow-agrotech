import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { getImageURL, getMatchedData } from "@/context/Firebase";
import Image from "next/image";
import BlurPlaceholder from "@/Assets/images/BlurPlaceholder.jpg";

const Card = ({ title, image, path, shortdescription, setIsOpen }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const url = async (URL) => {
      const uri = await getImageURL(URL);
      setUrl(uri);
    };
    url(image);
  }, [image]);

  return (
    <Link href={`/products/${path}`}>
      <div
        className="w-full my-10 md:flex lg:h-40 primary-shadow"
        onClick={() => setIsOpen(false)}
      >
        <div className="w-[100%] lg:w-[20%] lg:h-40 relative overflow-hidden">
          {url ? (
            <Image
              src={url}
              alt={title}
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
        <div className="p-10">
          <h3 className="text-xl font-medium">{title}</h3>
          <p className="text-lg">{shortdescription}</p>
        </div>
      </div>
    </Link>
  );
};
const SearchBox = ({ setIsOpen }) => {
  const [items, setItems] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(null);
  const [searchTimeout, setSearchTimeout] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getMatchedData();
      setData(result);
    };
    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = data.filter((item) =>
          item.data.keywords.includes(searchText.toLowerCase())
        );
        setItems(searchResult);
      }, 500)
    );
  };

  return (
    <div className="fixed w-full h-[100vh] top-0 left-0 bg-white overflow-hidden z-50">
      <div className="w-full h-20 px-8 lg:h-32 bg-gray-50 lg:px-0">
        <div className="container mx-auto">
          <div className="relative w-full h-20 lg:h-32">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search Products to Send Inquiry..."
              className="w-full h-full pr-24 text-3xl font-medium border-none bg-gray-50 focus:outline-none"
              autoFocus
              onChange={handleSearchChange}
            />
            <div
              onClick={() => setIsOpen(false)}
              className="absolute right-0 cursor-pointer lg:top-10 top-4"
            >
              <IoCloseOutline size={50} color="#9CA3AF" />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`container mx-auto w-full  h-[calc(100vh-128px)] overflow-y-scroll no-scrollbar ${
          items.length <= 0 && "flex justify-center items-center"
        }`}
      >
        {items.length > 0 ? (
          <div className="p-8 lg:p-0">
            {items?.map((item) => {
              return (
                <Card key={item.id} {...item.data} setIsOpen={setIsOpen} />
              );
            })}
          </div>
        ) : (
          <div className="text-2xl font-medium lg:text-4xl">No Items</div>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
