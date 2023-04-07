"use client";

import { motion } from "framer-motion";
import { AiOutlineCar, AiOutlineWifi } from "react-icons/ai";
import { BiCctv } from "react-icons/bi";
import { BsFire } from "react-icons/bs";
import { FaFireExtinguisher } from "react-icons/fa";
import { GiButterflyFlower } from "react-icons/gi";
import { GrWorkshop } from "react-icons/gr";
import { MdOutlineBathtub, MdOutlineCoffeeMaker } from "react-icons/md";
import { RiSafeLine } from "react-icons/ri";

const offersRowOne = [
  {
    label: "Garden view",
    icon: GiButterflyFlower,
  },
  {
    label: "Hot water",
    icon: BsFire,
  },

  {
    label: "Wifi",
    icon: AiOutlineWifi,
  },
  {
    label: "Coffee",
    icon: MdOutlineCoffeeMaker,
  },
  {
    label: "Security cameras on property",
    icon: BiCctv,
  },
];

const offersRowTwo = [
  {
    label: "Bathtub",
    icon: MdOutlineBathtub,
  },
  {
    label: "Dedicated workspace",
    icon: GrWorkshop,
  },
  {
    label: "Safe",
    icon: RiSafeLine,
  },
  {
    label: "Free parking on premises",
    icon: AiOutlineCar,
  },
  {
    label: "Fire extinguisher",
    icon: FaFireExtinguisher,
  },
];

type Props = {};

function Offers({}: Props) {
  return (
    <div>
      <p className="text-xl font-semibold">What this place offers</p>
      <div className="flex justify-start space-x-12 pt-6">
        <div className="flex flex-col gap-2">
          {offersRowOne.map((item, index) => (
            <motion.div
              initial={{
                x: -200,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              key={index}
              className="flex justify-start items-center text-center gap-4 my-1 cursor-pointer"
            >
              <item.icon size={25} className="text-gray-700" />
              <p className="text-neutral-500">{item.label}</p>
            </motion.div>
          ))}
        </div>
        {/* another row */}
        <div className="flex flex-col gap-2">
          {offersRowTwo.map((item, index) => (
            <motion.div
              initial={{
                x: 200,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              key={index}
              className="flex justify-start items-center text-center gap-4 my-1 cursor-pointer"
            >
              <item.icon size={25} className="text-gray-700" />
              <p className="text-neutral-500">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Offers;
