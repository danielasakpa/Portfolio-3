import { motion } from "framer-motion";
import { FaCss3Alt, FaNode, FaHtml5, FaReact, FaGithub } from "react-icons/fa";
import { SiRedux, SiFirebase, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

const LoadingScreen = () => {
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

  const easing = [0.42, 0, 0.58, 1];

  const isMobile = window.innerWidth <= 768;

  const iconColors = [
    {
      color: "bg-button1 opacity-50",
      icon: <FaCss3Alt size={isMobile ? 15 : 20} color="#fff" />,
    },
    {
      color: "bg-[#85c0c1]",
      icon: <FaHtml5 size={isMobile ? 15 : 20} color="#fff" />,
    },
    {
      color: "bg-[#85c0c1]",
      icon: <FaNode size={isMobile ? 50 : 70} color="#fff" />,
    },
    {
      color: "bg-[#6962ac]",
      icon: (
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ ease: easing, duration: 1.6, delay: 0.5 }}
        >
          <FaReact size={isMobile ? 50 : 70} color="#fff" />
        </motion.div>
      ),
    },
    {
      color: "bg-button1 opacity-50",
      icon: <FaGithub size={isMobile ? 15 : 20} color="#fff" />,
    },
    {
      color: "bg-button1 opacity-50",
      icon: <SiTailwindcss size={isMobile ? 15 : 20} color="#fff" />,
    },
    {
      color: "bg-button1 opacity-50",
      icon: <SiRedux size={isMobile ? 15 : 20} color="#fff" />,
    },
    {
      color: "bg-[#ededf2]",
      icon: <SiFirebase size={isMobile ? 30 : 40} color="#6962ac" />,
    },
    { color: "bg-[#96e9c6]", icon: null },
    { color: "bg-button1 opacity-50", icon: null },
    { color: "bg-button1 opacity-50", icon: null },
    {
      color: "bg-[#96e9c6]",
      icon: <IoLogoJavascript size={isMobile ? 30 : 40} color="#fff" />,
    },
    { color: "bg-button1 opacity-50", icon: null },
    { color: "bg-[#85c0c1]", icon: null },
  ];

  return (
    <div className="w-full h-[100dvh] flex justify-center items-center px-4">
      <motion.div
        className="parent"
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
            transition={{ ease: easing, duration: 0.5 }}
          >
            {item.icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
