import PrimaryBtn from "@/utility/PrimaryBtn";
import axios from "axios";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { IoHappyOutline } from "react-icons/io5";
import { ImSpinner } from "react-icons/im";
const InquiryBox = ({ setIsOpenInquiry, title }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenThankyouBox, setIsOpenThankyouBox] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    location: "",
    message: `I want to buy ${title}, and I would appreciate more information regarding this.`,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://www.oxygrowagrotech.com/api/sendEmail",
        {
          subject: title,
          fullname: formData.fullName,
          mobileNumber: formData.mobileNumber,
          location: formData.location,
          message: formData.message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data == "Success") {
        setIsOpenThankyouBox(true);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen text-white bg-[#0000003a] p-5 md:p-32 flex justify-center items-center">
      <div
        className={`relative bg-white w-full ${
          isLoading && "bg-gray-50"
        } lg:w-[60%] xl:w-[50%] 2xl:w-[40%]  text-black rounded-lg p-5 md:p-10`}
      >
        <div className="flex-row-reverse items-center justify-between lg:flex">
          <div
            className="mb-5 cursor-pointer"
            onClick={() => setIsOpenInquiry(false)}
          >
            <IoCloseOutline size={30} />
          </div>
          <div>
            <h2 className="mb-2 secondary-text">
              Send Inquiry <span className="italic text-dark-green">for</span>
            </h2>
            <h3 className="text-2xl">{title}</h3>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="mt-5">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full p-2 my-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="Mobile Number"
            required
            className="w-full p-2 my-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            required
            className="w-full p-2 my-2 border border-gray-300 rounded"
          />
          <textarea
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Please, Tell us your requirements!"
            className="w-full p-2 my-2 border border-gray-300 rounded resize-none"
            required
          ></textarea>
          <button
            type="submit"
            disabled={isLoading}
            className="flex items-center justify-center w-full p-2 my-2 text-white rounded bg-dark-green hover:bg-light-green"
          >
            <p>{isLoading ? "Please wait" : "Submit"}</p>
            {isLoading && (
              <div className="ml-2 animate-spin">
                <ImSpinner size={20} color="#fff" />
              </div>
            )}
          </button>
        </form>

        {isOpenThankyouBox && (
          <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full p-10 text-center bg-white rounded-lg lg:p-20 thankyou-box">
            <div
              className="flex items-start justify-start w-full cursor-pointer"
              onClick={() => setIsOpenInquiry(false)}
            >
              <IoCloseOutline size={30} />
            </div>

            <div>
              <IoHappyOutline size={100} />
            </div>
            <h2 className="my-5 text-2xl font-bold">
              Thankyou for your inquiry!
            </h2>
            <p className="my-5">
              We&apos;ve received your inquiry and are working on it. Expect a
              response soon. Feel free to explore our website in the meantime.
            </p>

            <PrimaryBtn text={"Explore our website"} path={"/"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default InquiryBox;
