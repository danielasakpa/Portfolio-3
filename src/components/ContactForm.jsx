import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import sendEmail from "../utils/email";
import { BallTriangle } from "react-loader-spinner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const form = useRef();

  const [emailSent, setEmailSent] = useState("");

  useEffect(() => {
    if (!emailSent) {
      return;
    }

    if (emailSent === "OK") {
      toast.success("Message sent ✅");
    }

    if (emailSent !== "OK" && emailSent !== "loading") {
      toast.error("Error sending message ❌");
    }
  }, [emailSent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("form.current:", form.current);
    console.log("Form data:", formData);

    sendEmail(form, setEmailSent);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block text-[16px] text-text mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name *"
              className="w-full p-3 bg-button1 border border-opacity-[20%] border-accent rounded focus:outline-none focus:border-indigo-500"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-[16px] text-text mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email *"
              className="w-full p-3 bg-button1 border border-opacity-[20%] border-accent rounded focus:outline-none focus:border-indigo-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-[16px] text-text mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject *"
            className="w-full p-3 bg-button1 border border-opacity-[20%] border-accent rounded focus:outline-none focus:border-indigo-500"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-[16px] text-text mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Your Message *"
            className="w-full p-3 bg-button1 border border-opacity-[20%] border-accent rounded resize-none focus:outline-none focus:border-indigo-500"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-3 font-medium text-white transition-all bg-indigo-500 rounded hover:bg-indigo-600 active:scale-95"
          >
            Submit
          </button>
        </div>
      </form>
      {emailSent === "loading" && (
        <>
          <div
            className={`flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}
          >
            <BallTriangle
              height="80"
              width="80"
              radius={5}
              color="#ffffff"
              ariaLabel="ball-triangle-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
          <div className={`opacity-25 fixed inset-0 z-100 bg-black`}></div>
        </>
      )}
    </>
  );
};

export default ContactForm;
