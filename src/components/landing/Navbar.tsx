"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

interface IMenu {
  title: string;
  link: string;
  className?: string;
  target?: string;
}

const Btn = ({ item }: { item: IMenu }) => {
  return (
    <Button asChild variant={"link"} className="text-lg hover:no-underline">
      <Link target={item.target} href={item.link}>
        {item.title}
      </Link>
    </Button>
  );
};
export const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.1,
          bounce: true,
        },
        y: 0,
      }}
      className="w-full min-w-1/3 flex items-center justify-center"
    >
      <div className="w-[95vw] lg:w-1/3 md:w-2/3 flex mb-10 p-3 justify-around rounded-full bg-[transperent] text-white text-2xl">
        <Button>
          <Link rel="stylesheet" href="" >Docs</Link>
        </Button>
        <Button>
          <Link href={""} target="blank">Github</Link>
        </Button>
        <Button>
          <Link rel="stylesheet" href="" >Replit Template</Link>
        </Button>
        <Button>
          <Link href={""} target="blank">Try Now</Link>
        </Button>
      </div>
    </motion.div>
  );
};
