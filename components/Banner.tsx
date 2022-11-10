import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import banner from "../public/images/Jeannie-Phan-Illustration-Branding-Airbnb-Go-Near.jpg";

type BannerProps = {};

const Banner: React.FC<BannerProps> = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="box relative h-[300px] sm:h-[400px] lg:h-[500px]
    xl:h-[600px] 2xl:h-[700px]"
    >
      <Image src={banner} layout="fill" objectFit="cover" />
      <div className="absolute top-1/2 w-full text-center">
        <p
          className="text-gray-900 font-bold mb-10 animate-bounce sm:text-lg"
          style={{ fontSize: "40px" }}
        >
          Not sure where to go? Prefect,
        </p>
        <button
          className="text-purple-500 bg-white px-10 py-4 shadow-md
        rounded-full font-bold my-3 hover:shadow-xl active:scale-90 
        transition duration-150"
        >
          Im flexible
        </button>
      </div>
    </motion.div>
  );
};
export default Banner;
