import React from "react";

const ContactUs = () => {
  return (
    <div
      className="flex justify-center gap-48 mt-20 text-white w-full h-1/2 p-40"
      style={{ background: "rgba(0, 103, 177, 1)" }}
    >
      {" "}
      <div className="p-4 h-8/12">
        <h2 className="text-2xl font-bold mb-2">Get in touch</h2>
        <div
          style={{
            width: "48px",
            height: "3px",
            backgroundColor: "#fff",
            marginBottom: "16px",
          }}
        />
        <p className="mb-2">For general enquiries</p>
        <div className="mb-2">
          <span className="font-semibold">Address :</span>
          <br />
          110, 16th Road, Chembur, Mumbai – 400071
        </div>
        <div className="mb-2">
          <span className="font-semibold">Phone :</span>
          <br />
          +91 22 25208822
        </div>
        <div className="mb-2">
          <span className="font-semibold">Email :</span>
          <br />
          info@supremegroup.co.in
        </div>
      </div>
      <div className="p-4 h-8/12">
        <form className="flex flex-col gap-4 bg-opacity-10 p-6 rounded-lg w-96">
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 rounded bg-opacity-80 text-black focus:outline-none placeholder:font-bold"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 rounded bg-opacity-80 text-black focus:outline-none placeholder:font-bold"
          />
          <input
            type="text"
            placeholder="Subject"
            className="p-2 rounded bg-opacity-80 text-black focus:outline-none placeholder:font-bold"
          />
          <input
            placeholder="Message"
            rows={4}
            className="p-2 rounded bg-opacity-80 text-black focus:outline-none placeholder:font-bold"
          />
          <button
            type="submit"
            className="bg-white text-blue-700 font-bold py-2 px-4 rounded hover:bg-blue-100 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
