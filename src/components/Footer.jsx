import React from "react";

function Footer() {
  return (
    <div className="text-text mt-20 py-6 border-t border-opacity-[20%] border-accent">
      <div className="flex flex-col lg:flex-row justify-between items-center text-[13px] md:text-[16px] mx-auto xl:w-5/6 text-text lg:px-[5%] xl:px-0">
        <span className="inline-block mb-2 md:mb-4 lg:mb-0 ">
          Copyright &copy; 2024 copyright all right reserved
        </span>
        <span className="text-[12px] md:text-[13px]">
          Made with ❤ by{" "}
          <span className="underline underline-offset-4">Daniel Asakpa</span>
        </span>
      </div>
    </div>
  );
}

export default Footer;
