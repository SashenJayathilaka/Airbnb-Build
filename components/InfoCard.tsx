import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

type InfoCardProps = {
  img: any;
  location: any;
  description: any;
  title: any;
  star: number;
  price: any;
  total: any;
};

const InfoCard: React.FC<InfoCardProps> = ({
  img,
  location,
  description,
  title,
  star,
  price,
  total,
}) => {
  return (
    <motion.div
      initial={{
        x: -200,
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80
    hover:shadow-lg transition duration-200 ease-out first:border-t"
    >
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-5" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div>
            <p className="text-lg font-semibold pb-2 lg:text-2xl">
              $ {price} / night
            </p>
            <p className="text-right font-extralight">$ {total}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default InfoCard;
