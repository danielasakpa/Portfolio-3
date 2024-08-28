import React, { useRef } from "react";
import ContactForm from "./ContactForm";
import contactImg from "../assets/images/daniel4.jpg";
import { SocialIcon } from "react-social-icons";
import { motion as m, useInView } from "framer-motion";

function Contact() {
  const easing = [0.42, 0, 0.58, 1];

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <div
      ref={ref}
      id="contact"
      className="mt-20 lg:mt-40 w-[95%] mx-auto xl:w-5/6 text-text relative rounded-lg border border-opacity-[20%] border-accent"
    >
      <div className="absolute top-[50px] left-[70px] hidden lg:block">
        <img
          src={contactImg}
          alt="Discuss Your Project"
          className="bg-contain rounded-lg w-[320px] h-[300px] border border-opacity-[20%] border-accent"
        />
        <m.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={isInView && { opacity: 1, y: 0 }}
          transition={{ ease: easing, duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <div>
            <span className="inline-block text-[14px] text-accent mb-2 font-extralight opacity-60">
              WRITE AN E-MAIL
            </span>
            <p className="text-[20px] font-semibold cursor-pointer hover:opacity-60">
              danielasakpa@gmail.com
            </p>
          </div>
          <div className="mt-6">
            <span className="inline-block text-[14px] text-accent mb-2 font-extralight opacity-60">
              SEND A MESSAGE
            </span>
            <p className="text-[20px] font-semibold cursor-pointer hover:opacity-60">
              +2349022434392
            </p>
          </div>
          <div className="flex gap-3 mt-8">
            <SocialIcon
              url="https://twitter.com"
              network="linkedin"
              className="border-2 rounded-full border-accent hover:opacity-60"
            />
            <SocialIcon
              url="https://twitter.com"
              network="facebook"
              className="border-2 rounded-full border-accent hover:opacity-60"
            />
            <SocialIcon
              url="https://twitter.com"
              network="instagram"
              className="border-2 rounded-full border-accent hover:opacity-60"
            />
            <SocialIcon
              url="https://twitter.com"
              network="twitter"
              className="border-2 rounded-full border-accent hover:opacity-60"
            />
          </div>
        </m.div>
      </div>
      <div className=" flex items-center justify-center py-10 border-b border-opacity-[20%] border-accent px-4 ">
        <div className="hidden basis-1/2 lg:block"></div>
        <m.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={isInView && { opacity: 1, x: 0 }}
          transition={{ ease: easing, duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full lg:basis-2/3"
        >
          <h2 className="block text-[35px] leading-[45px] hover-grow-animation cursor-pointer">
            Let’s Discuss Your Project
          </h2>
          <p className="mt-4 text-[17px]">
            Always available if the right Project/Job comes along, Feel free to
            contact me.
          </p>
        </m.div>
      </div>
      <div className="flex flex-col items-center justify-center px-4 py-12 lg:flex-row ">
        <div className="hidden basis-1/2 lg:block"></div>
        <div className="w-full lg:basis-2/3">
          <ContactForm />
        </div>
        <m.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={isInView && { opacity: 1, y: 0 }}
          transition={{ ease: easing, duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full mt-10 lg:hidden"
        >
          <div>
            <span className="inline-block text-[12px] md:text-[14px] text-accent mb-2 font-extralight opacity-60">
              WRITE AN E-MAIL
            </span>
            <p className="text-[17px] md:text-[20px] font-semibold cursor-pointer hover:opacity-60">
              danielasakpa@gmail.com
            </p>
          </div>
          <div className="mt-6">
            <span className="inline-block text-[12px] md:text-[14px] text-accent mb-2 font-extralight opacity-60">
              SEND A MESSAGE
            </span>
            <p className="text-[17px] md:text-[20px] font-semibold cursor-pointer hover:opacity-60">
              +2349022434392
            </p>
          </div>
          <div className="flex gap-3 mt-8">
            <SocialIcon
              url="https://twitter.com"
              network="linkedin"
              className="border-2 rounded-full border-accent hover:opacity-60"
            />
            <SocialIcon
              url="https://twitter.com"
              network="facebook"
              className="border-2 rounded-full border-accent hover:opacity-60"
            />
            <SocialIcon
              url="https://twitter.com"
              network="instagram"
              className="border-2 rounded-full border-accent hover:opacity-60"
            />
            <SocialIcon
              url="https://twitter.com"
              network="twitter"
              className="border-2 rounded-full border-accent hover:opacity-60"
            />
          </div>
        </m.div>
      </div>
    </div>
  );
}

export default Contact;
