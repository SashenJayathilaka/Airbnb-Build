import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type SmallCardProps = {
  img: any;
  distance: any;
  location: any;
};

const SmallCard: React.FC<SmallCardProps> = ({ img, location, distance }) => {
  return (
    <motion.div
      initial={{
        x: 200,
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer
    hover:bg-gray-100 hover:scale-105 transition transform duration-200
    ease-out "
    >
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>

      <div className="">
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </motion.div>
  );
};
export default SmallCard;
