import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  DiReact,
  DiNodejsSmall,
  DiJsBadge,
  DiCss3,
  DiMongodb,
  DiBootstrap,
} from "react-icons/di";
import {
  SiMui,
  SiGithub,
  SiExpress,
  SiNextdotjs,
  SiCsharp,
  SiTailwindcss,
} from "react-icons/si";
import { motion as m, useInView } from "framer-motion";

const skills = [
  { icon: DiReact, text: "React: Building dynamic web applications" },
  { icon: DiNodejsSmall, text: "Node.js: Backend server development" },
  { icon: DiJsBadge, text: "JavaScript: Frontend and backend scripting" },
  { icon: DiCss3, text: "CSS: Styling of webpages" },
  { icon: DiMongodb, text: "MongoDB: Storing and managing data" },
  { icon: DiBootstrap, text: "Bootstrap: Designing responsive websites" },
  { icon: SiMui, text: "Material-UI: React component library" },
  { icon: SiGithub, text: "GitHub: Code management and version control" },
  {
    icon: SiExpress,
    text: "Express.js: Backend framework for web applications",
  },
  {
    icon: SiNextdotjs,
    text: "Next.js: React framework for server-side rendering",
  },
  { icon: SiCsharp, text: "C#: General-purpose programming language" },
  { icon: SiTailwindcss, text: "Tailwind CSS: Utility-first CSS framework" },
];

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const generateSquares = () => {
  return shuffle(skills).map((sq) => (
    <motion.div
      key={sq.text}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="cursor-pointer bg-button1 text-4xl border border-opacity-[20%] border-accent flex flex-col items-center justify-center p-5  hover:opacity-[50%] w-full h-full"
    >
      {" "}
      <sq.icon />
      <span className="text-[12px] lg:text-[14px] mt-2 text-center leading-[25px]">
        {sq.text}
      </span>
    </motion.div>
  ));
};

const Skills = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  const isMobile = window.innerWidth <= 768;

  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: 0.1,
    once: true,
  });

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  const easing = [0.42, 0, 0.58, 1];

  return (
    <div
      id="skills"
      className="relative px-6 py-10 mx-auto mt-5 xl:w-5/6 text-text md:px-[5%] xl:px-0"
    >
      <m.div
        ref={ref}
        initial={{ opacity: 0, x: -70 }}
        whileInView={isInView && { opacity: 1, x: 0 }}
        transition={{ ease: easing, duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <span className="block text-[35px] hover-grow-animation">
          My Skills
        </span>
        <p className="mt-4 text-[20px]">
          I have extensive experience working with a variety of technologies as
          a developer. I've developed and maintained multiple projects using
          these technologies, and I'm always eager to learn more.
        </p>
      </m.div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5 w-[100%] lg:w-[80%] lg:mx-auto place-content-center mt-16">
        {squares.map((sq) => sq)}
      </div>
    </div>
  );
};

export default Skills;
