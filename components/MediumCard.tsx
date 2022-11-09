import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

type MediumCardProps = {
  img: any;
  title: any;
};

const MediumCard: React.FC<MediumCardProps> = ({ img, title }) => {
  return (
    <motion.div
      initial={{
        x: -200,
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="cursor-pointer hover:scale-105 transform transition 
    duration-300 ease-out"
    >
      <motion.div className="relative h-60 w-80" whileTap={{ scale: 0.9 }}>
        <Image src={img} layout="fill" className="rounded-xl" />
      </motion.div>
      <h3 className="text-xl mt-3 text-gray-700 font-semibold">{title}</h3>
    </motion.div>
  );
};
export default MediumCard;
