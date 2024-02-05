import React, { useRef } from "react";
import naomi from "../assets/images/naomi.jpg";
import effect1 from "../assets/images/effect-1.svg";
import { motion as m, useInView } from "framer-motion";

function About() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
  });

  const parentVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const easing = [0.42, 0, 0.58, 1];

  const fadeInFromBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0,
        stiffness: 100,
        damping: 18,
        ease: easing,
        duration: 0.8,
      },
    },
  };

  const staggerChildrenVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0,
        stiffness: 100,
        damping: 18,
        ease: easing,
        duration: 1,
      },
    },
  };

  return (
    <m.div
      ref={ref}
      animate={isInView ? "visible" : "hidden"}
      id="about"
      className="flex flex-col lg:flex-row justify-center lg:justify-between mx-auto xl:w-5/6 mt-32 md:mt-40 mb-20 relative px-6 lg:pb-[190px] relative md:px-[5%] xl:px-0"
    >
      <div
        initial="hidden"
        animate="show"
        className="relative flex justify-center lg:basis-2/2"
      >
        <m.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={isInView && { opacity: 1, x: 0 }}
          transition={{ ease: easing, duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ position: "relative" }}
        >
          <img
            src={naomi}
            alt=""
            className="w-[350px] md:max-w-[456px] max-h-[500px] md:max-h-[558px] rounded-md border border-opacity-[20%] border-accent z-10"
          />
          <m.img
            src={effect1}
            alt=""
            className="absolute -z-10 transform  rounded-md -left-[120px] -bottom-[120px] "
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          />
          <m.img
            src={effect1}
            alt=""
            className="absolute lg:hidden rounded-md -z-10 -right-[90px] -top-[80px] w-[200px]"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          />
        </m.div>
      </div>
      <div className="flex justify-start lg:basis-1/2 text-text mt-[180px] lg:mt-0">
        <m.div
          variants={parentVariants}
          whileInView={isInView && "visible"}
          viewport={{ once: true }}
          initial="hidden"
        >
          <m.span
            variants={fadeInFromBottom}
            className="block text-[35px] hover-grow-animation cursor-pointer"
          >
            About Me
          </m.span>
          <m.h2
            variants={fadeInFromBottom}
            className="text-[30px] md:text-[40px] leading-[40px] md:leading-[45px] linearPrimaryAccent font-bold mt-4"
          >
            I BRING YOUR DESIGN VISION TO LIFE THROUGH CODE{" "}
          </m.h2>
          <m.p
            variants={fadeInFromBottom}
            className="mt-4 text-[17px] md:text-[20px]"
          >
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from de
            Finibus Bonorum et Malorum by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </m.p>
          <m.div
            className="grid grid-cols-3 gap-2 md:gap-3 text-[12px] md:text-[14px] mt-10"
            variants={parentVariants}
            whileInView={isInView && "visible"}
            viewport={{ once: true }}
            initial="hidden"
          >
            <m.div
              className="flex flex-col justify-center basis-1/2 items-start p-2 md:p-3 bg-button1 rounded-md border border-opacity-[20%] border-accent"
              variants={staggerChildrenVariants}
            >
              <p className="">10+</p>
              <p className="">Projects Completed</p>
            </m.div>
            <m.div
              className="flex flex-col justify-center basis-1/2 items-start p-2 md:p-3 bg-button1 rounded-md border border-opacity-[20%] border-accent"
              variants={staggerChildrenVariants}
            >
              <p className="">2+</p>
              <p className="">Years Experience</p>
            </m.div>
            <m.div
              className="flex flex-col justify-center items-start p-2 md:p-3 bg-button1 rounded-md border border-opacity-[20%] border-accent"
              variants={staggerChildrenVariants}
            >
              <p className="">Continuous</p>
              <p className="">Learning Advocate</p>
            </m.div>
          </m.div>
        </m.div>
      </div>
      <m.img
        src={effect1}
        alt=""
        className="absolute hidden lg:block -right-[50px] lg:-right-[20px] -top-[70px] lg:-top-[60px] w-[200px] rounded-md -z-10"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      />
    </m.div>
  );
}

export default About;
