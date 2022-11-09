import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type LargeCardProps = {
  img: any;
  title: any;
  description: any;
  buttonText: any;
};

const LargeCard: React.FC<LargeCardProps> = ({
  img,
  title,
  description,
  buttonText,
}) => {
  return (
    <motion.div
      initial={{
        x: 200,
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="relative py-16 cursor-pointer"
    >
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-2 w-64 text-white">{title}</h3>
        <p className="text-white">{description}</p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
          {buttonText}
        </button>
      </div>
    </motion.div>
  );
};
export default LargeCard;
