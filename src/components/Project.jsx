import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { VscLinkExternal } from "react-icons/vsc";
import { IoIosAddCircleOutline } from "react-icons/io";
import { motion as m, useInView } from "framer-motion";

function Project({ item, isOpen, setIsOpen }) {
  const isMobile = window.innerWidth <= 768;
  const istab = window.innerWidth <= 1024;

  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: 0.3,
    once: true,
  });

  let tagNum = istab ? 2 : 3;

  const easing = [0.42, 0, 0.58, 1];

  const staggerChildrenVariants = {
    hidden: { opacity: 0, x: 70 },
    visible: {
      opacity: 1,
      x: 0,
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
      variants={staggerChildrenVariants}
      ref={ref}
      initial={isMobile && "hidden"}
      animate={isInView && isMobile && "visible"}
      className="px-2 pt-2 pb-8 bg-[#7142AB] text-text rounded-lg h-[max-content] max-w-[350px] md:max-w-[700px] lg:w-[450px]"
    >
      <div className="relative rounded-lg group">
        <img
          src={item.imageUrl}
          alt=""
          className="w-[450px] h-[220px] md:h-[300px] lg:h-[260px] bg-contain rounded-lg z-10"
        />
        <div
          onClick={() => setIsOpen({ state: !isOpen.state, item: item })}
          className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-full transition-opacity bg-black rounded-lg opacity-0 cursor-pointer overlay group-hover:opacity-60"
        >
          <IoIosAddCircleOutline className="" size="40px" />
        </div>
      </div>
      <div className="flex items-center justify-between px-2 mt-12">
        <div>
          <h4 className="text-[20px]">{item.projectNum}</h4>
          <div className="flex text-[14px] lg:text-[16px] items-center gap-3 mt-4">
            {item.techs.slice(0, tagNum).map((tech, index) => (
              <div
                key={index}
                className="flex justify-center items-center bg-accent text-[#6962ac] px-2 rounded-sm"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
        <Link
          to=""
          className="flex justify-center items-center bg-button1 w-14 h-14 rounded-full border border-opacity-[20%] border-accent hover:opacity-[50%]"
        >
          <VscLinkExternal className="" size="16px" />
        </Link>
      </div>
    </m.div>
  );
}

export default Project;
