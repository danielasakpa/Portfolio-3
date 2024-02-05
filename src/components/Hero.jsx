import React from "react";
import { motion } from "framer-motion";
import { FaCss3Alt, FaNode, FaHtml5, FaReact, FaGithub } from "react-icons/fa";
import { SiRedux, SiFirebase, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { VscLinkExternal } from "react-icons/vsc";
import { BsMouse } from "react-icons/bs";
import Resume from "../assets/MyResume.pdf";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
  };

  const headingVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const easing = [0.42, 0, 0.58, 1];

  const iconColors = [
    {
      color: "bg-button1 opacity-50",
      icon: <FaCss3Alt size={20} color="#fff" />,
    },
    { color: "bg-[#85c0c1]", icon: <FaHtml5 size={20} color="#fff" /> },
    { color: "bg-[#85c0c1]", icon: <FaNode size={70} color="#fff" /> },
    {
      color: "bg-[#6962ac]",
      icon: (
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ ease: easing, duration: 1.6, delay: 0.5 }}
        >
          <FaReact size={70} color="#fff" />
        </motion.div>
      ),
    },
    {
      color: "bg-button1 opacity-50",
      icon: <FaGithub size={20} color="#fff" />,
    },
    {
      color: "bg-button1 opacity-50",
      icon: <SiTailwindcss size={20} color="#fff" />,
    },
    {
      color: "bg-button1 opacity-50",
      icon: <SiRedux size={20} color="#fff" />,
    },
    { color: "bg-[#ededf2]", icon: <SiFirebase size={40} color="#6962ac" /> },
    { color: "bg-[#96e9c6]", icon: null },
    { color: "bg-button1 opacity-50", icon: null },
    { color: "bg-button1 opacity-50", icon: null },
    {
      color: "bg-[#96e9c6]",
      icon: <IoLogoJavascript size={40} color="#fff" />,
    },
    { color: "bg-button1 opacity-50", icon: null },
    { color: "bg-[#85c0c1]", icon: null },
  ];

  return (
    <div className="flex items-center px-6 mt-16 text-text md:flex-row lg:mx-auto xl:w-5/6 md:px-[5%] xl:px-0">
      <motion.div
        className="lg:pr-4 lg:basis-2/2"
        variants={headingVariants}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: easing, duration: 0.8, delay: 0.5 }}
      >
        <h1 className="text-[3.125rem] leading-[60px] font-bold">
          I’m Daniel Asakpa
          <br />
          <span className="inline-block italic text-background italic-span">
            A Full Stack developer
          </span>{" "}
          <br />
          based in Lagos, Nigeria.
        </h1>
        <a
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-10 py-2 mt-10 w-full lg:w-[50%] bg-button1 rounded-md border border-opacity-[20%] border-accent text-[16px] leading-[36px] text hover:opacity-[50%]"
        >
          Resume
          <VscLinkExternal className="ml-2" size="12px" />
        </a>{" "}
        <ScrollLink
          to={"about"}
          className="flex items-start mt-10 cursor-pointer"
          spy={true}
          smooth={true}
          offset={-70}
          duration={700}
        >
          <BsMouse className="mr-2 animate-bounce" size={25} />
          <span className="text-[12px]"> Scroll to see more sections</span>
        </ScrollLink>
      </motion.div>
      <div className="flex items-center justify-center hidden basis-1/2 lg:block">
        <motion.div
          className="mx-auto parent"
          initial="hidden"
          animate="visible"
          variants={parentVariants}
        >
          {iconColors.map((item, index) => (
            <motion.div
              key={index}
              className={`div${index + 1} flex justify-center items-center ${
                item.color
              }`}
              variants={childVariants}
              transition={{ ease: easing, duration: 0.8 }}
            >
              {item.icon}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
