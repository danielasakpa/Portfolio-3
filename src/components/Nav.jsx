import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { VscLinkExternal } from "react-icons/vsc";
import { Link as ScrollLink, Events } from "react-scroll";
import { useSpring, animated, config } from "react-spring";

const Nav = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Links = [
    {
      path: "about",
      name: "About",
    },
    {
      path: "work",
      name: "Work",
    },
    {
      path: "skills",
      name: "Skills",
    },
    {
      path: "contact",
      name: "Contact",
    },
  ];

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  React.useEffect(() => {
    Events.scrollEvent.register("set-active", handleSetActive);
    return () => {
      Events.scrollEvent.remove("set-active");
    };
  }, []);

  const menuAnimation = useSpring({
    transform: isMenuOpen ? `translateX(0%)` : `translateX(100%)`,
    config: config.default,
  });

  const iconAnimation = useSpring({
    transform: isMenuOpen ? `rotate(45deg)` : `rotate(0deg)`,
    config: config.default,
  });

  const linkAnimation = useSpring({
    opacity: isMenuOpen ? 1 : 0,
    transform: isMenuOpen ? `translateY(0)` : `translateY(-100%)`,
    config: config.default,
  });

  return (
    <>
      <nav className="sticky top-0 z-50 py-3 px-4 lg:px-0 border-b border-opacity-[20%] border-accent font-Poppins bg-background">
        <div className="flex items-center justify-between mx-auto xl:w-5/6 text-text md:px-[5%] xl:px-0">
          <a className="flex items-center mr-20 space-x-4" href="/">
            <img src={logo} alt="" className="w-10 h-10 rounded-full" />
            <span className="text-[16px] leading-[36px] m-0 p-0 font-bold">
              Daniel Asakpa
            </span>
          </a>
          <div className="hidden lg:flex">
            <ul className="flex space-x-12">
              {Links.map((link, id) => (
                <li key={id}>
                  <ScrollLink
                    className={`text-[16px] leading-[36px] text hover:opacity-[50%] cursor-pointer active-link  ${
                      activeLink === link.path ? "under" : ""
                    }`}
                    to={link.path}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onSetActive={handleSetActive}
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
            <a
              href="/"
              className="flex items-center ml-6 px-8 rounded-md border border-opacity-[20%] border-accent text-[16px] leading-[36px] hover:opacity-[50%]"
            >
              Blog
              <VscLinkExternal className="ml-1" size="12px" />
            </a>
          </div>
          <div
            className="cursor-pointer lg:hidden"
            onClick={toggleMenu}
            style={{ position: "relative", cursor: "pointer" }}
          >
            <animated.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ width: 24, height: 24, ...iconAnimation }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </animated.svg>
          </div>
          {isMenuOpen && (
            <animated.div
              className="fixed inset-0 p-4 lg:hidden bg-background h-[100svh]"
              style={{
                ...menuAnimation,
                zIndex: 1000,
              }}
            >
              <div className="flex justify-end">
                <div
                  className="cursor-pointer"
                  onClick={toggleMenu}
                  style={{ position: "relative", cursor: "pointer" }}
                >
                  <animated.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ width: 24, height: 24, ...iconAnimation }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={
                        isMenuOpen
                          ? "M6 18L18 6M6 6l12 12"
                          : "M4 6h16M4 12h16m-7 6h7"
                      }
                    />
                  </animated.svg>
                </div>
              </div>
              <animated.div style={linkAnimation}>
                <div className="flex flex-col items-center justify-center h-screen">
                  <ul className="flex flex-col space-y-4 text-center">
                    {Links.map((link, id) => (
                      <li key={id}>
                        <ScrollLink
                          className={`text-[16px] leading-[36px] text cursor-pointer`}
                          to={link.path}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          onSetActive={handleSetActive}
                          onClick={() => {
                            toggleMenu();
                          }}
                        >
                          {link.name}
                        </ScrollLink>
                      </li>
                    ))}
                    <li>
                      <a
                        href="/"
                        className="text-[16px] leading-[36px] cursor-pointer"
                        onClick={toggleMenu}
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
              </animated.div>
            </animated.div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
