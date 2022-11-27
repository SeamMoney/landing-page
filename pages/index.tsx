import type { NextPage } from "next";
import Head from "next/head";
import Heading from "../dark/components/heading/Heading";
import Navigation from "../dark/components/navigation/Nav";
import SectionPopularAuction from "../dark/Sections/SectionPopularAuction";
import SectionScrollEth from "../dark/Sections/SectionScrollEth";
import SectionStats from "../dark/Sections/SectionStats";
import SectionUsers from "../dark/Sections/SectionUsers";
import styles from "./../styles/dark/Home.module.css";
import favicon from "../public/images/favicon.ico";
import preview from "../public/images/preview.png";

const DarkHome: NextPage = () => {
  return (
    <div className={`${styles.container}`}>
      <Head>
        <title>Seam Money</title>
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
        <meta property="og:url" content="https://seam.money"/>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Seam Money" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:description" content="Distributed Yield and Staking Solution on Aptos" />
        <meta property="og:image" content={preview.src} />
      </Head>
      <Navigation />
      <Heading />
      <div className="container">
        <SectionPopularAuction />
        <SectionStats />
        <SectionUsers />
      </div>
      <SectionScrollEth />
      <div className="container">
      </div>
    </div>
  );
};

export default DarkHome;
