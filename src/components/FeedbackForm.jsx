import React, { useState } from "react";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    message: "",
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
    console.log("Form data submitted:", formData);
    // You can add your logic here to send the data to the server
  };

  return (
    <form
      className="w-full p-5 my-10 rounded-md lg:p-16 primary-shadow"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="John"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Doe"
            required
          />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="email@example.com"
          required
        />
      </div>
      <div className="mt-4">
        <label htmlFor="mobileNo">Mobile No:</label>
        <input
          type="number"
          id="mobileNo"
          name="mobileNo"
          value={formData.mobileNo}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="+915486217986"
          required
        />
      </div>
      <div className="mt-4">
        <label htmlFor="message">Message:</label>
        <textarea
          rows={5}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded resize-none"
          placeholder="What's your query or feedback?"
          required
        ></textarea>
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="w-full p-2 text-white rounded bg-dark-green hover:bg-light-green"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
