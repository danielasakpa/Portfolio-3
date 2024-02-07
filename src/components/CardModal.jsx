import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { VscLinkExternal } from "react-icons/vsc";

const CardModal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen.state && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen({ state: !isOpen.state })}
          className="fixed inset-0 z-50 grid p-6 overflow-y-scroll cursor-pointer lg:p-8 bg-slate-900/20 backdrop-blur place-items-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 relative text-white p-4 lg:p-6 rounded-lg w-[100%] lg:w-[60%] my-2 shadow-xl cursor-default"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ width: 30, height: 30 }}
              onClick={() => setIsOpen({ state: !isOpen.state })}
              className="absolute top-2 right-2 cursor-pointer border border-opacity-[20%] border-accent rounded-full p-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={"M6 18L18 6M6 6l12 12"}
              />
            </svg>
            <div className="relative z-10 mt-10 text-text">
              <img
                src={isOpen.item.imageUrl}
                alt=""
                className="w-[850px] min-h-[180px] sm:h-[max-content] bg-contain rounded-lg z-10"
              />
              <h2 className="text-[25px] hover-grow-animation mt-4">
                {isOpen.item.projectNum}
              </h2>
              <p className="mt-2 text-[17px] md:text-[20px]">
                {isOpen.item.description}
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-6">
                {isOpen.item.techs.map((tech, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center bg-accent text-[#6962ac] px-2 rounded-sm"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mt-6">
                {" "}
                <a
                  href={isOpen.item.liveSite}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex items-center px-8 rounded-md border border-opacity-[20%] border-accent text-[16px] leading-[36px] hover:opacity-[50%]"
                >
                  Live
                  <VscLinkExternal className="ml-1" size="12px" />
                </a>{" "}
                <a
                  href={isOpen.item.github}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex items-center px-8 rounded-md border border-opacity-[20%] border-accent text-[16px] leading-[36px] hover:opacity-[50%]"
                >
                  <FaGithub className="mr-2" size="20px" />
                  Source
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CardModal;
