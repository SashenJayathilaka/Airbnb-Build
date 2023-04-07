"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ClientOnly from "./ClientOnly";

type Props = {};

function Footer({}: Props) {
  const [country, setCountry] = useState("United States");

  useEffect(() => {
    fetch(
      `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_LOOKUP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setCountry(data.country));
  }, []);

  return (
    <ClientOnly>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
        <motion.div
          initial={{
            x: 200,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-4 text-xs text-gray-800"
        >
          <h5 className="font-bold">ABOUT</h5>
          <p>Newsroom</p>
          <p>Learn about new features</p>
          <p>Letter from our founders</p>
          <p>Careers</p>
          <p>Investors</p>
        </motion.div>
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-4 text-xs text-gray-800"
        >
          <h5 className="font-bold">Support</h5>
          <p>Help Center</p>
          <p>AirCover</p>
          <p>Cancellation options</p>
          <p>Safety information</p>
          <p>Report a neighborhood concern</p>
        </motion.div>
        <motion.div
          initial={{
            x: 200,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-4 text-xs text-gray-800"
        >
          <h5 className="font-bold">Community</h5>
          <p>Airbnb.org: disaster relief housing</p>
          <p>Support Afghan refugees</p>
          <p>Combating discrimination</p>
        </motion.div>
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-4 text-xs text-gray-800"
        >
          <h5 className="font-bold">Hosting</h5>
          <p>Try hosting</p>
          <p>AirCover for Hosts</p>
          <p>Explore hosting resources</p>
          <p>How to host responsibly</p>
        </motion.div>
        <p className="text-sm">{country}</p>
      </div>
    </ClientOnly>
  );
}

export default Footer;
