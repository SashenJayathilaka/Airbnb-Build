import React from "react";
import Image from "next/image";

type MediumCardProps = {
  img: any;
  title: any;
};

const MediumCard: React.FC<MediumCardProps> = ({ img, title }) => {
  return (
    <div
      className="cursor-pointer hover:scale-105 transform transition 
    duration-300 ease-out"
    >
      <div className="relative h-60 w-80">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="text-xl mt-3 text-gray-700 font-semibold">{title}</h3>
    </div>
  );
};
export default MediumCard;
