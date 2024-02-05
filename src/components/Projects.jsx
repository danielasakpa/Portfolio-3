import React, { useRef, useState } from "react";
import { projectItem } from "../assets/projectItem";
import Project from "./Project";
import { motion as m, useTransform, useScroll } from "framer-motion";
import CardModal from "./CardModal";

function Projects() {
  const [isOpen, setIsOpen] = useState({
    state: false,
    item: {},
  });

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

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

  return (
    <>
      <div
        id="work"
        className="px-6 py-10 md:py-20 mx-auto mt-5 xl:w-5/6 text-text  md:px-[5%] xl:px-0"
      >
        <span className="block text-[30px] lg:text-[35px] hover-grow-animation cursor-pointer">
          My Work
        </span>
        <h2 className="text-[28px] md:text-[40px] leading-[35px]  md:leading-[45px] linearPrimaryAccent font-bold mt-4">
          RECENT PROJECT
        </h2>
        <section ref={targetRef} className="relative h-[200vh] hidden lg:block">
          <div className="sticky flex items-center overflow-hidden top-16">
            <m.div
              style={{ x }}
              className="flex justify-center mt-10 gap-x-4 gap-y-6"
            >
              {projectItem.map((item, i) => (
                <Project
                  key={i}
                  item={item}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                />
              ))}
            </m.div>
          </div>
        </section>
        <m.div
          variants={parentVariants}
          whileInView={"visible"}
          viewport={{ once: true }}
          initial="hidden"
          className="grid grid-cols-1 mt-10 sm:grid-cols-2 justify-items-center gap-x-4 gap-y-6 lg:hidden"
        >
          {projectItem.slice(0, 5).map((item, i) => (
            <Project
              key={i}
              item={item}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          ))}
        </m.div>
      </div>
      <CardModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Projects;
