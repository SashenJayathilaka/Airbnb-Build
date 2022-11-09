import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

type HeaderProps = {
  placeholder?: any;
};

const Header: React.FC<HeaderProps> = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuest, setNoOfGuest] = useState<any>(1);
  const router = useRouter();

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuest,
      },
    });
  };
  return (
    <header
      className="sticky top-0 z-50 grid grid-cols-3 bg-white
    shadow-md p-5 md:px-10"
    >
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        <Image
          src="https://i.postimg.cc/ydyhjmC0/185785168-d82eb824-a402-4df3-912d-8787f46ba048.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      <div
        className="flex items-center border-2 rounded-full py-2 
      md:border-2 md:shadow-sm"
      >
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-500 placeholder-gray-400"
          placeholder={placeholder || "Start your Search"}
          type="text"
        />

        <SearchIcon
          className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full
        p-2 cursor-pointer md:mx-2"
        />
      </div>
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col col-span-3 mx-auto"
        >
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number Of Guest
            </h2>
            <UserIcon className="h-5" />
            <input
              value={noOfGuest}
              onChange={(e) => setNoOfGuest(e.target.value)}
              min={1}
              type="number"
              className="w-12 pl-2 text-lg outline-none"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};
export default Header;
