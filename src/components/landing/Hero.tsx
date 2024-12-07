import React from "react";
import HeaderTxt from "../svgs/header";
import { motion } from "framer-motion";
import Link from "next/link";
import { ButtonSvg } from "../svgs/elements";

const Hero = () => {
  return (
    <div id="screen1" className="w-full min-h-screen grid grid-rows-2">
      <div className="flex items-center justify-center ">
        <HeaderTxt width="auto" height={"100%"} />
      </div>
      <div className="w-full grid md:flex gap-8 lg:px-14 ">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.5 },
            y: 0,
          }}
          className="w-full h-full flex flex-col md:pt-20"
        >
          <h4 className="uppercase font-semibold border-l-4 pl-2 border-white">
            Revolutionizing freelancing with  Wallet-2-Wallet Trust.
          </h4>
        </motion.div>
        <div className="w-full h-full flex flex-row-reverse md:pt-20">
          <div className="relative w-[60%]">
            <motion.div
              id="get-started-svg"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.85 }}
              className="absolute top-0 right-0 left-0"
            >
              <Link
                href={""}
              >
                <ButtonSvg height="auto" width="100%" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
