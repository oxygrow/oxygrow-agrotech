import React, { useState } from "react";

const Newsletter = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to server)
    console.log("Subscribe form data submitted:", formData);
    // You can add your logic here to send the data to the server
  };

  return (
    <section className="container p-8 mx-auto my-10 md:text-center">
      <h1 className="mb-2 text-xl font-semibold md:text-4xl">
        Join Our Newsletter
      </h1>
      <p className="description-text">
        Subscribe to Our Newsletter for Exclusive Updates and Offers.
      </p>
      <form
        className="max-w-md mx-auto mt-8 lg:mt-0 lg:max-w-fit lg:flex"
        onSubmit={handleSubmit}
      >
        <div className="mt-4">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border-2 border-black rounded lg:border-r-0 lg:rounded-none "
            placeholder="Name"
            required
          />
        </div>
        <div className="mt-4">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border-2 border-black rounded lg:border-r-0 lg:rounded-none "
            placeholder="Email Address"
            required
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="w-full h-full p-2 text-white rounded lg:rounded-none bg-dark-green hover:bg-light-green"
          >
            Subscribe
          </button>
        </div>
      </form>
    </section>
  );
};

export default Newsletter;
