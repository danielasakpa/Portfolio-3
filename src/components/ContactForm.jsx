import React from "react";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
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
  );
};

export default ContactForm;