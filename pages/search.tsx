import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";

import { format } from "date-fns";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import MapBox from "../components/MapBox";

const infoCardData = [
  {
    _id: "631c28b7ad9638f542c4820a",
    img: "https://i.postimg.cc/pXdGBLT7/19414d6a-8471-4088-8ea3-ba034acc87ca.webp",
    location: "Maidenwells, Wales, United Kingdom",
    description:
      "“The Orchard” is the ultimate in luxury glamping, set in a very private location with stunning countryside views...",
    title: "“The Orchard” Beautiful location, amazing views",
    star: 4.21,
    price: 215,
    total: 421,
    longitude: "51.5072",
    latitude: "0.1276",
    time: "2022-09-10T06:03:35.644Z",
    __v: 0,
  },
  {
    _id: "631c28b7ad9638f542c48209",
    img: "https://i.postimg.cc/5twRTFb9/8fa80ff2-07bf-4be3-94c2-fc7b52fb2006.webp",
    location: "Sutton, England, United Kingdom",
    description:
      "Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.",
    title: "Unique glamping experience near Ely & Cambridge",
    star: 4.53,
    price: 863,
    total: 1025,
    longitude: "51.5072",
    latitude: "0.1276",
    time: "2022-09-10T06:03:35.632Z",
    __v: 0,
  },
  {
    _id: "631c28b7ad9638f542c4820b",
    img: "https://i.postimg.cc/26nZNh56/b71d143a-ecc8-43af-a4bd-1480d98df502.webp",
    location: "Diggle, England, United Kingdom",
    description:
      "Nestled high in the beautiful Saddleworth hills, enjoy a taste of Tiny House living in a peaceful woodland setting all to yourself...",
    title: "Romantic Woodland Lodge",
    star: 4.92,
    price: 170,
    total: 700,
    longitude: "51.5072",
    latitude: "0.1276",
    time: "2022-09-10T06:03:35.650Z",
    __v: 0,
  },
  {
    _id: "631c28b7ad9638f542c4820e",
    img: "https://i.postimg.cc/k55pXN6T/c2d88f8b-9911-4805-add6-128677bc2fa9.webp",
    location: "Forton, England, United Kingdom",
    description:
      "Set in a charming garden. Spacious yet cosy, this perfect size 1 bedroom (plus sofa bed) pod is perfectly sized for a couple or young...",
    title: "Charming Garden Pod* Couple/family with Hot tub",
    star: 3.97,
    price: 129,
    total: 735,
    longitude: "51.5072",
    latitude: "0.1276",
    time: "2022-09-10T06:03:35.662Z",
    __v: 0,
  },
  {
    _id: "631c28b7ad9638f542c4820f",
    img: "https://i.postimg.cc/htQJF6Ms/30429d64-d49e-4b75-8ca3-26b8d3ec9426.webp",
    location: "United Kingdom",
    description:
      "Panorama is a perfectly named chalet on the coast of Whitsand Bay - with Panoramic views looking over Rame Head, Seaton, Looe & Downderry...",
    title: "Beach View, Romantic chalet, Whitsand Bay Cornwall",
    star: 4.96,
    price: 138,
    total: 919,
    longitude: "51.5072",
    latitude: "0.1276",
    time: "2022-09-10T06:03:35.664Z",
    __v: 0,
  },
  {
    _id: "631c28b7ad9638f542c48210",
    img: "https://i.postimg.cc/Jz9tqxNF/a9d8f0a4-5f5b-4dcf-b95e-4ab7553842bb.webp",
    location: "Downderry, Cornwall, United Kingdom",
    description:
      "Arguably one of the best sea views on the Cornish holiday letting market. Free on street parking. On premises parking during August.",
    title: "Coastal Studio Loft Apartment",
    star: 4.9,
    price: 111,
    total: 887,
    longitude: "51.5072",
    latitude: "0.1276",
    time: "2022-09-10T06:03:35.665Z",
    __v: 0,
  },
  {
    _id: "631c28b7ad9638f542c48211",
    img: "https://i.postimg.cc/h4LKTMwv/1454b26f-2b5a-4ca9-8a6e-9a24ea99ac2e.webp",
    location: "Kidwelly, Wales, United Kingdom",
    description:
      "We offer traditional bed & breakfast at our 19th-century Welsh farmhouse. We are ideally placed for you to explore the idyllic surrounding...",
    title: "Kidwelly Farmhouse B&B -The Loft",
    star: 4.06,
    price: 109,
    total: 546,
    longitude: "51.5072",
    latitude: "0.1276",
    time: "2022-09-10T06:03:35.667Z",
    __v: 0,
  },
  {
    _id: "631c28b7ad9638f542c48212",
    img: "https://i.postimg.cc/kXHK8nL7/454d554d-56ad-4877-96a7-db6c97217ec7.webp",
    location: "Mullion, England, United Kingdom",
    description:
      "A stunningly situated 3 bedroom house, overlooking idyllic Polurrian Beach on the edge of the Lizard. The perfect spot for a magic Cornwall family holiday...",
    title: "3 bed house with amazing sea view and beach access",
    star: 4.62,
    price: 245,
    total: 1989,
    longitude: "51.5072",
    latitude: "0.1276",
    time: "2022-09-10T06:03:35.668Z",
    __v: 0,
  },
  {
    _id: "631c28b7ad9638f542c4820d",
    img: "https://i.postimg.cc/G2QspDWm/3e63a8b9-d298-4cf6-8c3b-b20ba04e9968.webp",
    location: "Bude, Cornwall, United Kingdom",
    description:
      "Last minute deal.... LAST MINUTE Availability FRI 26th Aug - 2nd Sept 2022 Was £2500 Now £1473 Contemporary...",
    title: "The Hayloft Five Star 3 bed Country Barn, Nr Bude",
    star: 4.58,
    price: 314,
    total: 2507,
    longitude: "51.5072",
    latitude: "0.1276",
    time: "2022-09-10T06:03:35.656Z",
    __v: 0,
  },
  {
    _id: "631c28b7ad9638f542c4820c",
    img: "https://i.postimg.cc/BvJFfNzV/8520a083-d771-485b-8b39-0dad6f5a3f3e.webp",
    location: "Brecon, Powys, Wales, United Kingdom",
    description:
      "A 'Tiny House', off-grid Shepherd's Hut with panoramic views of the spectacular Brecon Beacons. Accessed by...",
    title: "Shepherd's Hut, Off-Grid, Hot Tub and Beacons View",
    star: 4.67,
    price: 187,
    total: 1280,
    longitude: "51.5072",
    latitude: "0.1276",
    time: "2022-09-10T06:03:35.652Z",
    __v: 0,
  },
];

type SearchProps = {};

const Search: React.FC<SearchProps> = () => {
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
            {infoCardData?.map((item: any) => (
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
          <MapBox searchResults={infoCardData} />
        </motion.div>
      </main>
      <Footer />
    </motion.div>
  );
};
export default Search;
