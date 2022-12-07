import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";

import { format } from "date-fns";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import MapBox from "../components/MapBox";

type SearchProps = {
  searchResults: any;
};

const Search: React.FC<SearchProps> = ({ searchResults }) => {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuest } = router.query;

  const formattedStartDate = format(new Date(startDate as any), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate as any), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Head>
        <title>Airbnb Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://brandlogos.net/wp-content/uploads/2022/07/airbnb-logo_brandlogos.net_vb6uh-512x512.png"
        />
      </Head>
      <Header placeholder={`${location} | ${range} | ${noOfGuest}`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuest} guest
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexible</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults?.map((item: any) => (
              <InfoCard
                key={item.img}
                img={item.img}
                location={item.location}
                description={item.description}
                title={item.title}
                star={item.star}
                price={item.price}
                total={item.total}
              />
            ))}
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="box hidden xl:inline-flex xl:min-w-[600px]"
        >
          <MapBox searchResults={searchResults} />
        </motion.div>
      </main>
      <Footer />
    </motion.div>
  );
};
export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch(
    "https://hasinduperera12.github.io/Application-Programming-Interface/info.json"
  ).then((res) => res.json());

  return {
    props: {
      searchResults,
    },
  };
}
